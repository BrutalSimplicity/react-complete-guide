import React, { ReactChildren } from 'react';
import './Person.css';
import _ from 'lodash';

export type PersonProps = {
    id: string,
    name: string;
    age: number;
    click?: (n: string) => void;
    changed?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    children?: ReactChildren;
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