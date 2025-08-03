// npm i 'react-router-dom'
import { Routes, Route, useNavigate } from 'react-router-dom'

import { V90Read, V89Create, V92Edit } from './V90CreateRead'



export const AppRouter = () => {
  const navigate = useNavigate();
  

  


  return (
    <>
      <div className='container'>
        <Routes>
          <Route exact path='/' element={<V90Read />}></Route>
          <Route exact path='/create' element={<V89Create />}></Route>
          <Route exact path='/edit' element={<V92Edit />}></Route>
        </Routes>
      </div>
    </>
  )
}


