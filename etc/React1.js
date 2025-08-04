/*video 1/93 learning never ends React
React native is for mobile application
React is library of javascript
react is structured library that's why considered framework but it's Notification.apply
react is for building user interface and single page application
react allows create reusable UI components like headers footers etc
components based architecture, react is free open source, github has all its source code
anyone can push pop on it.
its declarative, efficient,flexible js library for building UI. it lets you compose complex UIs
from small and isolated pieces of codes called component
sometimes called frontend js framework but its not, its created by faceook
tool for building UI components.
create for components header,footer,sidebar,main content. then cobine them as complete UI
components like header etc can be reuse.
react community also provides advanced concept like state management (data saved between page change)
, routing (page change) ,etc. on top of react library 
creates virtual DOM (Document Object Model) (tree heirarchy structure of html elements) in memory.
virtual DOM is different from Browser DOM
instead of manipulating the browser DOM directly. virtual DOM created for manipulation, then transfer to 
Browser DOM.
History React, 2011 facebook newsfeed, july 2013 first version, current version V18.1.0 april 22
basic directory structure is given by create-react-app is v5.0.1 april'22
create react app includes built tools such as webpack, Babel(did html to jquery internally), ESLint.
JORDAN WALKE created React from facebook.
website facebook, instagram, netflix, code academy,reddit use react.
react has large community on github, it has component based architecture, Dom updates are handled very
easily and effectively.
Declarative approach, is abstraction, necessary things we know but else part hidden, create component and use
render like method to show it on UI (oops inheritance polymorphism encapsulation abstraction)
tell browser what to do, instead of what you need, React declarative approach abstract that for us.
with declarative code, we tell js what we want to be done, and let js take care of performing the steps.
pre requisites-html, css, js, dom
*/

/*video 2 what is babel in react.js
history ES5,ES6 of js req for realising babel need
js invented in 1995 by brendan eich of netscape, Mocha,Livescript were name of js, 
ECMA International (European Computer Manufactures Association)
standardise js in 1997, for update etc renames to ECMAScript (ES) official name. version ES1 given in 1997 
HTML is standardise by world wide web W3C consortium.  
ES1 97 Edition 1,ES2 98 Editorial change ,ES3 99 (re, try/catch Exception handling,switch,do-while),

ES4 never released, ES5 2009 strict mode,JSON support, string trim(), array isArray(), array iteration methods,
allow trailing comma for object literals. other major changes.64 big changes.
ES6 2015 let and const, default parameter values, array.findIndex(). but less changes in comparison of ES5
React.js working on ES6.

After ES6 anual edition came 16 (**,array.include), 17 (str padding,Object.enteries,Object.values,
async functions,shared memory etc),18 (rest/spread properties, asynchronous iterations, promise.finally(), additions to RegExp)
ECMAScript is subset of javascript.
Babel is a compiler used to convert JSX or React.js code to pure Javascript code.
ES5+  js code not run on previous version environment, babel compiler convert it to backword compatible version
of js in current version or older browser environments.
when create-react-app used babel automatically included in react app. babel can convert JSX syntes.
*/

/*Video 3 Download VS Code & Extensions
vs code for react with extension that does lot of things to help ,or plugins
click extensions then search babel javascript which assign color for keywords of react
javascript es6 code snippets, already created code snippets come shortform came search and see them.
vscode icons to create icons for file type.
bracket highlighter for as it named
auto rename tag, if hi change to h2 then its closing change to h2 automatically
*/

/*video 4 install Node JS & having which NPM using which react app installed, search node js on google and
install LTS (long time support) version.
terminal--new terminal, node -v for checking version v18.16.0, npm -v for npm version 9.5.1
create new folder and inside that run, npm install -g create-react-app

npm config set fund false
npm i tar
we must open new folder from vs code for app creation
file-->open folder ReactJSapp, create-react-app new-app(app name)
cd new-app --> npm start

directory structure of react created, babel js compiler installed too.-g means create app in any folder and used by anyone on pc
create-react-app --version 5.0.1
create react app by using, create-react-app new-app
package.json has information of all files. dependencies of react files
npm start, for run app on 3000 port on local server. right click on new-app open in integerated server,
use, npm start
src to index.js, render means display, every change on app live on live server
shift+alt+a for multiline comment
*/

