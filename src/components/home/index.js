import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Slider from "../slider";
import * as actionCreators from "../../actions/accounts";
import Imagem from "../imagem";
// var feed = new instafeed({
//   get: "user",
//   userId: "38592838",
//   clientId: "fdd876c8ab564dc0a4ab18805c4b2a7c",
//   accessToken: "",
//   limit: 10,
//   template: '<a class="animation" href="{{link}}"><img src="{{image}}" /></a>'
// });
// console.log(feed.run());

const settingsSlider = {
  dots: false,
  infinite: false,
  speed: 500,
  centerMode: true,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 6
};
const mapStateToProps = state => {
  return {
    accounts: state.accounts
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

class Home extends Component {
  render() {
    return this.props.accounts.map((user, i) => (
      <UserShow key={i} userId={user} />
    ));
  }
}

class UserShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentWillMount() {
    fetch(
      `https://api.instagram.com/v1/users/${
        this.props.userId
      }/media/recent/?access_token=38592838.1677ed0.0b8da50252494c18b58e39b7cccc10f6&count=14`
    )
      .then(response => response.json())
      .then(({ data }) => {
        this.setState({ data });
      });
  }
  render() {
    console.log(this.state.data);
    return this.state.data.length ? (
      <div className="ContainerAccount">
        <div
          style={{
            backgroundImage: "linear-gradient(0.45turn,#e66465, #9198e5)"
          }}
          className="PaperAccount"
        >
          <Slider
            onEdge={() => console.log("edge")}
            // className={this.props.sliderClass || ""}
            {...settingsSlider}
          >
            <div>
              <div className="profilePic">
                <a
                  target="_blank"
                  href={`https://www.instagram.com/${
                    this.state.data[0].user.username
                  }`}
                >
                  <div style={{ display: "block", textAlign: "center" }}>
                    <img
                      style={{
                        width: 80,
                        height: 80,
                        borderRadius: 40,
                        margin: "auto"
                      }}
                      alt={this.state.data[0].user.username}
                      src={this.state.data[0].user.profile_picture}
                    />
                    <br />
                    <p style={{ color: "white", margin: 0 }}>
                      @{this.state.data[0].user.username}
                    </p>
                  </div>
                </a>
              </div>
            </div>
            {this.state.data.map(item => (
              <div key={item.id}>
                <Imagem url={item.images.standard_resolution.url} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    ) : null;
  }
}

const HomeRedux = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeRedux;
