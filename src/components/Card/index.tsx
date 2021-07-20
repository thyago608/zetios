import { ReactNode } from 'react';
import './styles.scss';

type Props = {
    title: string;
    children: ReactNode;
}

export function Card({title, children}:Props){
    return(
        <div className="card-component">
            <h1>{title}</h1>
            {children}
        </div>
    );
}