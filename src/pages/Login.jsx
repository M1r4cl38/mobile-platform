import style from './Login.module.css';


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
          <button className={style.button} type="submit">Login</button>
        </div>
        <p className={style.text}>or</p>
        <div className={style.row}>
          <button className={style.button} type="submit">Register</button>
        </div>
      </form>
    </div>
    );
}