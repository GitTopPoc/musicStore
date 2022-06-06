import React from 'react';
import style from "../../css/checkOut/style.module.css";


const CheckOutList = (props) => {
    return <div>
        <hr width={"80%"}/>
        {props.value.cart.map((item) => {
            return <div>
                <div className={style.check_out_item}>
                    <p className={style.check_out_amount}>1 x </p>
                    <p className={style.check_out_text}>{item.company}</p>
                    <p className={style.check_out_text}>{item.title}</p>
                    <p className={style.check_out_price}>{item.price}$</p>
                </div>
                <hr width={"80%"}/>
            </div>;
        })}
        <p className={style.check_out_total}>Total: {props.value.cartSubTotal.toFixed(2)}$</p>
        <p className={style.check_out_total}>Tax (20%): {props.value.cartTax}$</p>
        <p className={style.check_out_total}>Total with tax: {props.value.cartTotal}$</p>
        <hr width={"80%"}/>
    </div>
};

export default CheckOutList;