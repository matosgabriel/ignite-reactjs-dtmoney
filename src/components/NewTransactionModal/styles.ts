import styled from "styled-components";

const Container = styled.form`
  >button {
    border: 5px solid #000;
  }
  
  img {
    position: absolute;
    right: 3rem;
    top: 2rem;
  }
  
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
    border: 1px solid #e7e9ee;
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

  div {
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;

    button {
      height: 3rem;
      color: var(--text-title);
      border: 2px solid #e7e9ee;
      background: var(--background);
      border-radius: 0.25rem;
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

export { Container }