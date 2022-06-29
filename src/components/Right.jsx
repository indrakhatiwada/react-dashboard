import React from 'react'
import Profile from '../images/profile.png'
import Salesanalytics from './Salesanalytics'
function Right() {
  const handleClick = ()=>{
    const menu = document.getElementById('menu-btn')
    const close = document.getElementById('close-btn')
    const aside = document.querySelector('aside')

    menu.addEventListener('click', ()=>{
      aside.style.display = 'block';
      close.style.display = 'block';
    })
    close.addEventListener('click', ()=>{
      aside.style.display = 'none';
      
    });

    
  }
  return (
    <div className="right">
      <div className="top">
        <button id='menu-btn'>
          <span class="material-symbols-sharp" onClick={handleClick}>
            menu
          </span>
        </button>
        <div className="theme-toggler ">
          <span className="material-symbols-sharp active">
            light_mode
          </span>
          <span className="material-symbols-sharp">
            dark_mode
          </span>

        </div>
        <div className="profile">
          <div className="info">
            <p>Hey <b>Indra</b></p>
            <small className="text-muted">Admin</small>
          </div>
          <div className="avatar">
            <img src={Profile} alt="image" />
          </div>

        </div>
      </div>

      <div className="recent-updates">
        <h2>Recent Updates</h2>
        <div className="updates">
          <div className="update">
            <div className="avatar">
              <img src={Profile} alt="profile" />
            </div>
            <div className="message">
              <p><b>Indra Khatiwada</b> received a million dollar</p>
              <small className="text-muted">2 Minutes Ago</small>

            </div>
          </div>
          <div className="update">
            <div className="avatar">
              <img src={Profile} alt="profile" />
            </div>
            <div className="message">
              <p><b>Ramesh Khulal</b> received a flying drone</p>
              <small className="text-muted">2 Minutes Ago</small>

            </div>
          </div>
          <div className="update">
            <div className="avatar">
              <img src={Profile} alt="profile" />
            </div>
            <div className="message">
              <p><b>Sujan Khan</b> received debt from sunrise bank</p>
              <small className="text-muted">2 Minutes Ago</small>

            </div>
          </div>
        </div>
      </div>
      <Salesanalytics />
    </div>

  )
}

export default Right