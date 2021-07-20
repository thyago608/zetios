import {Button} from '../../components/Button';
import logo from '../../assets/images/logo.png';
import { useHistory } from 'react-router-dom';

import './styles.scss';

export function Home(){

    const history = useHistory();

    function handleNavigateAuthentication(){
        history.push('/authentication');
    }

    function handleNavigateLogin(){
        history.push('/login');
    }

    return(
        <div id="page" className="page-home">
            <header className="header-home">
                <img src={logo} alt="logo" />
            </header>
            <main className="main-home">
                <h1>Bem vindo!</h1>
                <p>Faça seu login<br/> ou cadastra-se</p>
                <div className="container-buttons">
                    <Button title="Cadastrar" onClick={handleNavigateAuthentication}/>
                    <Button title="Log in"onClick={handleNavigateLogin}/>
                </div>
            </main>
        </div>
    );
}