import React from 'react';
import { FiLogIn } from 'react-icons/fi'

import './styles.css';

import logoimg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';
function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoimg} alt="Be The Hero" />

                <form>
                    <h1>Faça o seu Logon</h1>

                    <input placeholder="Sua ID" />
                    <button className="button" type="submit">Entrar</button>

                    <a href="/register">
                        <FiLogIn size={16} color="e02041"/>
                        Não tenho uma conta
                    </a>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}

export default Logon;
