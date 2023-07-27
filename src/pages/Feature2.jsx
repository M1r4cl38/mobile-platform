import style from './Feature2.module.css';
import feature2 from '../img/feature2.png';


export function Feature2() {
    return (
        <div className={style.feature2}>
            <img className={style.f2} src={feature2} alt="feature 2" />
            <h1 className={style.title}>Feature 2</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            <p>dot dot dot</p>
            <button className={style.button}>Continue</button>
        </div>
    );
}