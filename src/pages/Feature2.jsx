import style from './Feature2.module.css';
import { useParams } from 'react-router-dom';


export function Feature2() {
    const { serviceId }= useParams();

    return (
        <div>
            Feature2: {serviceId}
        </div>
    );
}