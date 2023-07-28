import style from './More.module.css';
import { GrClose } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { VscCircleFilled } from 'react-icons/vsc';


export function More() {
    const data = [
        {
            icon: <VscCircleFilled />,
            title: 'Shopping carts',
        },
        {
            icon: <VscCircleFilled />,
            title: 'Product catalog',
        },
        {
            icon: <VscCircleFilled />,
            title: 'Shops',
        },
        {
            icon: <VscCircleFilled />,
            title: 'New shopping chart',
        },
        {
            icon: <VscCircleFilled />,
            title: 'New product',
        },
        {
            icon: <VscCircleFilled />,
            title: 'New shop',
        },
        {
            icon: <VscCircleFilled />,
            title: 'Acount',
        },
        {
            icon: <VscCircleFilled />,
            title: 'Settings',
        },
        {
            icon: <VscCircleFilled />,
            title: 'Sign out',
        },
    ]
    return (
        <div>
            <div className={style.header}>
                <Link className={style.close} to ='/main'><GrClose /></Link> 
            </div>
            <div className={style.list}>
                 {data.map(task => <p className={style.text}>{task.icon} {task.title}</p>)}
            </div>
        </div>
    );
}