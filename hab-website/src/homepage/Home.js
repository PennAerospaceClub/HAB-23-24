import './Home.css';
import Header from '../Header.js'

function Home() {
  return (
    <div className="Home">
      <Header className='header'></Header>
    </div>
  );
}

export default Home;


// import React from 'react';
// import App from './App';
// import { useState } from 'react';


// function Timer(){
//     <body> 
//         <img style={{width: '100%', height: '100%'}} src="/Users/kristinehuang/Desktop/classes/penn/PAC/HAB-23-24/hab-website/Screenshot 2023-10-22 at 3.56 1.png" /> 
//         <div style={{width: '100%', textAlign: 'right', color: 'white', fontSize: 100, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>Penn Aerospace<br/> High Altitude Balloon</div>
        

//         <div style={{width: '100%', textAlign: 'center', color: 'black', fontSize: 50, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>COUNTDOWN</div>
//         <div style={{width: '100%', height: '100%', textAlign: 'center', color: 'black', fontSize: 31, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>TO OUR NEXT LAUNCH</div> 
        
        
//         {/* today's date in EST */}
//         const today = new Date();
//         const currYear = today.getYear(); 
//         const currMonth = today.getMonth();
//         const currDate = today.getDate();
//         const currHours = today.getHours();
//         const currMinutes() = today.getMinutes(); 

        

//         const launchDate = new Date('December 3, 2023 10:00:00');
//         const daysLeft;
//         const hoursLeft; 
//         const minutesLeft; 

//         if (currMonth == 1){
            
//             // if (currYear % 4 != 0){
//             //     //28 days
//             //     daysLeft += 

//             // }
//             // else{
//             //     //29 days
//             // } 
            
//         }
//         else if (currMonth %2 == 0  && (currMonth {'<='} 6)){
//             //31 days
//         }
//         else if (currMonth %2 == 1  && (currMonth {'<='} 6)){
//             //30 days
//         }
//         else if (currMonth %2 == 0  && (currMonth {'>'} 6)){
//             //30 days
//         }
//         else {
//             //31 days
//         }      
//     </body>
// }