/*video 5 understanding work flow of react app
index.js (in src) is enty point of react app, it calls component ex-app.js (in src) and rendor/display
it on index.html (in public) using root id.

root.render(<div id="root"></div> display at root in index.html) and 
<App/>(stand alone tag means call App.js) in index.js so display app.js component at root
 const root = ReactDOM.createRoot(document.getElementById('root'));
 above statement points to root in virtual dom at (<div id="root"></div>)

 create our own component user.js and call it in index.js to display on index.js
 
 in file user.js, function user(){return(<></>);}, export default user;, <></> as only one parent allowed 
 inside return of component function, 
in file index.js write <User/> and path with name (import FirstApp from './apps/FirstApp';)

react renders html to webpage by using function called ReactDOM.render()
purpose of above function is to display the specified html code inside specified html element.

our component could be a card and called in index.js when required.
warning has no issue,
*/
/*video 6 what is JSX, why we use it in react, JSX expressions
function Show(){document.write("<h1>Hey Wassap</h1>");}
inside js, jquery written which is complex, time taking. it returns text on dom.
buT in JSX we return html directly without quotes.
js expressions, js variables, js object, can be used inside JSX.
JSX is js XML,js extension. allows html in react, makes easier to write and add HTML in react.

App component follows es6 of js, 
open setting, search emmet, language include javascript javascriptreact, short form div.new autocomplete 
everything change internally to js, whether it is jquery or JSX
search google for babel9(js compiler used by react) javascript online  

see JSXconcept file for jsx importance
jsx allows to write html inside js and place them in dom without any createElement() and appendChild() methods
jsx converts html tags in react elements 
not compulsory to use jsx but then react elements must be used which is time consuming and complicated.
jsx is extension of js es6 and translate internally to regular js runtime.

jsx fragments <></>
with jsx we can write js expressions inside curly braces {}
expressions could be react variable , or property, or object or any other valid js expression. jsx will
execute the expression and return the result.

html code must be wrapped in one top level element.
if two child element required, put that in parent element like <div> Or fragments <></>
jsx throw error if html not correct, or html misses parent element.
wrap multiple lines with fragment it prevents unnecessary adding extra nodes to dom.
fragments looks like empty html tag <></> , stand alone tags which are not in pair must be always close.
jsx follow xml rules, so html tags must be properly closed, close empty tags with /> , jsx will throw an 
error if html is not properly closed.
attribute class (or class selector) became classname, as react have class keyword reserved. className camel casing used small then capital
class attribute much used attribute in html, but since jsx is rendered as js and class keyword is reserved in
js, you are not allowed to use it in jsx. use className instead, when jsx is rendered, it translated className
attribute into class attributes. instead of 'for' keyword of html, use htmlFor. it bind with textbox

conditions if statements
react supports if statements but not inside jsx
put conditional statement outside jsx and use its output insise jsx. or you could use a ternary expression instead.
*/

/*video 7 react components, functional components
header footer sidebar content are components which can be created and reusable, as functions are reusable
components are independent as they are made in separate files, reusable piece of code, same purpose as js
functions, but work in isolation and return html code.
components are of two types 1. class components 2.function components.

Functional components, functions that return html, in older react class components were used, now react
suggests to use functional components more.

shift+alt+f to beatyfy code
import React from 'react'; imported in components to compile code properly as jsx

npm start
all components name must start with capital letters, if they are not used, import not bright seen.

as FunctionalComponent1 already present inside apps, so we doesn't need to write './apps/HeaderV7' but './HeaderV7'
return () parenthesis after return must be on same line, must have no enter 

return <h1>this is component header</h1>   can be used, as single statement.
create components separately and import them on app.js, so that index.js remain light weight.
*/
/* webpack is same babel compiler output */

