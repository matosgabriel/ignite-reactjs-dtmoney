import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f2f2f5;
    --red: #e52e4d;
    --blue: #5429cc;
    --green: #33cc95;

    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --shape: #fff;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    // Dispositivos com a tela de até 1080px de largura
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    
    // Dispositivos com a tela de até 720px de largura
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  // Personalização da barra de rolagem
  body::-webkit-scrollbar {
    width: 0.75rem;
  }
  body::-webkit-scrollbar-tack {
    background: #333;
  }
  body::-webkit-scrollbar-thumb {
    background-color: #333;    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  // Estilização do overlay do modal
  .react-modal-overlay {
    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  // Estilização do conteúdo do modal
  .react-modal-content {
    width: 90%;
    max-width: 576px;
    background: var(--background);
    border-radius: 0.25rem;
    padding: 3rem;
    position: relative;
  }

  // Estilização do botão "close" do modal
  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: 0.2s filter;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export { GlobalStyle }