import React from 'react'
import GreetingEmail from '../../atoms/Dashboard/GreetingEmail'
import GreetingMessage from '../../atoms/Dashboard/GreetingMessage'

const Greeting = () => {
  return (
  <div className="">
    <GreetingMessage>Hi</GreetingMessage>{" "} <GreetingEmail>attahgbube@gmail.com</GreetingEmail> 
  </div>
  )
}

export default Greeting