/*video 8 props in react js, react props, passing data to components.
function ShowMessage(msg){document.write(msg);}  msg is parameter,  
ShowMessage("hey adil"); arguments is "hey adil"
in react functional component is function, and Props "properties" are arguments
if i want to get dynamic values then props are used, through props we got data and used inside functional
components. props(arguments) are inside <coponent/> declaration,   

right click then inspect to see console on browser.
props are basically objects and arguments inside that stored in object as property.

props means properties, props are arguments passed into react components, props passed to components 
via html attributes, react props are like function arguments in js and attributes in html.
to send props in component, use same syntex as html attributes.
<PropsV8 name="adil" age="29"/>
<h1>helio {props.name}</h1>
if variable need to be sent, not string, give variable name inside {},
react props are read only (immutable) get an error if try to change it in recieving end. 
props can be used as children props.

props are used to pass data from one component to another, as parameters.

npm start, node terminal ctrl+c to terminate npm start
shift+alt+f to beatyfy code
ctrl + / for comment uncomment both in vs code
inside react {/* use for comment
*/

/*video 9 proptypes
prop is used when dynamic data required not static, prop is data object basically.
install proptypes using, npm install prop-types, we must write on node terminal ctrl+c to terminate npm start
<ProptypesV9 name="Adil" age={23}/> ProptypesV9 is coponent function call and name="Adil" age={23} are attributes
age is num datatype and to ensure that proptypes used.
impt then enter for import PropTypes from 'prop-types'
settings, extension,ES7 React/Redux/GraphQL/React-Native snippets, install
isRequired prop element defined is required to be passed from parent component, if not pass warning comes on consile.

*/

/*video 10 arrow function
arrow function allows us to write shorter function syntex*/

/*
npm start, node terminal ctrl+c to terminate npm start
shift+alt+f to beatyfy code
ctrl + / for comment uncomment both in vs code
inside react {/* use for comment
*/

/*if component name function/class starts with small letter, it's considered dom tag.
short cut to create class/function coponent fast using ES7/React/Redux/GraphQL/R
rcc
import React, { Component } from 'react'

export default class React extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
rccp
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class React extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

//rfc,rfce,rfcp,rafc,rafce,rafcp
rfc
import React from 'react'

export default function React() {
  return (
    <div>
      
    </div>
  )
}

rfcp
import React from 'react'
import PropTypes from 'prop-types'

function React(props) {
  return (
    <div>
      
    </div>
  )
}

React.propTypes = {

}

export default React

import React from 'react'

const React = () => {
  return (
    <div>
      
    </div>
  )
}
rfce, react functional component shortcut
export default React
*/
//rafcp have arrow function with proptypes
//rcc then rconst for class and constructor
//h1,button, ol>li*3, input:button

/*props pass to component (and not change), state creted,used,change in component
state created in class and function(called Hooks) component in diff ways*/

/*
npm start, node terminal ctrl+c to terminate npm start
shift+alt+f to beatyfy code
ctrl + / for comment uncomment both in vs code
inside react {/* use for comment
ctrl+c for stop npm
npm install prop-types, impt shortcut to import prop-types, pts,ptn for PropTypes.String
html:5, shortcut for html body, clg for console.log
refresh to clean console

import '../App.css';  import from parent folder

camelcasing required when writing onClick in react (or onClickEvent), in HTML onclick is fine.
<input type="button" value="click" onClick={HelloFunction}/> HelloFunction has no bracket, its rule 

for calling a function in class component this keyword is must.
<input type="button" value="click" onClick={this.HelloFunction} />
inside class function keyword can't be used

shift + enter for new line
shift + alt for vertical selection
ctrl + /  comment
shift + alt + f   beautyfy code
*/

/*
file-->open folder ReactJSapp, create-react-app new-app(app name)
cd new-app --> npm start

npm config set fund false
npm i tar
we must open new folder from vs code for app creation
file-->open folder ReactJSapp, create-react-app new-app(app name)
cd new-app --> npm start
http://localhost:3000/
*/


/*
file --> open folder
// cd..
// cd ReactQuiz4
// mkdir alma
// rmdir alma
*/
