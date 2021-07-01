import React from 'react'
import './header.css'
const Header = () => {
    return (
        <div className="header">
           <div className="headerTitles">
               <span className="headerTitleSm">Readt & Node</span>
               <span className="headerTitleLg">Blog</span>
           </div>
           <img className="headerImg"
            src="https://www.azbibak.com/wp-content/uploads/2018/01/turkmenbasi-tabiat-parki.jpg" 
           alt="" />
        </div>
    )
}

export default Header
