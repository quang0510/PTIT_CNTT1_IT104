
import {Link ,Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Header2 from './pages/Header2'
import ProductList from './Components/ProductList'
import ProductDetail from './Components/ProductDetail'
import Header1 from './pages/Header1'
import TaskList from './Components/TaskList'
import TaskDetail from './Components/TaskDetail'
import ProductListBai4 from './Components/ProductListBai4'
import BlogLayout from './Components/BlogLayout'
import PostDetail from './Components/PostDetail'
import Post from './Components/Post'
import NotFound from './Components/NotFound'

function App() {

  return (
    <>
      
      <Routes>

      {/* bài 1 */}
        <Route path='/header1' element={<Header1/>}>
          <Route path="home" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Route>

      {/* bài 2 */}

        <Route path="/" element={<Header2 />}>
          <Route path="products" element={<ProductList />} />
          <Route path="products/:id" element={<ProductDetail />} />
        </Route>

        {/* bài 3 */}
         <Route path="/taskList" element={<TaskList/>} />
        <Route path="/taskDetail/:taskId" element={<TaskDetail />} />

        {/* bài 4 */}

        <Route path="/findProduct" element={<ProductListBai4 />} />

        {/* bài 5 */}
        <Route path="/blog" element={<BlogLayout />} >
        
        <Route path="posts" element={<Post />} />
        <Route path="posts/:id" element={<PostDetail />} />

        </Route>

        {/* bài 6 giống những bài trước */}
        {/* bài 7 */}
        <Route path="*" element={<NotFound />} />

        {/* bài 8 */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
      </Routes>

    </>
  )
}

export default App
