import { Outlet, Link } from "react-router-dom";
import '../App.css';

const Layout = () => {
  return (
    <>
      <nav className='navbar'>
        <ul>
          <li>
            <Link to="/" style={{textDecoration:"none" , color:"crimson"}}>Home</Link>
          </li>
          <li>
            <Link to="/keyword" style={{textDecoration:"none", color:"crimson"}}>Insert Keyword</Link>
          </li>
          <li>
            <Link to="/video" style={{textDecoration:"none", color:"crimson"}}>Insert Video</Link>
          </li>
        </ul>
      </nav>
      <Outlet/>
    </>
  )
};

export default Layout;