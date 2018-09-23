import React from 'react'
import styled from 'styled-components'

export const Button = (props) => {
  const StyledButton = styled.button`
    border: 3px solid #0f2664;
    background-color: white;
    border-radius: 5px;
    padding: 10px 20px;
    color: #0f2664;
    cursor: pointer;
    font-size: 16px;
    outline: none;
    transition: background-color 0.3s;
    > span {
      transform: scale(1);
      transition: all 0.3s;
    }
    &:hover {
      background-color: #0f2664;
      color: #95bef8;
      > span {
        transform: scale(0.9);
        display: inline-block;
      }
    }
  `
  return <StyledButton {...props}>
    <span>{props.children}</span>
  </StyledButton>
}

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`
