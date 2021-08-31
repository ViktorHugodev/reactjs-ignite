import styled from "styled-components";
import {transparentize} from 'polished'

export const Container = styled.form`
  h2 {
    color: bar(--text-title);
    font-size:1.5rem;
    margin-bottom:2rem;
  }
  
  input {
    width: 100%;
    padding: 0 1.5rem;
    height:4rem;
    border-radius: .25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    font-family: 400;
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
  

  button[type="submit"] {
    width: 100%;
    height: 4rem;
    background: var(--green);
    border: none;
    color: var(--shape);
    transition: filter .2s;
    border-radius: .25rem;
    font-weight: 600;
    
    &:hover {
      filter: brightness(.9);
    }
    
    &::placeholder {
      color: var(--text-body)
    }
  }
`

export const TransactionsButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: .5rem;
  
`

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red'
}

const colors = {
  green: '#33CC95',
  red: '#E52E4D'
}

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  border: 1px solid #d7d7d7;
  transition: border-color .2s;
  
  background: ${(props) => props.isActive ? transparentize(0.8, colors[props.activeColor]) : 'transparent'};
  

  img {
    margin-right: 1.5rem;
    transform: scale(.8);
  }
  
  span {
    font-size:1rem;
    color:var(--text-titles);
  }
  
  &:hover {
    border-color: #aaa;
  }
    
  
`