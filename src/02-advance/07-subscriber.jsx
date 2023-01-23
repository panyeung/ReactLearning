import React, { Component } from "react";
import axios from "axios";
import "./css/03-communication.css";

var bus = {
  list: [],
  subscribe(callback) {
    this.list.push(callback);
  },
  publish(text) {
    //iterate the list, use the callback function
    this.list.forEach((callback) => {
      callback && callback(text);
    });
  },
};
export default class App extends Component {
  constructor() {
    super();
    // use axios to make request
    //axios.get("https address").then(res=>{}).catch(err=>{console.log(err)})

    //without header

    // axios
    //   .get(
    //     "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=8925711"
    //   )
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=8925711",
      method: "get",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16592243541973116565716993"}',
        "X-Host": "mall.film-ticket.film.list",
      },
    }).then((result) => {
      console.log(result.data.data.films);
      this.setState({ data: result.data.data.films });
    });
  }

  state = {
    data: [],
    clickData: {},
  };
  render() {
    return (
      <div>
        {this.state.data.map((item) => (
          <FilmItem key={item.filmId} {...item}></FilmItem>
        ))}
        <FilmDetail {...this.state.clickData}></FilmDetail>
      </div>
    );
  }
}

class FilmItem extends Component {
  render() {
    let { name, poster, synopsis } = this.props;
    return (
      <div
        className="filmitem"
        onClick={() => {
          bus.publish(synopsis);
        }}
      >
        <img src={poster} alt={name}></img>
        <h4>{name}</h4>
      </div>
    );
  }
}

class FilmDetail extends Component {
  state = {
    info: "",
  };
  constructor() {
    super();
    bus.subscribe((info) => {
      console.log("Inside the FilmDetail", info);
      this.setState({ info: info });
    });
  }
  render() {
    return (
      <div className="filmdetail">
        <p>{this.state.info}</p>
      </div>
    );
  }
}

//publisher
bus.publish("testing1010");
