import style from './Nopage.module.css';
import { Link } from 'react-router-dom';


export function Nopage() {
    return (
        <div className={style.nopage}>
            <h1 className={style.title}>404</h1>
            <p>Page not found</p>
            <Link to ='/' className={style.link}>Go home</Link>
        </div>
    );
}