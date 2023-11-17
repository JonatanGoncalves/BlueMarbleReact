
import React, { useState } from 'react';

function UserForm() {
    const [user, setUser] = useState({
        name: '',
        cpf: '',
        birthdate: '',
        email: '',
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
        <form onSubmit={handleSubmit}>
            <label>
                Nome:
                <input type="text" name="name" value={user.name} onChange={handleChange} />
            </label>
            <label>
                CPF:
                <input type="text" name="cpf" value={user.cpf} onChange={handleChange} />
            </label>
            <label>
                Data de Nascimento:
                <input type="date" name="birthdate" value={user.birthdate} onChange={handleChange} />
            </label>
            <label>
                Email:
                <input type="email" name="email" value={user.email} onChange={handleChange} />
            </label>
            <button type="submit">Salvar</button>
        </form>
    );
}

function UserScreen() {
    return (
        <div>
            <h1>Editar informações do usuário</h1>
            <UserForm />
        </div>
    );
}

export default UserScreen;
