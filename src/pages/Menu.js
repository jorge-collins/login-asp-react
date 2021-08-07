import React, { useEffect } from 'react';
import Cookies from 'universal-cookie';
import '../css/Menu.css';

function Menu(props) {

    const cookies = new Cookies();

    const cerrarSesion = () => {
        cookies.remove('email', { path:'/'});
        cookies.remove('token', { path:'/'});
        props.history.push('./');
    }

    useEffect(() => {
        if (!cookies.get('email')) {
            props.history.push('./');
        }
    })

    return (
        <>
            <div className='containerMenu'>
            <h1>Bienvenido { cookies.get('email') }</h1>
            <br />
            <button className='btn btn-danger' onClick={ () =>{cerrarSesion()} }>Cerrar sesión</button>
            <br />
            <h5>Token: { cookies.get('token') }</h5>
            <br />
        </div>
        </>
    )
}

export default Menu;
