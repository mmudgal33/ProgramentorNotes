import React, { Component } from 'react';



// autogenerate text lorem10 lorem50 lorem100


import Payalrohatgi from './files/payal rohatgi.jpg';
import docxFile from './files/WebDevelopmentOpening.docx';
import pdfFile from './files/WebDevelopmentOpening.pdf';
import mp4File from './files/Destiny maylas.mp4';
import mp3File from './files/Nazm Nazm.mp3';


import TrivveniKaul from './files/Trivveni Kaul.jpg';
import RuchiSharmaSoniyaChauhan from './files/Ruchi Sharma Soniya Chauhan.png';
import MeenakshiKandwal from './files/Meenakshi Kandwal.png';


// <a> with page navigation in react not working
// import page1 from './files/page1.html';
// import page2 from './files/page2.html';
// import page3 from './files/page3.html';

export class HtmlNotes extends Component {
    render() {
        return (
            <>
                <h1>h1 size</h1>
                <h2>h2 size</h2>
                <h3>h3 size</h3>
                <h4>h4 size</h4>
                <h5>h5 size</h5>
                <h6>h6 size</h6>
                <p>paragraph here</p>
                <h3>Break</h3>
                one <br /> two <br /> three
                <h3>bold</h3>
                normal text <b>bold text</b>
                <br />normal text &nbsp;<b><i>italic text</i></b>
                <br />normal text &nbsp;<b><u>underline text</u></b>
                <br />normal text &nbsp;<b><strike>strikeout text</strike></b>
                <br />normal text &nbsp;<b><sup>superscript text</sup></b>
                {/* &nbsp; non-breaking space */}

                <h3>HTML Entities </h3>
                &nbsp;
                &reg;
                &copy;
                &trade;
                &pound;
                &#8377;
                &cent;
                &lt;
                &gt;
                &amp;
                <br />

                <br /><img src={Payalrohatgi} width="600px" height="390px" title="mouse pointer tooltip" alt="image not found" />


                <br />hyperlinks, <b>target=_blank </b> opens link in seperate tab <br />
                <a href="https://www.freecodecamp.org/learn/front-end-development-libraries/" target="_blank">Front End Development Libraries</a>
                <p> <a href={Payalrohatgi}>click to open image</a> </p>
                <p> <a href={docxFile}>click to open doc file</a> </p>
                <p> <a href={pdfFile}>click to open pdf file</a> </p>
                <p> <a href={mp4File}>click to open mp4 file</a> </p>
                <p> <a href={mp3File}>click to open mp3 file</a> </p>

                <h3><b>image as a hyperlink</b></h3>

                <a href="https://www.youtube.com/@PayalRohatgiOnline" target="_blank">
                    <img src={Payalrohatgi} width="600px" height="390px" title="Payal Rohatgi youtube channel" alt="image not found" />
                </a>

                <br />
                <br />


                <a href="#first">Paragraph 1</a><br />
                <a href="#second">Paragraph 2</a><br />
                <a href="#third">Paragraph 3</a><br />

                <h1 id='first'>Paragraph 1</h1>
                <p><img src={TrivveniKaul} width="1000px" height="650px" title="TrivveniKaul}" alt="image not found" /></p>

                <h1 id='second'>Paragraph 2</h1>
                <p><img src={RuchiSharmaSoniyaChauhan} width="1000px" height="650px" title="RuchiSharmaSoniyaChauhan" alt="image not found" /></p>

                <h1 id='third'>Paragraph 3</h1>
                <p><img src={MeenakshiKandwal} width="1000px" height="650px" title="MeenakshiKandwal" alt="image not found" /></p>


                {/* <a href={page1}>Page 1</a><br />
                <a href={page2}>Page 2</a><br />
                <a href={page3}>Page 3</a><br /> */}

                <h3>unordered list</h3>
                <ul>
                    <li>shivi</li>
                    <li>triveni</li>
                    <li>tamanna</li>
                    <li>yogita</li>
                </ul>

                <h3>ordered list</h3>
                <ol>
                    <li>shivi</li>
                    <li>triveni</li>
                    <li>tamanna</li>
                    <li>yogita</li>
                </ol>


                <h3>Defination list defination title defination data</h3>
                <dl>
                    <b><dt>computer</dt></b>
                    <dd>bewkoof hota h</dd>
                    <b><dt>human</dt></b>
                    <dd>gadha hota h</dd>
                </dl>



                <h3> Table example <b>border="0/1" without/with border</b> </h3>
                <table border="1">
                    <caption>Students</caption>
                    <tr>
                        {/* <th colspan="2">colspan</th> */}
                    </tr>
                    <tr>
                        {/* <th rowspan="2">Rowspan</th> */}
                        <td>No</td>
                        <td>Name</td>
                        <td>Marks</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>John</td>
                        <td>89</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Scott</td>
                        <td>45</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Allen</td>
                        <td>64</td>
                    </tr>
                </table>


                <h3>Iframe means another webpage within current webpage</h3>
                <iframe src="https://leetcode.ca/all/problems.html" width="800px" height="520px" frameborder="0" ></iframe>

                <h3>meta tag used in head part, as name suggest it is data about webpage for seo</h3>
                <h3>page 53 has form attributes list study</h3>


                <div>
                    <h3>put hr br inside div is recommended in react</h3>
                    <h3>space and newline ignored by html, different methods for doing it</h3>
                    <h3>id connect to htmlFor, value default value or updated, name is element name in form </h3>
                    <h3>input is inline tag, br used</h3>
                    <h3>select tag is used where radio button can't be used</h3>
                    <h3>checkbox attribute <i>checked='checked'</i> can't be used in react</h3>
                    <h3>tabindex=n attribute helps use tab in form, on clicking tab cursor moves to next higher tabindex</h3>
                    <h3>ID create label in html, selector in css, getElementById() in JS</h3>
                    <h3>placeholder="any text" info about data this input looking for</h3>
                    <h3>autofocus="autofocus" when browser opens cursor present this textbox </h3>
                    <h3>required="required" attribute</h3>
                    <h3>pattern="regular expression here" html validation</h3>
                    <h3>min max used with number, range, date</h3>
                    <h3>formnovalidate="novalidate" | novalidate="novalidate" disables built-in HTML5 validations, such as min, max, email, datr, number etc </h3>
                    <h3>input type file form="multiple" for selecting multiple files</h3>
                    <h3>input type text autocomplete="off"</h3>
                    <h3>Drop down list attribute selected="selected" for by default select item</h3>
                    <hr />


                    <form action="submit" method='post'>
                        <label htmlFor="username">User Name</label>
                        <input type="text" id='username' name='username' value="mohit" maxLength="30" /><br /><br />

                        <label htmlFor="password">password</label>
                        <input type="password" name='password' id='password' /><br /><br />

                        <label htmlFor="mobile">Mobile</label>
                        <input type="numeric" name='mobile' id='mobile' /><br /><br />

                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' /><br /><br />

                        Date<input type="date" /><br /><br />
                        File<input type="file" /><br /><br />
                        color<input type="color" /><br /><br />
                        range<input type="range" /><br /><br />
                        hidden<input type="hidden" name='x' value="100" /><br /><br />
                        time<input type="time" name='y' /><br /><br />
                        url<input type="url" name='z' /><br /><br />
                        <input type="reset" value="Clear" />
                        <input type="button" value="search" /><br /><br />

                        <label>Gender</label><br />
                        <label htmlFor="male">male</label>
                        <input type="radio" id='male' value='male' name='gender' /><br />
                        <label htmlFor="female">female</label>
                        <input type="radio" id='female' value='female' name='gender' /><br />
                        <label htmlFor="other">other</label>
                        <input type="radio" id='other' value='other' name='gender' /><br />


                        <br /><br />
                        <label>Hobbies</label><br />
                        <label htmlFor="reading">reading</label>
                        <input type="checkbox" id='reading' value='reading' name='Hobbies' /><br />
                        <label htmlFor="cycling">cycling</label>
                        <input type="checkbox" id='cycling' value='cycling' name='Hobbies' /><br />
                        <label htmlFor="hiking">hiking</label>
                        <input type="checkbox" id='hiking' value='hiking' name='Hobbies' /><br />

                        <br /><br />
                        <label for="vehicle">Choose a vehicle:</label>
                        <select id="vehicle">
                            <optgroup label="four wheeler">
                                <option>Car</option>
                                <option>Truck</option>
                                <option>Bus</option>
                            </optgroup>
                            <optgroup label="two wheeler">
                                <option>Scooter</option>
                                <option>Scooty</option>
                                <option>Bike</option>
                            </optgroup>
                        </select>


                        <br /><br />
                        <label for="banks">Choose your bank:</label>
                        <select name="list_box_name[]" id="banks" size="number_of_options" multiple="multiple">
                            <option value="Visa">Visa</option>
                            <option value="Mastercard">Mastercard</option>
                            <option value="American Express">American Express</option>
                            <option value="UPI">UPI</option>
                        </select>



                        <br /><br />
                        <label for='quater'>Quater</label><br />
                        <select id="quater" name="quater">
                            <option value="first">first</option>
                            <option value="second">second</option>
                            <option value="third">third</option>
                            <option value="fourth" selected="selected">fourth</option>
                        </select>


                        <br /><br />
                        <label for="ice-cream-choice">Choose a flavor:</label>
                        <input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" />

                        <datalist id="ice-cream-flavors">
                            <option value="Chocolate"></option>
                            <option value="Coconut"></option>
                            <option value="Mint"></option>
                            <option value="Strawberry"></option>
                            <option value="Vanilla"></option>
                        </datalist>


                        <br /><br />
                        <label htmlFor="remarks">Remarks</label><br />
                        <textarea name="remarks" id="remarks" cols="30" rows="10"></textarea>





                        <hr />
                        <input type="submit" value="Login" />

                    </form>
                </div>


                <div>
                    <h1>Registration:</h1>
                    <form action=""></form>
                    <table border="1">
                        <tr>
                            <td><label htmlFor="college">college</label></td>
                            <td><input type="text" name='college' id='college' readOnly="readonly" value="DCRUST" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="college">college</label></td>
                            <td><input type="text" name='college' id='college' readOnly="readonly" value="DCRUST" disabled="disabled" /></td>
                        </tr>
                        <tr>
                            {/* value="" can't be used in react, not editable, used in html */}
                            <td><label htmlFor="username">User Name</label></td>
                            <td><input type="text" id='username' name='username' maxLength="30" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="password">password</label></td>
                            <td><input type="password" name='password' id='password' /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="mobile">Mobile</label></td>
                            <td><input type="numeric" name='mobile' id='mobile' /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="email">Email</label></td>
                            <td><input type="email" name='email' /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="photo">User Photo</label></td>
                            <td><input type="image" id='photo' src={Payalrohatgi} width="60px" height="39px" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="button photo">User Photo</label></td>
                            <td><button><img src={Payalrohatgi} width="60px" alt="not found" />photo button</button></td>
                        </tr>
                        <tr>
                            <td><label>Hobbies</label></td>
                            <td><label htmlFor="reading">reading</label>
                                <input type="checkbox" id='reading' value='reading' name='Hobbies' /><br />
                                <label htmlFor="cycling">cycling</label>
                                <input type="checkbox" id='cycling' value='cycling' name='Hobbies' /><br />
                                <label htmlFor="hiking">hiking</label>
                                <input type="checkbox" id='hiking' value='hiking' name='Hobbies' /><br /></td>
                        </tr>
                        <tr>
                            <td><label>Gender</label></td>
                            <td><label htmlFor="male">male</label>
                                <input type="radio" id='male' value='male' name='gender' /><br />
                                <label htmlFor="female">female</label>
                                <input type="radio" id='female' value='female' name='gender' /><br />
                                <label htmlFor="other">other</label>
                                <input type="radio" id='other' value='other' name='gender' /><br /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor='photo'>Photo</label></td>
                            <td><input type="file" name='photo' id='photo' /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor='dob'>Date of Birth</label></td>
                            <td><input type="date" name='dob' id='dob' /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor='exp'>Experience</label></td>
                            {/* step 2.5 means range move by 2.5 at one time between 0 to 10 */}
                            <td><input type="range" name='exp' id='exp' min="0" max="10" step="2.5" list="tickmarks" />
                                <datalist id="tickmarks">
                                    <option value="0">0</option>
                                    <option value="2.5">2</option>
                                    <option value="5">4</option>
                                    <option value="7.5">6</option>
                                    <option value="10">8</option>

                                </datalist></td>
                        </tr>
                        <tr>
                            <td colSpan="2"><input type="submit" value="Register" /></td>

                        </tr>
                        <tr>
                            <td colSpan="2"><input type="reset" disabled="disabled" /></td>
                        </tr>
                    </table>
                </div>










            </>
        )
    }
}


