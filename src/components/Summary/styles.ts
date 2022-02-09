import styled from "styled-components";

const colors = {
  green: '#33cc95',
  red: '#e52e4d',
}

interface CardProps {
  highlightColor?: 'green' | 'red';
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -7rem;
  font-size: 1rem;
  `;

const Card = styled.div<CardProps>`
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
  color: ${(props) => 
    props.highlightColor !== undefined ? 'var(--shape)' : 'var(--text-title)'
  };
  
  background: ${(props) => {
    return props.highlightColor !== undefined
      ? (props.highlightColor === 'green'
        ? colors['green']
        : colors['red']
      )
    : 'var(--shape)'
  }};
  
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;
  }
`;

export { Container, Card }