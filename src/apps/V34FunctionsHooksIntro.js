// rfc, rafc
// useState, useEffect, useContext, useRef, useReducer, useCallback, useMemo, custom hooks

// myArray=useState('initial value')
// myArray[0]='initial value'
// myArray[1]='updated value'
// [name,setName]=useState('initial value') 
// name 'initial value' setName update to 'updated value'

import React, { useState } from 'react'


export function V34FunctionsHooksIntro() {
    const myArray = useState("mohit");
    let changeState1 = () => myArray[1]('mohit')

    const [nameP,setName] = useState('mohit');
    let changeState2 = () => {setName('mohit')}
    


  return (
    <div>
      <h1 style={{color:'red'}}>{myArray[0]}</h1>
      <button onClick={()=>myArray[1]('mohita')}>update 1</button>
      <button onClick={changeState1}>update 2</button><hr />

      <h1 style={{color:'orange'}}>{nameP}</h1>
      <button onClick={() => {setName('mohini')}}>update 3</button>
      <button onClick={changeState2}>update 4</button>
    </div>
  )
}










//rfc,rfce,rfcp,rafc,rafce,rafcp
//h1,button, ol>li*3, input:button
// html:5, shortcut for html body, clg for console.log

// shift + enter for new line
// shift + alt for vertical selection
// ctrl + /  comment
// shift + alt + f   beautyfy code


//rfc
// import React from 'react'

// export default function V34FunctionsHooksIntro() {
//   return (
//     <div>
      
//     </div>
//   )
// }


// // rfce
// import React from 'react'

// function V34FunctionsHooksIntro() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default V34FunctionsHooksIntro


// // rfcp
// import React from 'react'
// import PropTypes from 'prop-types'

// function V34FunctionsHooksIntro(props) {
//   return (
//     <div>
      
//     </div>
//   )
// }

// V34FunctionsHooksIntro.propTypes = {

// }

// export default V34FunctionsHooksIntro


// // rafc
// import React from 'react'

// const V34FunctionsHooksIntro = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default V34FunctionsHooksIntro




// rafc rafce are same


// // rafcp
// import React from 'react'
// import PropTypes from 'prop-types'

// const V34FunctionsHooksIntro = props => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// V34FunctionsHooksIntro.propTypes = {

// }

// export default V34FunctionsHooksIntro


