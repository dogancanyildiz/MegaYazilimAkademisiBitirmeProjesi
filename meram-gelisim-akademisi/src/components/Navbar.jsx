import '../assets/css/Navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {

  return (

    <header className='header'>
      <div className="navbar">
        <NavLink to="/">Ana Sayfa</NavLink>
        <NavLink to="/hakkimizda">Hakkımızda</NavLink>
        <NavLink to="/iletisim">İletişim</NavLink>
      </div>
      <div className="search">
        <i className='bx bx-search'></i>
        <input type="text" placeholder="Anahtar Kelime" />
      </div>
    </header>


  )
}

export default Navbar