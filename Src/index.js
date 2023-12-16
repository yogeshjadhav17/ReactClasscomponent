import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Header extends React.Component{

  render(){
    return(
      <div className='backgroundbanner'>

        <div className='navbar'>
        <ul className='nav'>
          <li>Home</li>
          <li>Aboutus</li>
          <li>Services</li>
          <li>Contactus</li>
        </ul>
      </div>
      <div className='bannerpara'>
        <h1>ABC Software Solutions Private Limited</h1><br/>
        <h3>We provide proper guidance and deliver website <br/>
        to our users by following all the stages of software lifecycle</h3>

      </div>

      </div>
    );
  }
}

ReactDOM.render(<Header/>,document.getElementById('root'));