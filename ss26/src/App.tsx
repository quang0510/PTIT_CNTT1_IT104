
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProductDetail from './components/ProductDetail'
import Student from './components/Student'
import StudentBai3 from './components/StudentBai3'
import Bai4 from './components/Bai4'
import PrivateRouter from './components/PrivateRouter'
import Account from './components/Account'
import Login from './components/Login'
import Team from './components/Team'
import Teams from './components/Teams'
import TeamsIndex from './components/TeamsIndex'
import { Suspense } from 'react'
import { Spin } from 'antd'
import { LoadingOutlined } from "@ant-design/icons";
import LazyLoadComp from './components/LazyLoadComp'

function App() {

  return (
    <>
      <Routes>
        {/* bài 1 */}
        <Route path='/productdetail/:id' element={<ProductDetail/>}/>
        {/* bài 2 */}
        <Route path='/student/:name' element={<Student/>}/>
        {/* bài 3 */}
        <Route path='/studentBai3' element={<StudentBai3/>}/> 
        {/* bài 4 */}
        <Route path='/bai4' element={<Bai4/>} />

        {/* Bài 5 + 6 - bảo vệ Route và điều hướng đăng nhập */}
        <Route element={<PrivateRouter />}>
          <Route path="/account" element={<Account />} />
        </Route>
        <Route path="/login" element={<Login />} />

          
        {/* Bài 7 */}
        <Route
          path="/teams"
          children={[
            // Route con có index = true, được chỉ định được hiển thị trong tp cha

            <Route index={true} element={<TeamsIndex />} />,
            <Route path=":teamId" element={<Team />} />,
          ]}
        />

          {/* bài 8 lazyloading */}
          <Route
          path="lazyloadingpage"
          element={
            <Suspense
              fallback={
                <>
                  <Spin
                    indicator={
                      <LoadingOutlined style={{ fontSize: 48 }} spin />
                    }
                  />
                </>
              }
            >
              <LazyLoadComp />
            </Suspense>
          }
        />


      </Routes>
    </>
  )
}

export default App
