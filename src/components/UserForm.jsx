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
            <div className='box'>
                <div>
                    <div className='flexImage'>
                        <Image src={require("../assets/images/17004.png")} width={120} />
                        <div className='User'>
                            <h1>Teste Gonçalves Teste</h1>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div className='flex'>
                    <div className='edit'>
                        <h5>
                            <Image src={require("../assets/images/editUser.png")} width={50} />
                            <a href="/editUser">Editar Usuario</a>
                        </h5>
                        <h5>
                            <Image src={require("../assets/images/editPicture.png")} width={50} />
                            <a href="/editImage">Editar Foto</a>
                        </h5>
                        <h5>
                            <Image className='centralizar' src={require("../assets/images/changePassword.png")} width={50} />
                            <a href="/changeSenha">Trocar Senha</a>
                        </h5>
                        <h5>
                            <Image className='centralizar' src={require("../assets/images/Email.png")} width={50} />
                            <a href="/registerEmail">Email Registrado</a>

                        </h5>
                        <h5>
                            <Image className='centralizar' src={require("../assets/images/help.png")} width={50} />
                            <a href="/help">Ajuda</a>
                        </h5>

                    </div>
                    <div id="linha-vertical"></div>
                    <form onSubmit={handleSubmit}>
                        <div>
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
                        <div className='flexSalvar'>
                            <button id='submit' type="submit">Salvar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
}

export default UserForm;