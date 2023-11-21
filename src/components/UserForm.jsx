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
        <div className='box'>
            <form onSubmit={handleSubmit}>
                    <legend>Informações do usuário</legend>
                    <br />
                    <div className="inputBox">
                        <input className='inputUser' type="text" name="name" value={user.name} onChange={handleChange} required />
                        <label htmlFor='name' className='labelInput'>Nome Completo:</label>
                    </div>
                    
                    <div className="inputBox">
                        <input className='inputUser' type="text" name="cpf" value={user.cpf} onChange={handleChange} required/>
                        <label  htmlFor='cpf' className='labelInput'>CPF:</label>
                    </div>
                    <div className="inputBox">
                        <input className='inputUser' type="email" name="email" value={user.email} onChange={handleChange} required/>
                        <label  htmlFor='email' className='labelInput'>Email:</label>
                    </div>
                    <br />
                        <label htmlFor='birthdate'><b>Data de Nascimento:</b></label>
                        <input type="date" name="birthdate" id='birthdate' value={user.birthdate} onChange={handleChange} required />
                    <br /><br />
                    <div className="inputBox">
                        <input className='inputUser' type="text" name='cidade' value={user.cidade} onChange={handleChange} required/>
                        <label htmlFor='cidade' className='labelInput'>Cidade</label>
                    </div>
                    <div className="inputBox">
                        <input className='inputUser' type="text" name='estado' value={user.estado} onChange={handleChange} required/>
                        <label htmlFor='estado' className='labelInput'>Estado</label>
                    </div>
                    
                    <button id='submit' type="submit">Salvar</button>
        </form>
        </div>
    );
}

export default UserForm;