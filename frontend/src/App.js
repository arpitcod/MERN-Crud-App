
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import AllUserPage from './pages/AllUserPage';
import AddUserpPage from './pages/AddUserpPage';
// import HomePage from './pages/HomePage';
import UpdateUser from './pages/UpdateUser';

function App() {
  return (
    <div className="App">
        <>
        <Header/>

        <Routes>
            {/* <Route path='/' element={<HomePage/>}/> */}
            <Route path='/' element={<AllUserPage/>}/>
            <Route path='/add-user' element={<AddUserpPage/>}/>
            <Route path='/update-user/:id' element={<UpdateUser/>}/>
        </Routes>
        </>
    </div>
  );
}

export default App;
