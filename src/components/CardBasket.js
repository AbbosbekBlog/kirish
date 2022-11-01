import React from 'react'
import { AiOutlineHeart, AiOutlineEye } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'

const CardBasket = (props) => {
  const { id, img, title, deck, price, quantity } = props
  const dispatch = useDispatch()

  const addCard = (item) => {
    dispatch({
      type: 'Add',
      payload: item,
    })
  }

  return (
    <div className="cardBasket">
      <div className="basket__image">
        <img src={img} alt="img" />
      </div>
      <div className="basket__body">
        <h4>{title}</h4>
        <p>{deck}</p>
      </div>
      <div className="basket__foot">
        <p>{price} $</p>
        <button onClick={() => addCard(props)}>ADD To Cart</button>
      </div>
      <div className="basket__overlay">
        <span>
          <AiOutlineHeart />
        </span>
      </div>
    </div>
  )
}

export default CardBasket
