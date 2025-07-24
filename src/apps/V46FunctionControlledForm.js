// rfce

import React, { useState } from 'react'

export function V46FunctionControlledForm() {
    const [data, setData] = useState({
        name: 'mohit',
        city: 'kv',
        subjects: 'pcm',
        country: '',
        comments: 'I am interested',
        
    });

    const [checked, setChecked] = useState(false);
    const [hobbiesArray, setHobbiesArray] = useState([])


    // e.target.value..toLowerCase().substring(0,15).replace('&','-')

    // let handleChange = (e) => {
    //     // console.log(e.target.name);
    //     // console.log(e.target.value);
    //     const { name, value } = e.target;

    //     console.log(e)
    //     console.log(e.target.value);

    //     setData((prev) => {
    //         return {
    //             ...prev,
    //             [name]: value
    //         }
    //     })
    // }

    let handleChange = (e) => {
        // console.log(e)
        // console.log(e.target.name);
        // console.log(e.target.value);
        
        const { name, value } = e.target;
        const new_value = (name === 'email') ? value.toLowerCase() : value;

        setData((prev) => {
            return {
                ...prev,
                [name]: new_value
            }
        })
    }

    let handleCheckbox = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;
        if(checked){
            setHobbiesArray([
                ...hobbiesArray, value
            ])

        }else{
            console.log(setHobbiesArray(hobbiesArray.filter((e)=>(e!==value))));
            // setHobbiesArray(hobbiesArray.filter((e)=>(e!==value)));
        }
    }


    let handleFormSubmit = (e) => {
        e.preventDefault();
        // console.log(e)
        console.log([e.target[0].value, e.target[1].value, e.target[2].value, e.target[3].value, e.target[4].value, e.target[5].value]);
        console.log(data, checked, hobbiesArray);

    }

    return (
        <>
            <h1 style={{ color: 'red' }}>V46FunctionControlledForm</h1><hr />
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="name">Enter Name:</label>&nbsp;
                <input type="text" id='name' name='name' value={data.name} onChange={handleChange} /><br />

                <label htmlFor="city">Enter City:</label>&nbsp;
                <input type="text" id='city' name='city' value={data.city} onChange={handleChange} /><br />

                <label htmlFor="subjects">Enter Subject:</label>&nbsp;
                <input type="text" id='subjects' name='subjects' value={data.subjects} onChange={handleChange} /><br />

                <label htmlFor="country">select country:</label>
                <select name="country" id="country" value={data.country} onChange={handleChange}>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="UAE">UAE</option>
                    <option value="INDIA">INDIA</option>
                </select>

                <br /><br />

                <label>Select Hobbies: </label><br />
                <label htmlFor="reading">reading</label>&nbsp;
                <input type="checkbox" id='reading' value='reading' name='Hobbies'  onChange={handleCheckbox}/><br />
                <label htmlFor="cycling">cycling</label>&nbsp;
                <input type="checkbox" id='cycling' value='cycling' name='Hobbies' onChange={handleCheckbox}/><br />
                <label htmlFor="hiking">hiking</label>&nbsp;
                <input type="checkbox" id='hiking' value='hiking' name='Hobbies' onChange={handleCheckbox}/><br />

                <br />
                <label htmlFor="comments" style={{ verticalAlign: 'top' }}>comments:</label>
                <textarea name="comments" id="comments" value={data.comments} cols="30" rows="5" onChange={handleChange}></textarea>

                <br />
                <label htmlFor="terms">yes i agree the terms &nbsp;</label>
                <input type="checkbox" name="terms" id="terms" checked={checked} onChange={(e) => setChecked(e.target.checked)} />



                <input type="submit" value="submit" />
            </form>
        </>
    )
}


// select>option*4
//                 <select name="" id="">
//                     <option value=""></option>
//                     <option value=""></option>
//                     <option value=""></option>
//                     <option value=""></option>
//                 </select>

