import React, { Component } from "react";
import axios from "axios";

export default class Cinema extends Component {
  state = {
    cinemaList: [],
  };

  search = React.createRef();
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
      this.setState({ cinemaList: result.data.data.films });
    });
  }

  // we will talk about function life cycle later. More suitbale
  //for making a request.
  render() {
    return (
      <div>
        <input onInput={this.handleInput}></input>
        <div>
          {this.state.cinemaList.map((item) => (
            <dl key={item.filmId}>
              <dt>{item.name}</dt>
              <dd>{item.synopsis}</dd>
            </dl>
          ))}
        </div>
      </div>
    );
  }

  handleInput = (event) => {
    console.log(event.target.value);
    let newArr = this.state.cinemaList.filter((item) =>
      item.name.toUpperCase().includes(event.target.value.toUpperCase())
    );

    this.setState({
      cinemaList: newArr,
    });

    //setState is asynchronous
    //console.log(this.state.cinemaList) display the original list.
  };
}

/*
  filter
*/

var arr = ["aaa", "abc", "bcc"];
//filter take in a return function. If it is return true, it
//will keep this value.
var newarr = arr.filter((item) => item.includes("a"));
console.log(newarr);
