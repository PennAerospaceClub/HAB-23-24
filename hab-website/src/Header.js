import './Header.css'
import HabLogo from './logopictures/HABlogo.png'

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
    </div>
  );
}

export default Header;
