import { BoxFinal, Footer, Header, Main, Overlay } from "../Style";

export default function ModalError({ closeModal }) {
  return (
    <Overlay>
      <BoxFinal>
        <Header>
            <div>Recibo de pagamento</div>
            <button onClick={closeModal}>  X   </button>
        </Header>
        <Main>
          <div>Pagamento não foi concluído com sucesso</div>
        </Main>
        <Footer> 
          <button onClick={closeModal}>Fechar</button>          
        </Footer>
      </BoxFinal>
    </Overlay>
  )
}
