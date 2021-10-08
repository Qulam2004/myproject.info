import React from 'react'
import emailjs from 'emailjs-com';

const ContactMe = () => {

    const sendEmail = (e) => {
        e.preventDefault();


        const serviceID = "service_z84589p"
        const templateID = "template_59flb12"
        const userID = "user_eKY2vKt2Urx8DgxcEHVxr"
           
        emailjs.sendForm(serviceID,templateID, e.target, userID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }




    return (
        <div id="contactme" className="contacts">
            <div className="text-center">
                <h1>Bizimlə əlaqə</h1>
                <p>Zəhmət olmasa, müraciətiniz və özünüzlə bağlı məlumatları tam dəqiq şəkildə doldurun. Mümkün olduqca sizinlə tez bir zamanda əlaqə saxlanılacaq!</p>
            </div>
            <div className="container">
                <form onSubmit={sendEmail}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            <div className="text-center">
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Adınızı daxil edin"
                                name="name"
                                
                                />
                                <div className="line"></div>
                            </div>

                            <div className="text-center">
                                <input
                                type="email"
                                className="form-control"
                                placeholder="Emailinizi daxil edin"
                                name="email"
                                
                                />
                                <div className="line"></div>
                            </div>

                            <div className="text-center">
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Əlaqə nömrənizi daxil edin"
                                name="phone"
                                
                                />
                                <div className="line"></div>
                            </div>

                            <div className="text-center">
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Mövzu nədir?"
                                name="subject"
                                
                                />
                                <div className="line"></div>
                            </div>
                        </div>

                        <div className="col-md-6 col-xs-12">
                            <div className="text-center">
                                <textarea
                                type="text"
                                className="form-control"
                                placeholder="Müraciətinizlə bağlı qısa qeyd"
                                name="description"
                                >
                                    
                                </textarea>
                                <div className="line"></div>
                            </div>
                            <button className="button contact-btn" type="submit">Bizimlə əlaqə</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactMe
