import React, { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import Order from './Order';

const showOrder = (props) => {
  let sum = 0
  props.order.forEach(el => sum += Number.parseFloat(el.price));
  return(
    <div>
      {props.order.map(el => (
        <Order onDelete={props.onDelete} key={el.id} item={el}/>
      ))}
      <p className='sum'>Сумма: {new Intl.NumberFormat().format(sum)}$</p>
    </div>
  )
}

const showNothing = () => {
  return (
    <div className='empty'>
      <h2>Товаров пока нет</h2>
    </div>
  )
}

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)
  return (
    <header>
        <div>
            <span className='logo'>Hockey Stuff</span>
            <ul className='nav'>
                <li>О нас</li>
                <li>Контакты</li>
                <li>Кабинет</li>
            </ul>
            <FaCartShopping onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>
            
            {cartOpen && (
              <div className='shop-cart'>
                {props.order.length > 0 ?
                  showOrder(props) : showNothing()}
                {/* {props.order.map(el => (
                  <Order key={el.id} item={el}/>

                ))} */}
              </div>
            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
