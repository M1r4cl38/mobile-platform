import style from './Feature3.module.css';
import feature3 from '../img/feature3.png';


export function Feature3() {
    return (
        <div className={style.feature3}>
            <img className={style.f3} src={feature3} alt="feature 3" />
            <h1 className={style.title}>Feature 3</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            <p>dot dot dot</p>
            <button className={style.button}>Continue</button>
        </div>
    );
}