import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p style={{marginBottom:"25px"}}>Bakı şəhəri,Xəzər rayonu,Mərdəkan qəs.</p>
            </div>

            <div className="d-flex">
              <a href="tel:0506299072">(+994)50-629-90-72</a>
            </div>

            <div className="d-flex">
              <a href="mailto:qqulamov96@gmail.com">qqulamov96@gmail.com</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav">ANA SƏHİFƏ</a>
                <br></br>
                <a className="footer-nav">HAQQIMDA</a>
                <br>
                </br>
                <a className="footer-nav">XİDMƏTLƏR</a>
                <br>
                </br>
                <a className="footer-nav">TƏCRÜBƏLƏR</a>
                <br>
                </br>
                <a className="footer-nav" href="https://github.com/Qulam2004">PROYEKTLƏRİM</a>
                <br>
                </br>
                <a className="footer-nav">BİZİMLƏ ƏLAQƏ</a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
              <p className="pt-3 text-center">
                  Copyright &copy; {new Date().getFullYear()}&nbsp; || Müəllif huquqları Qulamzade. tərəfindən qorunur. ||
              </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Footer;
