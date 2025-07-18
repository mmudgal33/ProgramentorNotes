import React, { Component } from 'react'
//import './V32CSSModulesStylesheet2.css'; 
import style from './V32CSSModulesStylesheet2.module.css';

export default class V32CSSModulesStylesheet2 extends Component {
  render() {
    return (
      <div>
        <h1 className={style.heading1}>my name is mohit</h1>
      </div>
    )
  }
}

// .js not required, .css required
// as V32CSSModulesStylesheet1.css and V32CSSModulesStylesheet1 
// are in same folder so './V32CSSModulesStylesheet1.css'

// two css files has same class name heading1, during application 
// built each css merge into one and overwrite previous same css class names 
// V32CSSModulesStylesheet1.css rename to V32CSSModulesStylesheet1.module.css
// if want to use same external class names. 
// or make different class names in every css file in app.