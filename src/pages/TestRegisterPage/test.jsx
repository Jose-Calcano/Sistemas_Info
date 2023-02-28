import React from 'react'
import './test.css'

const test = ()=> {

    const handleSubmit= (e)=>{
        e.preventDefault()
        const displayName = e.target[0].Value;
        const email = e.target[1].value;
        const password = e.target[2].Value;
        const file = e.target[3].value;

    }
    return (
    <div className='formContainer'>
            <div className="formWrapper">
                <span className='logo'> Metromed </span>
                <span className='title'>Registro paciente nuevo </span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='nombre completo'/>
                    <input type="email" placeholder='email'/>
                    <input type="password" placeholder='contrasena'/>
                    <input type="file" id='file'/>
                    <label htmlFor='file'></label>
                    <button>Registrar </button>
                </form>
                <p>Ya tiene una cuenta como paciente ? Inicie sesion</p>

                <br></br>

                <span className='title'>Registro como nuevo medico </span>
                <form>
                    <input type="text" placeholder='nombre completo'/>
                    <input type="email" placeholder='email'/>
                    <input type="password" placeholder='contrasena'/>
                    <input type="file" id='file'/>
                    <label htmlFor='file'></label>
                    <button>Sign In</button>
                </form>
                <p>Ya tiene una cuenta como medico? Inicie sesion</p>
            </div>
    </div>

    );
}

export default test