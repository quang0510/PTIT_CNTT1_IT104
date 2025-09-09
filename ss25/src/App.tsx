import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './components/NotFound'
import Product from './components/Product'
import Detail from './components/Detail'
import CustomLink from './components/CustomLink'
import HomePage from './components/HomePage'
import Login from './components/Login'
import Register from './components/Register'
import Header from './components/Header'
import ListUser from './components/ListUser'
import UserDetail from './components/UserDetail'


function App() {

  return (
    <>
           {/* bài 6 */}
           <Header/>

      <Routes>
        {/* bài 1 , 2*/}
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        {/* bài 3 */}
        <Route path="/login" element={<Login/>} />
        {/* bài 4 */}
        <Route path='/register' element={<Register/>}/>
        {/* bài 5 */}
        <Route path='*' element={<NotFound/>}/>

        <Route path='/product' element={<Product/>}/>
        <Route path='/detail' element={<Detail/>}/>
      
      {/* bài 7 */}
      <Route path="/" element={<CustomLink />}>
        {/* Route con */}
        <Route path="home-page" element={<HomePage />} />
        <Route path="not-found" element={<NotFound />} />
      </Route>

      {/* bài 8 */}

        <Route path="/" element={<ListUser />} />
        <Route path="/user/:id" element={<UserDetail/>} />

      </Routes>
    </>
  ) 
}

export default App
