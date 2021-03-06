import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer'

import './Subtotal.css'

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue()

    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Part of the homework Subtotal ({basket.length}{' '}
                            items): <strong>{value}</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input className='gift_input' type='checkbox' />{' '}
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
            <button className='subtotal_btn'>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
