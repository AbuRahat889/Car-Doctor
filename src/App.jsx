import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"

function App() {


  return (
    <div className='align'>
      
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
     
      
    </div>
  )
}

export default App
