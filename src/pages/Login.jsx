import style from './Login.module.css';
import { Link } from 'react-router-dom';


export function Login() {
    return (
    <div className={style.login}>
      <h1 className={style.title}>Log in to your account</h1>
      <form className={style.form}>
        <div className={style.row}>
        <input className={style.input} type="email" placeholder="Email"/>
        </div>
        <div className={style.row}>
        <input className={style.input} type="password" placeholder="Password"/>
        </div>
        <div className={style.row}>
          <Link to ='/main' className={style.button}>Login</Link>
        </div>
        <p className={style.text}>or</p>
        <div className={style.row}>
          <Link to ='/register' className={style.button}>Register</Link>
        </div>
      </form>
    </div>
    );
}