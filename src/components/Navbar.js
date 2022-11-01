import React from 'react'
import { Link } from 'react-router-dom'
import { BsCart3 } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'

const Navbar = () => {
  const cart = useSelector(({ addToCart }) => addToCart)
  const dispatch = useDispatch()

  return (
    <div className="navbar">
      <Link to={'/'}>
        <h1>online shop</h1>
      </Link>

      <Link to={'/cart'}>
        <span>
          <BsCart3 /> <div className="cart__details">0</div>
        </span>
      </Link>
    </div>
  )
}

export default Navbar
