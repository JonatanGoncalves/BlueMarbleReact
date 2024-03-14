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
                <Image src={require("../assets/images/Logo.png")} width={100} />
                <h1 className="h1"><i>BLUE </i>MARBLE</h1>
                <h3>ONGs</h3>
                <h3>Contato</h3>
                <h3>Sobre</h3>
                <textarea placeholder='Pesquisar conteúdo' name="search" cols="50" rows="1"></textarea>
            </div>
            <hr />
            <div className='box'>
                <div className='flex'>
                    <Image src={require("../assets/images/17004.png")} width={100}></Image>
                    <h1>Olá xxxx xxxx</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <br />
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
                    <div className="inputBox">
                        <input className='inputUser' type="email" name="email" value={user.email} onChange={handleChange} required />
                        <label htmlFor='email' className='labelInput'>Email:</label>
                    </div>
                    <br /><br />
                    <div className="inputBox">
                        <input className='inputUser' type="text" name='cidade' value={user.cidade} onChange={handleChange} required />
                        <label htmlFor='cidade' className='labelInput'>Cidade</label>
                    </div>
                    <div className="inputBox">
                        <input className='inputUser' type="text" name='estado' value={user.estado} onChange={handleChange} required />
                        <label htmlFor='estado' className='labelInput'>Estado</label>
                    </div>

                    <button id='submit' type="submit">Salvar</button>
                </form>
            </div>
        </div>
    );
}

export default UserForm;