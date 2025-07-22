import React, { Component } from 'react'
import './V31CSSStyleSheetComponent.css';  


export function V31CSSStyleSheetComponentPassingProps() {
  /* props.name="farhan";  cannot be done, prop can't change*/
  return (
      <>
          <V31CSSStyleSheetComponent Check={true}/><hr />
          <V31CSSStyleSheetComponent Check={false}/>
          
          
          
      </>
  );
}


// .js not required but .css required
// class is keyword in react, so className used, myfont is css class

export class V31CSSStyleSheetComponent extends Component {
  render() {
    let x = this.props.Check ? 'myfont1' : 'myfont2';
    return (
      <div>
      <h1 style={{color:'gold', 'font-weight': 'bold'}}>when check is {String(this.props.Check)}</h1>
        <h1 className='myfont1 myfont2'>hello, i am mohit</h1>
        <h1 className={x}>hello, i am mohit</h1>
        <h1 className={`${x} myfont3`}>hello, i am mohit</h1>
      </div>
    )
  }
}

// bapticks just above tab present {`${x} myfont3`}

