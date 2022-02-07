import styled from 'styled-components';

const Container = styled.header`
  background: var(--blue);
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 10rem;

  button {
    font-size: 1rem;
    background: var(--blue-light);
    border-radius: 0.25rem;
    padding: 0.5rem 2rem;
    border: 0;
    color: var(--shape);
    font-weight: 600;
    height: 3rem;

    transition: 0.2s filter;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export { Container, Content }