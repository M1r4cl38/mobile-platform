import style from './Nopage.module.css';


export function Nopage() {
    return (
        <div className={style.nopage}>
            <h1 className={style.title}>404</h1>
            <p>Page not found</p>
            <a className={style.link} href="/">Go home</a>
        </div>
    );
}