import React from 'react'
import { styled } from 'styled-components'

const Button = (props) => {
  console.log(props);
  return (
    <ButtonStyle style={props} onClick={props.onClick}>{props.text}</ButtonStyle>
  )
}

export default Button

const ButtonStyle = styled.button`
    padding: 6px 20px;
    font-size: 20px;
    background: ${(props)=> props.color}
`