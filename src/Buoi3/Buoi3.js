import React, { Component } from "react";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import Child from "./Child";

export default class Buoi3 extends Component {
  listArray = {
    mangSP: [
      { maSP: 1, tenSP: "IphoneX", gia: 100, hinhAnh: img1 },
      { maSP: 2, tenSP: "IphoneXs", gia: 100, hinhAnh: img2 },
      { maSP: 3, tenSP: "Iphone11", gia: 100, hinhAnh: img3 },
      { maSP: 4, tenSP: "Iphone12", gia: 100, hinhAnh: img4 },
    ],
  };
  //   props: truyền dữ liệu thông qua các component
  render() {
    return (
      <div>
        <Child listArrayssss={this.listArray} />
      </div>
    );
  }
}
