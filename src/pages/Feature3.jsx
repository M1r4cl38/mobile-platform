import style from './Feature3.module.css';
import { useParams } from 'react-router-dom';

export function Feature3() {
    const { serviceId }= useParams();

    return (
        <div>
            Feature3: {serviceId}
        </div>
    );
}