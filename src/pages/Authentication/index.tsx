import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import './styles.scss';

export function Authentication(){
    return(
        <div id="page" className="page-authentication">
        <Header/>
        <main className="main-authentication">
            <Card title="Insira o código de autenticação de dois fatores">
                <form className="form-login">
                    <input type="text"/>
                    <Button title="validar"/>
                </form>
            </Card>
        </main>
        <footer className="footer-authentication">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, reprehenderit est ut hic neque incidunt exercitationem quos nam accusantium sunt.</p>
        </footer>
    </div>
    );
}