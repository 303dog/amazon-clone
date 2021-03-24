import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import {useStateValue} from './StateProvider';
import ProductCart from './ProductCart';

function Checkout() {

    const[{basket}] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout__left'>

                {
                    basket.length === 0 ? (
                        <div>
                            <h2 className='checkout__title'>Your Shopping cart is empty</h2>
                            <p>You have no items in your cart. Please add items.</p>
                        </div>
                    ) : (
                        <div>
                            <h2 className='shoppingbaskettitle'>Your Current Order Contains:</h2>
                            {
                                basket.map(item => (
                                    <ProductCart
                                        id={item.id}
                                        title={item.title}
                                        price={item.price}
                                        image={item.image}
                                        rating={item.rating}
                                    />
                                ))
                            }
                        </div>
                    )
                }
            </div>
            {
                basket.length > 0 && (
                    <div className='checkout__right'>
                        <Subtotal />
                    </div>
                )
            }
        </div>
    )
}

export default Checkout;