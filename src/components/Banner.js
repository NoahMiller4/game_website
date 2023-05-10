import React from 'react'
import Button from './Button'
let url = 'https://i.redd.it/qpiln2r753141.gif'
let text = 'Submit'

function Banner() {
  return (
    <section>
      <h1>Steam Sales</h1>
      <h2>Enter your Email to stay up to date with new Video Games</h2>
      <h2>and get notified on all the latest sales</h2>
      <input type='text' placeholder='Email@email.ca'></input>
      <Button text={text} isColor={true} />
      <Button text="Clear" isColor={false} />
      <figure>
          <img alt='banner' src={url} className='banner'></img>
      </figure>
      <h1>Steam Most Popular</h1>
    </section>
  )
}

export default Banner