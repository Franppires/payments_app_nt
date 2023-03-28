import axios from "axios"
import { useState, useEffect } from "react"
import Modal from "./components/Modal"
import { Container } from "./Style"


export default function App() { 
    
    const [users, setUser] = useState([]) // lista de usuários
    const [userSelected, setUserSelected] = useState({}) // usuário selecionado


    // pegar api
    useEffect(() => { 
        axios.get('https://www.mocky.io/v2/5d531c4f2e0000620081ddce')
        .then((response) => {
            setUser(response.data)
        })
    }, [])

    // fechar modal 
    const closeModal = () => {
        setUserSelected(false)
    }  

    
    // selecionar transacao e resultado
    const payTransaction = () => { 

        //conferir se input valor está vazio + msg de obrigatoriedade de preenchimento, necessario separar os dados em um const? 

        axios.post('https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989', { 

            card_number: cardSelected,
            cvv: cards, // não consegui pegar a numero correto
            expiry_date: cards,
            destination_user_id: userSelected.id,
            value: value
        })

        .then((response) => { 
            if (response.status === 200 && cardSelected === 1111111111111111) { 
                console.log('card valid')

            } else if (response.status === 200 && cardSelected === 4111111111111234) { 
                console.log('card invalid')
            }
        })
        .catch((error) => console.log(error))
            
    }  

    // função para pegar valor do input 
    const handleValue = (e) => {
        setValue(e.target.value)
    }
    
    // função para pegar cartão
    const handleCard = (e) => { 
        setCardSelected(e.target.value);
    }


    return ( 
        <>
            {/* retorna uma lista de usuarios da api */}
            { users.map(user => {
                return ( 
                    <Container key={user.id}>
                        <img src={user.img} alt="foto do usuario"/>
                        <div>
                            <p> Nome do Usuário {user.name}</p>
                            <p> ID: {user.id} - Username: {user.username}</p>
                        </div>
                        <button type="button" onClick={() => setUserSelected(user)} >Pagar</button>
                    </Container>
                )
            })}

            {/* abrir modal para transação de pagamento    */}
            { userSelected.name && 
                <Modal  
                    userSelected={userSelected}
                    closeModal={closeModal}
                    payTransaction={payTransaction} // modo de fazer a chamada para pagamento está certa?
                    handleValue={handleValue}
                    handleCard={handleCard}
                />
            }
        </>
    )
}