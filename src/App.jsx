import axios from "axios"
import { useState, useEffect } from "react"
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
        </>
    )
}