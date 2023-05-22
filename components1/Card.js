import React from "react";
import { cardObj } from "../data/Data";
class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cardObj: cardObj
        }
    }

    incval(Recdata) {
        this.setState((datacopy) => ({
            cardObj: datacopy.cardObj.map((val) => {
                if (Recdata.Heading == val.Heading) {
                    return {
                        ...val, OrderedQ: val.OrderedQ + 1
                    }

                } else {
                    return val
                }
            })
        }))
    }

    decval(Recdata) {
        this.setState((datacopy) => ({
            cardObj: datacopy.cardObj.map((val) => {
                if (Recdata.Heading == val.Heading && val.OrderedQ > 0) {
                    return {
                        ...val, OrderedQ: val.OrderedQ - 1
                    }
                } else {
                    return val
                }
            })
        }))
    }

    totalAmount = ()=>{
        let sum=0;
        this.state.cardObj.forEach((val)=>{
            if(val.OrderedQ >0 ){
                sum=sum+(val.Price * val.OrderedQ);
            }
        })

        this.props.totalAmount(sum);
    }

    render() {
        let html = this.state.cardObj.map((data) => {
            return (
                <div>
                    <center>
                    <img src={data.Img} alt="" />
                    <h2>{data.Heading}</h2>
                    <div className="span-pq">
                        <span>Rs. {data.Price}.00</span>
                        <span>{data.Quantity}KG</span>
                    </div>
                    <div className="btn">
                    <div className="inc-btn">
                        <button onClick={() => { this.incval(data) }}>+</button><span>₹{data.Price * data.OrderedQ}</span>
                    </div>
                    <div className="dec-btn">
                        <button onClick={() => { this.decval(data) }}>-</button><span>{data.Quantity * data.OrderedQ}Kg</span>
                    </div>
                    </div>
                    <div className="cart-btn">
                        <button onClick={this.totalAmount}>Add to Cart</button>
                    </div>
                    </center>
                </div>
            )
        })
        return (
            <div>
            <div className="df">
                {html}
            </div>
            </div>
        )

    }


}



export default Card;