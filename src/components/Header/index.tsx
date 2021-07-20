import { Link } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";
import logo from '../../assets/images/logo.png';
import './styles.scss';

export function Header(){
    return(
        <header className="component-header">
            <Link to="/">
                <FiArrowLeft/>
            </Link>
            <img src={logo} alt="logo"/>
        </header>
    );
}