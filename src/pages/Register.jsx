import style from './Register.module.css';


export function Register() {
    return (
    <div className={style.register}>
      <h1 className={style.title}>Create your account</h1>
      <form className={style.form}>
        <div className={style.row}>
          <input className={style.input} type="text" placeholder="Name"/>
        </div>
        <div className={style.row}>
        <input className={style.input} type="text" placeholder="Email"/>
        </div>
        <div className={style.row}>
        <input className={style.input} type="text" placeholder="Password"/>
        </div>
        <div className={style.check}>
          <input type="checkbox" />
          <p>Agree to our TOS</p>
          <a className={style.link} href='#'>(read)</a>
        </div>
        <div className={style.row}>
          <button className={style.button} type="submit">Register</button>
        </div>
        <p className={style.text}>or</p>
        <div className={style.row}>
          <button className={style.button} type="submit">Login</button>
        </div>
      </form>
    </div>
    );
}