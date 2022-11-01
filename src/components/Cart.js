import React from 'react'
import { RiDeleteBinLine } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {
  const cart = useSelector(({ addToCart }) => addToCart)
  const dispatch = useDispatch()
  const RemoveHendler = (item) => {
    dispatch({ type: 'remove', payload: item })
  }
  const Inc = (item) => {
    dispatch({ type: 'inc', payload: item })
  }
  console.log(cart)
  return (
    <div className="cart">
      {cart?.map((cardItem) => {
        return (
          <div className="cart__wrapper" key={cardItem.id}>
            <div className="cart_demo">
              <div className="cart__img">
                <img src={cardItem.img} alt="" />
              </div>
              <div className="cart__title">
                <h4>{cardItem.title}</h4>
                <p>{cardItem.price} $</p>
              </div>
            </div>
            <div className="cart__count">
              <button>-</button>
              <p>{cardItem.quantity} </p>
              <button onClick={() => Inc(cardItem?.id)}>+</button>
            </div>
            <div
              className="remove__card"
              onClick={() => RemoveHendler(cardItem.id)}
            >
              <span>
                <RiDeleteBinLine />
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Cart
