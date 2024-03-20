import { Image } from 'react-bootstrap';
import '../assets/css/UserScreen.css'
import React, { useState } from 'react';

function UserForm() {
    const [user, setUser] = useState({
        name: '',
        cpf: '',
        birthdate: '',
        email: '',
        cidade: '',
        estado: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        // Enviar informações do usuário para o servidor
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    return (
        <div>
            <div className='navbar'>
                <Image src={require("../assets/images/Logo.png")} width={120} />
                <a href='/'><h1 className="h1"><i>BLUE </i>MARBLE</h1></a>
                <a href='artigos'><h3>ONGs</h3></a>
                <a href='batepapos'><h3>Bate Papo</h3></a>
                <a href='jogos'><h3>Jogos</h3></a>
                <textarea placeholder='Pesquisar conteúdo' name="search" cols="50" rows="1"></textarea>
            </div>
            <hr />
            <div className='box'>
                <div>
                    <div className='flexImage'>
                        <Image src={require("../assets/images/17004.png")} width={120}></Image>
                        <div className='User'>
                            <h1>Teste Gonçalves Teste</h1>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div className='flex'>
                    <div className='edit'>
                        <h4>
                            <a href="/editUser">Editar Usuario</a>
                        </h4>
                        <h4>
                            <a href="/editImage">Editar Foto</a>
                        </h4>
                        <h4>
                            <a href="/changeSenha">Trocar Senha</a>
                        </h4>
                        <h4>
                            <a href="/registerEmail">Email Registrado</a>
                        </h4>
                        <h4>
                            <a href="/help">Ajuda</a>
                        </h4>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className=''>
                            <br />
                            <div className='flex'>
                                <div className="inputBox">
                                    <input className='inputUser' type="text" name="name" value={user.name} onChange={handleChange} required />
                                    <label htmlFor='name' className='labelInput'>Nome Completo:</label>
                                </div>

                                <div className="inputBox">
                                    <input className='inputUser' type="text" name="cpf" value={user.cpf} onChange={handleChange} required />
                                    <label htmlFor='cpf' className='labelInput'>CPF:</label>
                                </div>
                            </div>
                            <br />
                            <div className='flex'>
                                <div className="inputBox">
                                    <input className='inputUser' type="email" name="email" value={user.email} onChange={handleChange} required />
                                    <label htmlFor='email' className='labelInput'>Email:</label>
                                </div>
                            </div>
                            <br /><br />
                            <div className='flex'>
                                <div className="inputBox">
                                    <input className='inputUser' type="text" name='contato' value={user.contato} onChange={handleChange} required />
                                    <label htmlFor='contato' className='labelInput'>Contato</label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='flexSalvar'>
                    <button id='submit' type="submit">Salvar</button>
                </div>
            </div>
        </div>
    );
}

export default UserForm;