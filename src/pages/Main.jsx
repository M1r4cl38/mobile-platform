import style from './Main.module.css';
import logo from '../img/logo.png';
import {GiHamburgerMenu} from 'react-icons/gi';
import { Link } from 'react-router-dom';

export function Main() {
    return (
        <div className={style.main}>
            <div className={style.header}>
                <img className={style.logo} src={logo} alt="Logo" />
                <Link className={style.burger} to ='/more'><GiHamburgerMenu /></Link> 
            </div>
            <div className={style.content}>
                PAGE CONTENT
            </div>
        </div>
    );
}