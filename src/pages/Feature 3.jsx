import style from './Features.module.css';
import feature3 from '../img/feature3.png';
import { Link } from 'react-router-dom';


export function Feature3() {
    return (
        <div className={style.features}>
            <img className={style.fe} src={feature3} alt="feature 3" />
            <h1 className={style.title}>Feature 3</h1>
            <p className={style.text}>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            <div className={style.dots}>
                <Link to='/feature1'className={style.try}></Link>
                <Link to='/feature2'className={style.try}></Link>
                <Link to='/feature3'className={style.try}></Link>
            </div>
            <Link to='/register'className={style.button}>Register</Link>
        </div>
    );
}