import React from 'react'
import Typed from 'react-typed'

function Header() {
    return (
        <div className="header">
            <div className="header-info">
                <h1>Qulamzadə Qulamın Rəsmi veb səhifəsi</h1>
                <Typed
                    className="typed-text"
                    strings={[
                        'Front-End Junior',
                        'Web Proqramçı',
                        'HTML,CSS,JAVASCRIPT,REACTJS'
                    ]}
                    typeSpeed={40}
                    backSpeed={30}
                    loop >

                </Typed>

                <a link="#" className='button'>ƏLAQƏ</a>
            </div>
        </div>
    )
}

export default Header
