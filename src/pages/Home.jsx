import style from './Home.module.css';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';


export function Home() {
    return (
        <div className={style.home}>
            <img className={style.logo} src={logo} alt="Logo" />
            <h1 className={style.title}>Shopping platform</h1>
            <Link to='/feature1'className={style.button}>Get started</Link>
        </div>
    );
}