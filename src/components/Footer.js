import React, { Fragment } from 'react'
import Clock from 'react-live-clock';

const Footer = () => {
    return (
        <Fragment>
            {/* Local Time */}
            <div id='clock'>
                <Clock format={'HH:mm:ss'} ticking={true}/>
            </div>

            <hr></hr>

            {/* Footer with hyperlinked / respsonive icons */}
            <footer> 
                <div className="media">
                    <a href= "https://www.linkedin.com/in/justin-hoang-56a46b175/" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin fa-2x"></i></a>
                    <a href= "https://m.me/ScorpyG" target="_blank" rel="noreferrer">
                        <i class="fab fa-facebook-messenger fa-2x"></i></a>
                    <a href="https://github.com/ScorpyG" target="_blank" rel="noreferrer">
                        <i className="fab fa-github-square fa-2x"></i></a>
                </div>
                <p style={{fontSize:'14px', letterSpacing:'0px'}}><b>&copy; <Clock format={'YYYY'}/> JUSTIN HOANG</b></p>
            </footer>
        </Fragment>
    )
}

export default Footer;