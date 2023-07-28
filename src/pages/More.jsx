import style from './More.module.css';
import { GrClose } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { VscCircleFilled } from 'react-icons/vsc';


export function More() {
    const data = [
        {
            icon: <VscCircleFilled />,
            link: <Link to='#'>Shopping carts</Link>,
        },
        {
            icon: <VscCircleFilled />,
            link: <Link to='#'>Product catalog</Link>,
        },
        {
            icon: <VscCircleFilled />,
            link: <Link to='#'>Shops</Link>,
        },
        {
            icon: <VscCircleFilled />,
            link: <Link to='#'>New shopping cart</Link>,
        },
        {
            icon: <VscCircleFilled />,
            link: <Link to='#'>New product</Link>,
        },
        {
            icon: <VscCircleFilled />,
            link: <Link to='#'>New shop</Link>,
        },
        {
            icon: <VscCircleFilled />,
            link: <Link to='#'>Acount</Link>,
        },
        {
            icon: <VscCircleFilled />,
            link: <Link to='#'>Settings</Link>,
        },
        {
            icon: <VscCircleFilled />,
            link: <Link to='/'>Sign out</Link>,
        },
    ]
    return (
        <div className={style.try}>
            <div className={style.header}>
                <Link className={style.close} to ='/main'><GrClose /></Link> 
            </div>
            <div className={style.list}>
                 {data.map(task => <p className={style.text}>{task.icon} {task.link}</p>)}
            </div>
        </div>
    );
}