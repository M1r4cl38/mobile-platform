import style from './Features.module.css';
import { Link } from "react-router-dom";
import { Feature2 } from './Feature2';


export function Features() {
const features = [
{
    id: 'feature2',
    title: 'feature2cia',
    text: 'random2...gfgfdgh...gfdgs'
},

{
    id: 'feature3',
    title: 'feature3',
    text: 'random3..fsgvkdjgnhusniusdfhguisdhgusdfghdgs'
}

]

const linkStyle = {
    color: 'red',
    fontSize: '2rem',
    margin: '0 1rem',
};

    return (
        <div className="main-content">
            <h1>Features</h1>
            {features.map(Feature2 => (
                <Link style={linkStyle} to={`/features/${Feature2.id}`}>
                    {Feature2.title}
                </Link>)
            )}
        </div>
    );
}