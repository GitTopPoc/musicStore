import React, {useState} from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import {ProductConsumer} from "../../Context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import style from "../../css/checkOut/style.module.css"
import CheckOutList from "./CheckOutList";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const Cart = () => {

    let [checkOutProcessing, setCheckOutProcessing] = useState(false);
    let [orderConfirmed, setOrderConfirmed] = useState(false);
    let [orderNumber, setOrderNumber] = useState();
    const [phone, setPhone] = useState()

    let confirmOrder = () => {
        setOrderConfirmed(true);
        setOrderNumber(Math.floor(Math.random() * 100000))
    }
    return (
        <section>
            <ProductConsumer>

                {(value) => {
                    const {cart} = value;
                    if(!checkOutProcessing) {
                        if (cart.length > 0) {
                            return (
                                <div>
                                    <Title name="Cart" category="Products" />
                                    <CartColumns />
                                    <CartList value={value} />
                                    <CartTotals value={value} />
                                    <div className={style.checkout_button_wrapper}><button className={style.check_out_button} onClick={() => {setCheckOutProcessing(true)}}>Place Order</button></div>
                                </div>
                            );
                        } else {
                            return <EmptyCart />;
                        }
                    } else {
                        return <div className={style.container}>
                            <div className={style.check_out_wrapper}>
                                {
                                    !orderConfirmed ? <div>
                                        <p className={style.check_out_heading}>You ordered</p>
                                        {cart.length > 0 && <CheckOutList value={value}/>}
                                        <p className={style.check_out_heading}>Left Your Contacts To Confirm Order</p>
                                        <div className={style.input_wrapper}>
                                            <input className={style.check_out_input} placeholder={"First Name"} type="text"/>
                                            <input className={style.check_out_input} placeholder={"Last Name"} type="text"/>
                                            <input className={style.check_out_input} placeholder={"Email"} type="email"/>
                                            <PhoneInput className={style.check_out_input}
                                                        placeholder="Phone Number"
                                                        value={phone}
                                                        onChange={setPhone}
                                                        limitMaxLength={5}/>
                                            <div className={`${style.checkout_button_wrapper} ${style.confirm_button}`}>
                                                <button className={style.check_out_button} onClick={() => {confirmOrder()
                                                }}>Place Order
                                                </button>
                                            </div>
                                        </div>
                                    </div>: <div className={style.confirm_order_wrapper}>
                                        <p className={style.confirm_text}>Order Successfully Placed. Your order number is #{orderNumber}. Our manager will contact you soon.</p></div>
                                }

                            </div>
                        </div>
                    }

                }}
            </ProductConsumer>
        </section>
    );
};

export default Cart;