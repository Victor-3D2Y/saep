import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Perfil from './Perfil';
import Main from './Main';
function App() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        // Faz uma requisição GET para o backend para buscar a lista de usuários
        axios.get('http://localhost:3001/api/usuarios')
            .then(response => setUsuarios(response.data))
            .catch(error => console.error("Erro ao buscar usuários:", error));
    }, []);

    return (
        <div className="App">
           

            <Header />
            <div id='principal'>
                <Perfil foto="logo_faculhub.png" />
                <Main />
            </div>
        </div>
    );
}

export default App;


// <h1>Lista de Usuários</h1>
// {
//     usuarios.map((usuario) => (
//         <p key={usuario.idUsuario}>{usuario.nome}</p>
//     ))
// }

