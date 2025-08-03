import React from 'react'

export function V92Read() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    const [apiData, setApiData] = useState([]);

    // const navigate = useNavigate();

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     axios.post('https://688fb8c9f21ab1769f89f4c3.mockapi.io/crud',{
    //         e_name : name,
    //         e_age : age,
    //         e_email :email

    //     });

    // }

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
                    <form >

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