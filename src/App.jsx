import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UseEffect from './components/useEffect/UseEffect'
import Header from './components/header/Header'
import UseRef from './components/useRef/UseRef'
import UseState from './components/useState/UseState'
import Return from './components/useEffect/Return'
import Memo from './components/useMemo/useMemo'
import FormData from './components/formikyup/FormData'
import { ToastContainer } from 'react-toastify'
// import HooksExample from './components/userefeffectstate/HooksExample'

const App = () => {

  return (

    <div>
      <Header />
      <Routes>
        <Route path='/useeffect' element={<UseEffect />} />
        <Route path='/useref' element={<UseRef />} />
        <Route path='/usestate' element={<UseState />} />
        <Route path='/return' element={<Return />} />
        <Route path='/usememo' element={<Memo />} />
        <Route path='/formdata' element={<FormData />} />
        {/* <Route path='/hooksexample' element={<HooksExample />} /> */}
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App