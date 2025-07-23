import './App.css'
import {Link, Outlet} from "react-router";

function App() {

  return (
    <>
        <div className="w-300 m-auto mt-10">
            <nav className="flex justify-between items-center mb-15">
            <h1 className="text-2xl font-semibold">TAZ Blogs</h1>
            <ul className="flex items-center space-x-8 text-lg">
                <li><Link to="">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            </nav>
            <Outlet />
        </div>
    </>
  )
}

export default App
