import React from 'react'
import Qulam from '../qq.jpg'

function About() {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="profile-edge mb-5">
                        <img className="profile" src={Qulam} alt="Qulamzade Qulam..."></img>
                    </div>
                </div>

                <div className="about-text col-lg-6 col-xm-12">
                    <h1>Haqqımda</h1>
                    <p className="mt-5">Mən Qulamzadə Qulam mənim 17 yaşım var,mən 123№ tam orta  məktəbi bitirmişəm və 18№ bakı peşə 
                     liseyi "Aşpaz" üzrə oxuyuram,IT brains training center kursunu "Müasir veb proqramlaşdırma"
                     üzrə sertifikat və fərqlənmə ilə bitirdim.Ümid edirəm ki inşallah yaxşı bir web proqramçı olacam.</p>
                </div>
            </div>
        </div>
    )
}

export default About
