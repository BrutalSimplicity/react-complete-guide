import React from 'react';
import './Person.css';
import _ from 'lodash';

export interface PersonProps {
    id: string,
    name: string;
    age: number;
    click?: (n: string | PersonProps) => void;
    changed?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    children?: any;
}

const person = (props: PersonProps) => {
    let clickHandler = props.click as any;
    let changedHandler = props.changed as any;

    return (
        <div className="Person">
            <p onClick={clickHandler}>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={changedHandler} value={props.name} />
        </div>
        )
}

export default person;