import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';

import { Container } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose?(event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>): void;
}

Modal.setAppElement('#root');

function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel='Example modal'
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >

      <button onClick={onRequestClose} className='react-modal-close'>
        <img src={closeImg} alt="Close Modal" />
      </button>
      
      <Container>
        <h2>Cadastrar transação</h2>

        <input type='text' placeholder='Título' />
        <input type='number' placeholder='Valor' />

        <div>
          <button type='button'>Entrada</button>
          <button type='button'>Saída</button>
        </div>

        <input type='text' placeholder='Categoria' />

        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  );
}

export { NewTransactionModal }