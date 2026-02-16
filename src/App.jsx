
import './App.css'
import { Routes,Route } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import Home from './Pages/Home'
import Explore from './Pages/Explore'
import Order from './Pages/Order'
import OrderSummary from './Pages/OrderSummary'
import Account from './Pages/Account'
import Login from './Pages/Login'

function App() {
  

  return (
    <>
    < Routes>
       <Route element={<MainLayout/>}>
       <Route path='/' element={<Home/>}></Route>
       <Route path='explore' element={<Explore/>}></Route>
       <Route path='order' element={<Order/>}></Route>
       <Route path='ordersummary:id/' element={<OrderSummary/>}></Route>
       <Route path='account' element={<Account/>}></Route>
       <Route path='login' element={<Login/>}></Route>
        </Route>
    </Routes>

      
    </>
  )
}

export default App
