import style from './Main.module.css';
import logo from '../img/logo.png';


export function Main() {
    return (
        <div className={style.main}>
            <div className={style.header}>
                <img className={style.logo} src={logo} alt="Logo" />
                <div>hamburger</div>
            </div>
            <div className={style.content}>
                PAGE CONTENT
            </div>
        </div>
    );
}