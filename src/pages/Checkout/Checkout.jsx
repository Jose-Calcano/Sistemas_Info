import React from 'react'
import PaypalCheckoutButton from '../../components/PaypalCheckoutButton/PaypalCheckoutbutton';
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import '../Checkout/Checkout.css'


export default function Checkout () {
    const product = {
        description: '',
        price: 19
    }
    return (
    <PayPalScriptProvider options = {{'client-id': process.env.REACT_APP_PAYPAL_CLIENT_ID}}>
    <div className="checkout">
        <h1>Paypal Checkout</h1>
        <p className='checkout-title'> Titulo factura</p>
        <p className='checkout-description'>
            Descripcion factura
        </p>
        <h1 className='checkout-price'>$19</h1>
        <button className='checkout-button'>
            <div className='grey-circle'>
                <div className='purple-circle'>
                </div>
            </div>
            <div className='text-container'>
                <p className='text'>Pague</p>
            </div>
        </button>
        <div className='separator'></div>
        <div className='paypal'>
          <p className='checkout-title'>O pague con paypal</p>
          <div className='paypal-button-container'>
            <PaypalCheckoutButton product = {product}/>
           </div>
        </div>
    </div>
    </PayPalScriptProvider>
  );
};
