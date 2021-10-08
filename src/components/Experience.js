import React from 'react'

const Experience = () => {
    return (
        <div id="experience" className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>Təcrübələr</h1>
            </div>

            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content text">
                        <h3>2013-2021</h3>  
                        <p>123№ tam orta məktəbini bitirdim.</p>
                    </div>
                </div>
            </div>


            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2018</h3>
                        <p>18№ Bakı Peşə Liseyində "Aşpaz" üzrə 3illik oxuyuram.</p>
                    </div>
                </div>
            </div>

            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content text">
                        <h3>2021</h3>
                        <p>IT Brains Training Center kursunda "Müasir web proqramlaşdırma" üzrə dərs aldım.</p>
                    </div>
                </div>
            </div>

            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>Coming soon</h3>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Experience
