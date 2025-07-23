import { useContext, useState  } from 'react'
import { nameContext } from './V41UseContextHook'




export function V41UseContextHookC() {
    const [check, setCheck] = useState(true);
    const user = useContext(nameContext);
    let changeName = () => { 
        user.setName(check===true ? 'mohita' : 'mohit');
        setCheck( check === true ? false : true );
    }
    return (
        <div>
            <h1>V41UseContextHookC {user.name}</h1>
            <button onClick={changeName}>change state</button>
            
        </div>
    )
}