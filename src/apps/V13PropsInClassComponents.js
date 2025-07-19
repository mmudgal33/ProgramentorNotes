import React, { Component } from 'react'


const names=['Amit','Zain','Kumar','Ali']
const age=[23,24,35,26]


export class V13PropsInClassComponents3 extends Component {
  render() {
    return (
      <>
        <V13PropsInClassComponents name='mohit' age={34} />
        <V13PropsInClassComponents name={names[0]} age={age[0]} />

        <V13PropsInClassComponents>name={names[2]} age={age[2]}
          <h2>child no :1</h2>
        </V13PropsInClassComponents>
        <V13PropsInClassComponents>name={names[3]} age={age[3]}
          <button type='button'>submit</button>
        </V13PropsInClassComponents>
        <V13PropsInClassComponents>name={names[0]} age={age[0]}
          <ol>
            <li>rohit</li>
            <li>mohit</li>
            <li>radha</li>
          </ol>
        </V13PropsInClassComponents>
      </>
    )
  }
}



export default class V13PropsInClassComponents extends Component {
  
  render() {
    //this.props.name='adil';  can't be done
    return (
      <>
        <h1 style={{color: "brown"}}> First Props Nesting : Hello {this.props.name}, aged {this.props.age}</h1>
        {this.props.children}
        <V13PropsInClassComponents2 Institute="learning never ends" Students={23}/>
      </>
    )
  }
}



export class V13PropsInClassComponents2 extends Component {
  render() {
    return (
      <>
      
        <h1 style={{color: "violet"}}> Second Props Nesting : Institute {this.props.Institute}, students {this.props.Students}</h1>
      </>
    )
  }
}


//export default V13PropsInClassComponents;





