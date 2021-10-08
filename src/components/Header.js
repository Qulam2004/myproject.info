import React from 'react'
import Typed from 'react-typed'

function Header() {
    return (
        <div id="home" className="header">
            <div className="header-info">
                <h1>Qulamzadə Qulamın Rəsmi veb səhifəsi</h1>
                <Typed
                    className="typed-text"
                    strings={[
                        'Front-End Junior',
                        'Web Proqramçı',
                        'HTML,CSS,JAVASCRIPT,REACT'
                    ]}
                    typeSpeed={40}
                    backSpeed={30}
                    loop >

                </Typed>
            </div>
        </div>
    )
}

export default Header
