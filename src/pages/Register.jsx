import style from './Register.module.css';
import { Link } from 'react-router-dom';


export function Register() {
    return (
    <div className={style.register}>
      <h1 className={style.title}>Create your account</h1>
      <form className={style.form}>
        <div className={style.row}>
          <input className={style.input} type="text" placeholder="Name"/>
        </div>
        <div className={style.row}>
        <input className={style.input} type="email" placeholder="Email"/>
        </div>
        <div className={style.row}>
        <input className={style.input} type="password" placeholder="Password"/>
        </div>
        <div className={style.check}>
          <input type="checkbox" />
          <p className={style.text}>Agree to our TOS</p>
          <Link to ='/terms' className={style.linkterms}>(read)</Link>
        </div>
        <div className={style.row}>
          <Link to ='/login' className={style.button}>Register</Link>
        </div>
        <p className={style.text}>or</p>
        <div className={style.row}>
          <Link to ='/login' className={style.button}>Login</Link>
        </div>
      </form>
    </div>
    );
}