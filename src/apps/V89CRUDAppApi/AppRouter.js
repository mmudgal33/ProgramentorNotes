// npm i 'react-router-dom'
import { Routes, Route, useNavigate } from 'react-router-dom'


import { V89Create } from './V89Create'
import { V90Read } from './V90Read'
import { V92Edit } from './V92Edit'

//  exact

export const AppRouter = () => {
  // const navigate = useNavigate();





  return (
    <>
      <div className='container'>
        <Routes>
          
          <Route path='/' element={<V90Read />}></Route>
          <Route path='/create' element={<V89Create />}></Route>
          <Route path='/edit' element={<V92Edit />}></Route>
        </Routes>
      </div>
    </>
  )
}


