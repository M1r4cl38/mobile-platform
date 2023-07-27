import style from './Feature1.module.css';
import feature1 from '../img/feature1.png';
import { Link } from 'react-router-dom';


export function Feature1() {
    return (
        <div className={style.feature1}>
            <img className={style.f1} src={feature1} alt="feature 1" />
            <h1 className={style.title}>Feature 1</h1>
            <p className={style.text}>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            <p>dot dot dot</p>
            <Link to='/feature2'className={style.button}>Continue</Link>
        </div>
    );
}