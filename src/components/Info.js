import React from 'react';

export default function NavBar(){
    return(
        <div className = "Info">
            <p className='name'>Nicole P. Satiembre </p>
            <p className ="jobTitle">Front-end Developer</p>
         
            
            <a href = "https://github.com/LeNikki" className='website'>clickMe.com</a>
            <a href= "mailto: abc@example.com" className = "email">
                <button>
                <i class="fa fa-envelope" aria-hidden="true"></i> Email</button>
            </a>
        </div>
    )
}