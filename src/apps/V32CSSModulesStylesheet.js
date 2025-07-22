import React, { Component } from 'react'
//import './V32CSSModulesStylesheet1.css'; 
import style from './V32CSSModulesStylesheet.module.css';

export class V32CSSModulesStylesheet extends Component {
    render() {
        return (
            <div>
                <h1 className={style.heading1}>my name is mohit</h1><hr />
                <h1 className={style.heading2}>my name is mohita</h1>
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

// module used by react internally as 
//<h1 class="V32CSSModulesStylesheet1_heading1__IxDS+">my name is mohini</h1>
// fileName_className__hashCode for css module

// in inline css we cannot use pseudo classes :hover, :active, :visited



