import React, { Component } from 'react'
import nobita from '../assets/Nobita.png'
import doraemon from '../assets/doraemon.png'

export default class Buoi2 extends Component {

    state = {
        img: nobita
    }
    

  render() {
    const changeImg = (img) => {
        return(
            this.setState ({
            img: img
        })
        )
    }
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled">Disabled</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
{/* chuong trinh thay doi hinh anh trong react */}
{/* sự thay đổi */}

{/* state */}
{/* setState là phương thức đi kèm với state nó hỗ trợ thay đổi dữ liệu */}
        <div>
            <h1>chương trình thay đổi hình ảnh</h1>
            <img width={300} src={this.state.img}></img>
            <button className='btn btn-success' onClick={()=> changeImg(doraemon)}>doraemon</button>
            <button className='btn btn-danger'onClick={()=> changeImg(nobita)}>nobita</button>
        </div>
      </div>
    )
  }
}
