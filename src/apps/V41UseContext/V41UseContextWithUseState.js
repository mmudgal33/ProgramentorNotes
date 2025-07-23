import { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export function V41UseContextWithUseState() {
    const [name, setName] = useState("Name");
    return (
      <UserContext.Provider value={{ name, setName }}>
        <Home />
      </UserContext.Provider>
    );
  }


  function Home() {
    const user = useContext(UserContext);
    return (
      <>
        <label>Your name:</label>
        <input type="text" onChange={e => user.setName(e.target.value)} />
        <p>{user.name}</p>
      </>
    );
  }