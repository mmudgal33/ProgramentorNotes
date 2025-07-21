import React, { Component } from 'react'

// import Payalrohatgi from '../htmlNotes/files/payal rohatgi.jpg';
// import docxFile from '../htmlNotes/files/WebDevelopmentOpening.docx';
// import pdfFile from '../htmlNotes/files/WebDevelopmentOpening.pdf';
// import mp4File from '../htmlNotes/files/Destiny maylas.mp4';
// import mp3File from '../htmlNotes/files/Nazm Nazm.mp3';


// import TrivveniKaul from './files/Trivveni Kaul.jpg';
// import RuchiSharmaSoniyaChauhan from './files/Ruchi Sharma Soniya Chauhan.png';
// import MeenakshiKandwal from './files/Meenakshi Kandwal.png';


export class V16StateBasedForm extends Component {

    // use this constructor based way always

    constructor(props) {
        super(props);
        this.state = {
            college: '',
            username: '',
            password: '',
            gender: '',
            mobile: '',
            email: '',
            // photo: '',
            hobbies: '',
            dob: '',
            exp: '',
            banks: '',
            semester: '',
            skillchoice: '',
            remarks: '',
            vehicle: '',

            // selectedFile: null,
            // downloadUrl: null,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        // this.handleFileChange = this.handleFileChange.bind(this);
        // this.downloadImage = this.downloadImage.bind(this);


    }



    handleChange = ({ target: { value, name } }) => this.setState({ [name]: value })

    // handleChange = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value,
    //     });
    // };

    // handleFileChange(e) {
    //     const file = e.target.files;
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onload = (e) => {
    //             this.setState({ selectedFile: file, downloadUrl: e.target.result });
    //         };
    //         reader.readAsDataURL(file);
    //     }
    // }

    // downloadImage() {
    //     if (this.state.downloadUrl) {
    //         const link = document.createElement('a');
    //         link.href = this.state.downloadUrl;
    //         link.download = this.state.selectedFile.name;
    //         document.body.appendChild(link);
    //         link.click();
    //         document.body.removeChild(link);
    //     }
    // }


    resetForm = (e) => {
        this.setState({
            college: '',
            username: '',
            password: '',
            gender: '',
            mobile: '',
            email: '',
            // photo: '',
            hobbies: '',
            dob: '',
            exp: '',
            banks: '',
            semester: '',
            skillchoice: '',
            remarks: '',
            vehicle: '',
        });
    };


    defaultForm = (e) => {
        this.setState({
            college: 'dcrust',
            username: 'Triveni',
            password: 'dhakan',
            gender: 'female',
            mobile: '9968987089',
            email: 'ssaurav207@gmail.com',
            // photo: '',
            hobbies: 'reading',
            dob: '1992-07-29',
            exp: '5',
            banks: 'visa',
            semester: 'first',
            skillchoice: 'Web Development',
            remarks: 'hello this form is big',
            vehicle: 'Bus',
        });
    };




    handleSubmit(e) {
        e.preventDefault();



        // college: this.state.college,
        // username: this.state.username,
        // password: this.state.password,
        // gender: this.state.gender,
        // mobile: this.state.mobile,
        // email: this.state.email,
        // hobbies: this.state.hobbies,
        // dob: this.state.dob,
        // exp: this.state.exp,

        console.log([this.state.college, this.state.username, this.state.password, this.state.gender,
        this.state.mobile, this.state.email, this.state.hobbies, this.state.dob, this.state.exp,
        this.state.banks, this.state.semester, this.state.skillchoice, this.state.remarks, this.state.vehicle])

    }





    render() {

        return (
            <>



                <form onSubmit={this.handleSubmit}>
                    <h1>Registration:</h1>
                    <form action=""></form>
                    <table border="1">


                        <tr>
                            {/* value="" can't be used in react, not editable, used in html */}
                            <td><label htmlFor="username">User Name</label></td>
                            <td><input type="text" id='username' name='username' maxLength="30"
                                value={this.state.username} onChange={this.handleChange} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="password">password</label></td>
                            <td><input type="password" name='password' id='password'
                                value={this.state.password} onChange={this.handleChange} /></td>
                        </tr>
                        <tr>
                            <td><label>Gender</label></td>
                            <td><label htmlFor="male">male</label>
                                <input type="radio" id='male' value='male' name='gender' onChange={this.handleChange} /><br />
                                <label htmlFor="female">female</label>
                                <input type="radio" id='female' value='female' name='gender' onChange={this.handleChange} /><br />
                                <label htmlFor="other">other</label>
                                <input type="radio" id='other' value='other' name='gender' onChange={this.handleChange} /><br /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="mobile">Mobile</label></td>
                            <td><input type="numeric" name='mobile' id='mobile' value={this.state.mobile} onChange={this.handleChange} minLength="10" maxLength="10" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="email">Email</label></td>
                            <td><input type="email" name='email' value={this.state.email} onChange={this.handleChange} /></td>
                        </tr>
                        {/* <tr>
                            <td><label htmlFor="college_readonly">college</label></td>
                            <td><input type="text" name='college' id='college_readonly' readOnly="readonly" value="DCRUST" disabled="disabled" /></td>
                        </tr> */}
                        <tr>
                            <td><label htmlFor="college">college</label></td>
                            <td><input type="text" name='college' id='college'
                                onChange={this.handleChange} value={this.state.college} /></td>
                        </tr>
                        {/* <tr>
                            <td><label htmlFor="photo_imgtype">User Photo</label></td>
                            <td><input type="image" id='photo_imgtype' src={Payalrohatgi} width="60px" height="39px" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor='photo'>Photo</label></td>
                            <td><input type="file" name='photo' id='photo' onChange={this.handleChange} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="button photo">Photo button</label></td>
                            <td><button><img src={Payalrohatgi} width="60px" alt="not found" />photo button</button></td>
                        </tr> */}
                        <tr>
                            <td><label>Hobbies</label></td>
                            <td><label htmlFor="reading">reading</label>
                                <input type="checkbox" id='reading' value='reading' name='hobbies' onChange={this.handleChange} /><br />
                                <label htmlFor="cycling">cycling</label>
                                <input type="checkbox" id='cycling' value='cycling' name='hobbies' onChange={this.handleChange} /><br />
                                <label htmlFor="hiking">hiking</label>
                                <input type="checkbox" id='hiking' value='hiking' name='hobbies' onChange={this.handleChange} /><br /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor='dob'>Date of Birth</label></td>
                            <td><input type="date" name='dob' value={this.state.value} id='dob' onChange={this.handleChange} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor='exp'>Experience</label></td>
                            {/* step 2.5 means range move by 2.5 at one time between 0 to 10 */}
                            <td><input type="range" name='exp' id='exp' min="0" max="10" step="2.5" list="tickmarks" onChange={this.handleChange} />
                                <datalist id="tickmarks">
                                    <option value="0">0</option>
                                    <option value="2.5">2</option>
                                    <option value="5">4</option>
                                    <option value="7.5">6</option>
                                    <option value="10">8</option>

                                </datalist></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="banks">Choose your bank:</label></td>
                            <td><select name="banks" id="banks" size="1" multiple="multiple" onChange={this.handleChange}>
                                <option value="Visa">Visa</option>
                                <option value="Mastercard">Mastercard</option>
                                <option value="American Express">American Express</option>
                                <option value="UPI">UPI</option>
                            </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='semester'>semester</label></td>
                            <td><select id="semester" name="semester" onChange={this.handleChange}>
                                <option value="first">first</option>
                                <option value="second">second</option>
                                <option value="third">third</option>
                                <option value="fourth" selected="selected">fourth</option>
                            </select>

                            </td>
                        </tr>

                        <tr>
                            <td><label htmlFor="skillchoice">Choose a Skill:</label></td>
                            <td>
                                <input list="skill-list" id="skillchoice" name="skillchoice" onChange={this.handleChange} />

                                <datalist id="skill-list">
                                    <option value="Web Development"></option>
                                    <option value="Data Analyst"></option>
                                    <option value="AI Engineer"></option>
                                    <option value="Cloud Engineer"></option>
                                    <option value="Machine Learning"></option>
                                </datalist>

                            </td>
                        </tr>

                        <tr>
                            <td><label htmlFor="remarks">Remarks</label><br /></td>
                            <td><textarea name="remarks" id="remarks" cols="30" rows="1" onChange={this.handleChange}></textarea></td>
                        </tr>

                        <tr>
                            <td><label htmlFor="vehicle">Choose a vehicle:</label></td>
                            <td>
                                <select id="vehicle" name="vehicle" onChange={this.handleChange}>
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

                            </td>
                        </tr>

                        {/* <tr>
                            <td colSpan="1"><label htmlFor='file'><p>File(img,docx,pdf,mp4,mp3)</p></label></td>
                            <td colSpan="1"><input type="file" name='file' id='file' onChange={this.handleChange} /></td>
                        </tr> */}

                        {/* <tr>
                            <td><input type="file" accept="image/*" onChange={this.handleFileChange} /></td>
                            <td>{this.state.downloadUrl && (
                                <button onClick={this.downloadImage}>Download Image</button>
                            )}</td>

                        </tr> */}

                        {/* <tr>
                            <p> <a href={Payalrohatgi}>click to open image</a> </p>
                            <p> <a href={docxFile}>click to open doc file</a> </p>
                            <p> <a href={pdfFile}>click to open pdf file</a> </p>
                            <p> <a href={mp4File}>click to open mp4 file</a> </p>
                            <p> <a href={mp3File}>click to open mp3 file</a> </p>
                        </tr> */}

                        <tr>
                            <td colSpan="1"><button type="reset" onClick={() => this.resetForm()} >Reset</button></td>
                            <td colSpan="1"><button type="button" onClick={() => this.defaultForm()} >defaultForm</button></td>
                        </tr>
                        <tr>
                            <td colSpan="1"><button type="submit"  >Register</button></td>
                        </tr>
                    </table>
                </form>

            </>
        )
    }
}





