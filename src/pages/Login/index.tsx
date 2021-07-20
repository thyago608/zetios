import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import './styles.scss';

export function Login(){
    return(
        <div id="page" className="page-login">
            <Header/>
            <main className="main-login">
                <Card title="Insira suas crendencias">
                    <form className="form-login">
                        <input type="email" placeholder="email"/>
                        <input type="password" placeholder="senha"/>
                        <Button title="continuar"/>
                    </form>
                </Card>
            </main>
            <footer className="footer-login">
                <p>Não possui crendeciais ?</p>
                <p>Esqueceu a senha ?</p>
            </footer>
        </div>
    );
}