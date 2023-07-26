import style from './Home.module.css';
import logo from '../img/logo.png';


export function Home() {
    return (
        <div className={style.home}>
            <img className={style.logo} src={logo} alt="Logo" />
            <h1 className={style.title}>Shopping platform</h1>
            <button className={style.button}>Get started</button>
        </div>
    );
}