import React, { useState } from 'react'


export function V36UseStateHookWithObject() {

    const obj1 = {
        name: 'mohit',
        age: 32,
        height: 5.8,
        isYoung: false
    }

    const obj2 = {
        name: 'mohita',
        age: 23,
        height: 5.3,
        isYoung: true
    }

    let num = [11, 22, 33, 44];


    const [check, setCheck] = useState(true);
    const [person, setPerson] = useState(obj1);
    const [numbers, setNumbers] = useState(num);

    let changeState = () => {
        let obj = check === true ? obj2 : obj1;
        setPerson(obj);
        setCheck(check === true ? false : true);
    }

    // v v important
    let changeState2 = () => {
        setPerson(previousState => {
            return {
                ...previousState,
                name: 'mohini',
                age: 13
            }
        })
    }

    let changeList = () => {
        setNumbers(
            [55,66,77,88]
        )
    }

    let changeList2 = () => {
        setNumbers(previousState => {
            return [
                ...previousState,
                Math.floor(Math.random()*50)
            ]
        })
    }



    return (
        <div>
            <h1>{person.name}</h1>
            <h1>{person.age}</h1>
            <h1>{person.height}</h1>
            <h1>{person.isYoung}</h1>
            <h1>{person.isYoung.toString()}</h1>

            {/* <h1 style={{ color: 'orange' }}>{person}</h1> */}

            <button onClick={changeState}>update object</button>
            <button onClick={changeState2}>update object name</button>

            <ul>
                {numbers.map((n, i) => <li key={i}>{n}</li>)}
            </ul>
            <button onClick={changeList}>update object array</button>
            <button onClick={changeList2}>update object array previousState</button>
        </div>
    )
}

