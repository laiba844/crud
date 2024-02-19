
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Add from './components/Add';
import Record from './components/Records';
import Edit from './components/Edit';

function App() {

  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Add />} />
    <Route path='/records' element={<Record />} />
    <Route path='/edit-record' element={<Edit />} />
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
