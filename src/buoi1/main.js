import React, {Component} from "react";
import './buoi1.css'
import Header from "./header";
import ContentLeft from "./contentLeft";
import ContentRight from "./contentRight";
import Footer from "./footer";

export default class Main extends Component{
    render() {
        return (
            <div>
                <Header/>
                <div className="main">
                    <ContentLeft/>
                    <ContentRight/>
                </div>
                <Footer/>
            </div>
        )
    }
}