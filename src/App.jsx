import axios from "axios"
import { useState, useEffect } from "react"
import { cards } from "./components/Cards"
import Modal from "./components/Modal"
import ModalSuccess from "./components/ModalSuccess"
import ModalError from "./components/ModalError"
import { Container } from "./Style"

export default function App() { 
    
    const [users, setUser] = useState([]) // lista de usuários
    const [userSelected, setUserSelected] = useState({}) // usuário selecionado
    const [value, setValue] = useState('') // valor do input 
    const [cardSelected, setCardSelected] = useState('') // cartão selecionado
    const [modalSuccess, setModalSuccess] = useState(false) // modal de sucesso 
    const [modalError, setModalError] = useState(false) // modal de erro
    const [message, setMessage] = useState('') // mensagem de preenchimento

    // pegar api
    useEffect(() => { 
        axios.get('https://www.mocky.io/v2/5d531c4f2e0000620081ddce')
        .then((response) => {
            setUser(response.data)
        })
    }, [])

    // fechar modal faz tudo junto ou melhor fazer separado ??
    const closeModal = () => {
        setUserSelected(false)
        setModalError(false)
        setModalSuccess(false)
    }  
    
    // função para pegar valor do input 
    const handleValue = (e) => {
        setValue(e.target.value)
    }
    
    // função para pegar cartão
    const handleCard = (e) => { 
        setCardSelected(e.target.value);
    }

    // selecionar transacao e resultado
    const payTransaction = () => { 
        if(value == '') { 
                setMessage('O campo de valor é obrigatório para a transação')
            return
        }

        axios.post('https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989', { 

            card_number: cards[cardSelected].card_number,
            cvv: cards[cardSelected].cvv, 
            expiry_date: cards[cardSelected].expiry_date,
            destination_user_id: userSelected.id,
            value: value
        })

        .then((response) => { 
            if (cards[cardSelected].card_number == 1111111111111111) { 
                console.log('card valid') 
                setModalSuccess(true)
            } 
            else if (cards[cardSelected].card_number == 4111111111111234) { 
                console.log('card invalid')
                setModalError(true)
            }
        })
        .catch((error) => 
            setModalError(true)
        )
                     
        .finally(() => { 
            setUserSelected({})
            setMessage('')
        })
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
                    payTransaction={payTransaction} 
                    handleValue={handleValue}
                    handleCard={handleCard}
                    message={message}
                />
            }

            {/* abrir modal de sucesso  */}
            { modalSuccess &&
                <ModalSuccess
                    closeModal={closeModal}
                /> 
            }
            
            {/* abrir modal de erro */}
            { modalError &&
                <ModalError
                    closeModal={closeModal}
                />
            }
        </>
    )
}