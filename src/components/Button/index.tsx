import React,{ButtonHTMLAttributes} from 'react';
import './styles.scss';


type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    title: string;
}

export function Button({title, ...rest}:Props){
    return(
        <button {...rest} className="button-component">{title}</button>
    );
}