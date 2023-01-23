import React, { Component } from "react";
import Swiper, { Navigation, Pagination } from "swiper";
// import "swiper/swiper-bundle.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

Swiper.use([Navigation, Pagination]);

export default class App extends Component {
  state = {
    list: ["111", "222", "333"],
  };

  componentDidMount() {
    //best place to make Ajax request
    setTimeout(() => {
      this.setState({
        list: ["aaa", "bbb", "ccc", "ddd"],
      });
    }, 1000);
  }

  componentDidUpdate() {
    //Dom finish update
    new Swiper(".swiper", {
      // configure Swiper to use modules
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }

  render() {
    return (
      <div>
        <div
          className="swiper"
          style={{ height: "200px", background: "yellow" }}
        >
          <div className="swiper-wrapper">
            {this.state.list.map((item) => (
              <div className="swiper-slide" key={item}>
                {item}
              </div>
            ))}
          </div>
          <div class="swiper-pagination"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-scrollbar"></div>
        </div>
      </div>
    );
  }
}
