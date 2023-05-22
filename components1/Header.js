import React from "react";
import './Header.css';
import cart from './logo.png';
class Header extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <div className="head-container">
                    <div className="head">
                        <div className="logo">
                            <img src={cart} />
                        </div>
                        <div className="name">
                            <h1>GREEN_GROCERY</h1>
                        </div>
                        <ul className="links">
                            <li> <a href="#">Home</a></li>
                            <li> <a href="#">Fruits & Vegatables</a></li>
                            <li> <a href="#">Spices</a></li>
                            <li> <a href="#">Diary & Bakery</a></li>
                        </ul>
                        <div className="mycart">
                            <h4>MY CART <h1>₹{this.props.totalAmt}.00</h1></h4>
                        </div>

                    </div>
                </div>
            </div>
        )
    }


}



export default Header;