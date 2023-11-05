import './Header.css'
import HabLogo from './logopictures/HABlogo.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="Header">
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">
            <img className='habLogo' src={HabLogo} alt='Hab Logo'/>
        </a>
      <div className='habText'>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <b style={{fontSize: 20}}>HIGH ALTITUDE BALLOON TEAM</b>
        </a>
      </div>
      <div className='groundControl'>
        <Link to='/ground-control' style={{ textDecoration: 'none' }}>Ground Control</Link>
      </div>
      <div className='media'>
        <Link to='/media' style={{ textDecoration: 'none' }}>Media</Link>
      </div>
      <div className='documentation'>
        <Link to='/documentation' style={{ textDecoration: 'none' }}>Documentation</Link>
      </div>
      <div className='about'>
        <Link to='/about' style={{ textDecoration: 'none' }}>About</Link>
      </div>
    </div>
  );
}

export default Header;
