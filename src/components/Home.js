import React from 'react'
import CardBasket from './CardBasket'
import Data from './Data'

const Home = () => {
  return (
    <div className="home">
      {Data?.map((item, index) => {
        return <CardBasket {...item} key={index} />
      })}
    </div>
  )
}

export default Home
