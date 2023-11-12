import './Docs.css';
import Header from '../Header.js'
import Timeline from './Timeline.js'

function Docs() {
  return (
    <div className="Docs">
      <Header className="header"></Header>
      
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <p style={{ fontSize: '42px' }}> Documentation</p>

        <p style={{ fontSize: '21px' }}> Past Launches </p>
      </div>

      <div style={{ padding: '20px', textAlign: 'center' }}>
        <Timeline />
      </div>
    </div>
  );
}
  
export default Docs;