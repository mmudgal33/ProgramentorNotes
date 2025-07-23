import { createContext, useState } from 'react';

import { V41UseContextHookA } from './V41UseContextHookA'


export const nameContext = createContext()
export const skillContext = createContext()



export function V41UseContextHook() {
  const [name, setName] = useState("mohit");

  

  

  return (
    <nameContext.Provider value={{ name, setName }}>
      <skillContext.Provider value={'web development'}>
        <V41UseContextHookA />
      </skillContext.Provider>
    </nameContext.Provider>
  )
}










