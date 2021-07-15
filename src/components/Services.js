import React from 'react'
// Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
    return (
        <div className="services" id="services">
            <h1 className="py-5">Xidmətlərim</h1>
            <div className="container">
                <div className="row">

                    <div className="box col-lg-4 col-md-6 col-sm-6">
                        <div className="box-1">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faLaptopCode}/></div>
                            <h3>Web saytlarının hazırlanması</h3>
                            <p>HTML,CSS,JAVASCRIPT,REACTJS</p>
                        </div>
                    </div>

                    

                </div>

            </div>

        </div>
    )
}

export default Services