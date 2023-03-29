import { NumericFormat } from "react-number-format";
import { cards } from "./Cards";
import { Overlay, Box, Header, Main, Footer, Message } from "../Style";

export default function Modal({userSelected, closeModal, payTransaction, handleValue, handleCard, message}) { 
   
    return (
        <Overlay>
            <Box> 
                <Header>
                    <div>Pagamento para   <strong>    {userSelected.name}  </strong>   </div>
                    <button onClick={closeModal}>  X   </button>
                </Header>
                <Main>
                    <Message>{message}</Message>
                    <NumericFormat 
                    decimalScale="2" decimalSeparator=","  thousandSeparator="." fixedDecimalScale prefix="R$ " placeholder="R$ 0,00" onChange={handleValue} />

                    <select onChange={handleCard}>
                        <option value="">   Selecione o cartão  </option>
                        {cards.map((card, id) => { 
                            return (
                                <option value={id}  key={id}> 
                                    Cartão com final: {card.card_number.substring(12)}
                                </option>
                            )
                        })}
                    </select>
                </Main>  
                <Footer>
                    <button onClick={payTransaction}>Pagar</button>
                    <button onClick={closeModal}>Cancelar</button>
                </Footer>   
            </Box>
        </Overlay>
        
    )
}
