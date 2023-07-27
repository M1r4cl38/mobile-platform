import style from './Features.module.css';
import feature1 from '../img/feature1.png';
import { Link } from 'react-router-dom';


export function Feature1() {
    return (
        <div className={style.features}>
            <img className={style.fe} src={feature1} alt="feature 1" />
            <h1 className={style.title}>Feature 1</h1>
            <p className={style.text}>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            <div className={style.dots}>
                <Link to='/feature1'className={style.try}></Link>
                <Link to='/feature2'className={style.try}></Link>
                <Link to='/feature3'className={style.try}></Link>
            </div>
            <Link to='/feature2'className={style.button}>Continue</Link>
        </div>
    );
}