import React, { Component } from "react";
import axios from "axios";
import "./css/03-communication.css";

const GlobalContext = React.createContext(); // create context
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
    info: {},
  };
  render() {
    return (
      <GlobalContext.Provider
        value={{
          call: "testing",
          sms: "Text",
          info: this.state.info,
          changeInfo: (value) => {
            this.setState({
              info: value,
            });
          },
        }}
      >
        <div>
          {this.state.data.map((item) => (
            <FilmItem key={item.filmId} {...item}></FilmItem>
          ))}
          <FilmDetail></FilmDetail>
        </div>
      </GlobalContext.Provider>
    );
  }
}

class FilmItem extends Component {
  render() {
    let { poster, name, grade } = this.props;
    return (
      <GlobalContext.Consumer>
        {(value) => {
          return (
            <div
              className="filmitem"
              onClick={() => {
                console.log(value);
                value.changeInfo(this.props);
              }}
            >
              <img src={poster} alt={name}></img>
              <h3>{name}</h3>
              <h4>{grade}</h4>
            </div>
          );
        }}
      </GlobalContext.Consumer>
    );
  }
}

class FilmDetail extends Component {
  render() {
    return (
      <GlobalContext.Consumer>
        {(value) => (
          <div className="filmdetail">
            <p>{value.info.synopsis}</p>
          </div>
        )}
      </GlobalContext.Consumer>
    );
  }
}
