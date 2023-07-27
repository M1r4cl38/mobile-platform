import style from './Terms.module.css';
import { Link } from 'react-router-dom';


export function Terms() {
    return (
    <div className={style.terms}>
        <h1 className={style.title}>Terms of Service</h1>
        <div>
            <h2>First topic</h2>
            <p className={style.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut repellendus, nesciunt hic eligendi laudantium deserunt dicta nihil perspiciatis consequatur, blanditiis, facilis nam nostrum magni ratione.</p>
        </div>
        <div>
            <h2>Second topic</h2>
            <p className={style.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui saepe quibusdam dicta corporis, aliquam minima?</p>
        </div>
        <div className={style.row}>
            <Link to ='/register' className={style.button}>Back</Link>
        </div>
    </div>
    );
}