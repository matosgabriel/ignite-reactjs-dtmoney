import styled from "styled-components";
import { transparentize, darken } from 'polished';

interface TransactionTypeButtonProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#33cc95',
  red: '#e52e4d'
}

const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 3rem;
    background: #e7e9ee;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    } 
  }

  button[type=submit] {
    width: 100%;
    padding: 0 1.5rem;
    height: 3rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: 0.2s filter;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 0.5rem;
`;

const TransactionTypeButton = styled.button<TransactionTypeButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  border: 1px solid #d7d7d7;
  background: ${(props) => props.isActive 
    ? transparentize(0.9, colors[props.activeColor])
    : 'transparent'
  };

  border-radius: 0.25rem;
  transition: 0.2s border-color;

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;

export { Container, TransactionTypeContainer, TransactionTypeButton }