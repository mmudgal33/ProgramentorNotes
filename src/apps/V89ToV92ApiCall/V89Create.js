// https://mockapi.io/    create link below
// https://688fb8c9f21ab1769f89f4c3.mockapi.io/crud


export function V89AxiosRouting() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    const [apiData, setApiData] = useState([]);

    // const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://688fb8c9f21ab1769f89f4c3.mockapi.io/crud',{
            e_name : name,
            e_age : age,
            e_email :email

        });

    }

    // .then(()=>{navigate('/');})

    const handleReset = (e) => {
        setName('');
        setAge('');
        setEmail('');
    }

    function getData(){
        axios.get('https://688fb8c9f21ab1769f89f4c3.mockapi.io/crud')
        .then((response)=>{
            setApiData(response.data);
            console.log(response.data);
        })
    }

    useEffect(() => { getData(); },[])

    return (
        <>
            <div className='row'>
            
                <div className='col-md-4'>
                <div className='bg-primary p-4 text-center'><h1>Create Data</h1></div>
                    <form onSubmit={handleSubmit}>

                        <div className='form-group'>
                            <label htmlFor="name">Enter Name: &nbsp;</label>
                            <input type="text" placeholder='Enter Name' onChange={(e) => setName(e.target.value)} id='name' className='form-control' />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="email">Enter Email: &nbsp;</label>
                            <input type="email" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} id='email' className='form-control' />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="age">Enter Age: &nbsp;</label>
                            <input type="number" placeholder='Enter Age' onChange={(e) => setAge(e.target.value)} id='age' className='form-control' />
                        </div>
                        <br />

                        <div className='d-grid'>
                            <input type="submit" value="submit" className='btn btn-primary' />
                        </div>
                        <br />
                        <div className='d-grid'>
                            <input type="reset" value="reset" className='btn btn-primary' onClick={handleReset}/>
                        </div>
                    </form>
                </div>
            </div>
            {name} <br />
            {email} <br />
            {age} <br />
            {JSON.stringify(apiData)}
        </>
    )
}

export default V87AxiosRouting


// {JSON.stringify(data, null, 2)}


// In React, placing API calls inside the useEffect hook is a common practice, but it's not strictly necessary.
// The primary reason for doing so is to ensure that the API call is executed after the component has rendered,
// allowing for better control over the UI during the data fetching process.
//  This approach enables developers to show loading states, handle errors, and update the UI once the data is available.

//  When an API call is made inside useEffect, it runs after the component has rendered,
//  which means the UI can be updated based on the data received.



// The expression {JSON.stringify(data, null, 2)} refers to the use of the JSON.stringify() function in JavaScript, 
// which converts a JavaScript object or value into a JSON string. The three arguments passed to JSON.stringify() are:

// data: This is the JavaScript object or value that you want to convert into a JSON string. For example, 
// if data is { name: "John", age: 30, city: "New York" }, then JSON.stringify(data, null, 2) will convert this object into a JSON string.

// null: This is the second argument, known as the "replacer." It is typically used to filter or transform the results of the stringification process. 
// When null is passed, it means that no filtering or transformation is applied, and all properties of the object are included in the resulting JSON string.

// 2: This is the third argument, known as the "space" parameter. It specifies the number of spaces to use for indentation in the resulting JSON string, 
// making it more readable. In this case, 2 means that each level of indentation will use two spaces.