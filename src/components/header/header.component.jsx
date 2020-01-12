import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({ currentUser }) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>

            <div className="options">
                <Link className="option" to="/shop">LOJA</Link>
                <Link className="option" to="/shop">CONTATO</Link>
                {
                    currentUser ?
                        <div className="option" onClick={() => auth.signOut()}>SAIR</div>
                        :
                        <Link className="option" to="/signin">ENTRAR</Link>
                }
            </div>
        </div>
    );
};

const mapStateProps = state => ({
    currentUser: state.user.currentUser,
});

export default connect(mapStateProps)(Header);