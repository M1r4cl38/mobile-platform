import style from './Feature3.module.css';
import feature3 from '../img/feature3.png';
import { Link } from 'react-router-dom';


export function Feature3() {
    return (
        <div className={style.feature3}>
            <img className={style.f3} src={feature3} alt="feature 3" />
            <h1 className={style.title}>Feature 3</h1>
            <p className={style.text}>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            <p>dot dot dot</p>
            <Link to='/register'className={style.button}>Register</Link>
        </div>
    );
}