import React from 'react'
import { useState } from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js';

const PaypalCheckoutButton = (props) => {
    const {product} = props;

    const [paidFor, setPaidFor] = useState(false);
    const [error , setError] = useState(null);


    const handleApprove = (orderId) => {
        setPaidFor(true);


    };

    if (paidFor){
        alert('Gracias por su compra')
    }

    if(error){
        alert(error);
    }

    return ( <PayPalButtons
    style = {{
        color:'silver',
        layout: 'horizontal',
         height: 48,
         tagline: false,
         shape: 'pill'

    }}
    onClick = {(data, actions) => {
        const hasAlreadyBoughtCourse = false

        if(hasAlreadyBoughtCourse) {
            setError(
                'Ya pago su consulta'
            );
            return actions.reject()
            }else{
                return actions.resolve()
        }
    }}
    createOrder = {(data, actions) => {
        return actions.order.create({
            purchase_units:[
                {
                    description: product.description,
                    amount: {
                    value: product.price
                    }
                }
            ]
            })
         }}
    onApprove = {async(data , actions) => {
         const order = await actions.order.capture();
         console.log('order', order);

         handleApprove(data.orderID);
         }}
    onCancel = {() => {

    }}
    onError = {(err) => {
        setError(err);
        console.error('PayPal Checkout onError',err)
        }}
      />
    );
};

export default PaypalCheckoutButton;

