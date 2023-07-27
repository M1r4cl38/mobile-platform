import style from './Feature2.module.css';
import feature2 from '../img/feature2.png';
import { Link } from 'react-router-dom';


export function Feature2() {
    return (
        <div className={style.feature2}>
            <img className={style.f2} src={feature2} alt="feature 2" />
            <h1 className={style.title}>Feature 2</h1>
            <p className={style.text}>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            <p>dot dot dot</p>
            <Link to='/feature3'className={style.button}>Continue</Link>
        </div>
    );
}