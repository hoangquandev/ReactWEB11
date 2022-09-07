import React, { Component } from "react";

export default class Child extends Component {
  state = {
    img: this.props.listArrayssss.mangSP[3].hinhAnh,
  };
  changeImg = (img) => {
    return this.setState({
      img: img,
    });
  };
  render() {
    // statefull có 2 cách
    // cách 1:
    // console.log(this.props.listArrayssss);
    // let fatherProps = this.props.listArrayssss
    // console.log(fatherProps);
    // cách 2:
    let { listArrayssss } = this.props;
    // console.log(listArrayssss);
    // stateless có 3 cách

    return (
      <div className="row">
        <div className="col-6">
          <img src={this.state.img} />
        </div>
        <div className="col-6">
          {listArrayssss.mangSP.map((item, index) => {
            return (
              <button key={index} onClick={() => this.changeImg(item.hinhAnh)}>
                <img src={item.hinhAnh} style={{ width: 200, height: 300 }} />
              </button>
            );
          })}
        </div>
        {/* dùng map(item, index) phải có key={index} để ko hiện lỗi */}
        {/* {listArrayssss.mangSP.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.hinhAnh} style={{ width: 200, height: 300 }}></img>
              <h1> {item.tenSP}</h1>
              <p>{item.maSP}</p>
              <p>{item.gia}</p>
            </div>
          );
        })} */}
      </div>
    );
  }
}
