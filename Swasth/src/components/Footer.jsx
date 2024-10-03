import logo from "./../assets/swasth-logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../styles/Footer.css";
import "./../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="py-3 footer-bg-color">
        <div className="container">
          <div className="row text-center text-md-start align-items-center p-4">
            <div className="col-12 col-md-4 mb-3 mb-md-0 d-flex justify-content-center justify-content-md-end pb-2">
              <a href="#home">
                <img src={logo} alt="Logo" className="img-fluid" width="75vw" />
              </a>
            </div>

            <div className="col-12 col-md-4 mb-3 mb-md-0">
              <div className="d-flex justify-content-center gap-4">
                <a href="https://play.google.com/store/games?hl=en-IN">
                  <img
                    src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_178,q_auto:eco,dpr_2,f_auto,fl_progressive//image/icons/cult/googleplay.svg"
                    alt="Google Play"
                    className="img-fluid"
                    width="100"
                  />
                </a>

                <a href="https://www.apple.com/in/">
                  <img
                    src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_178,q_auto:eco,dpr_2,f_auto,fl_progressive//image/icons/cult/appstore.svg"
                    alt="App Store"
                    className="img-fluid"
                    width="100"
                  />
                </a>
              </div>

              <div className="d-flex justify-content-center  gap-3 mt-3">
                <a href="https://www.facebook.com/">
                  <img
                    src="https://www.fittr.com/assets/icons/footer/ic_facebook.svg"
                    alt="Facebook"
                    width="30"
                  />
                </a>
                <a href="https://www.instagram.com/">
                  <img
                    src="https://www.fittr.com/assets/icons/footer/ic_instagram.svg"
                    alt="Instagram"
                    width="28"
                  />
                </a>
                <a href="https://www.linkedin.com/feed/">
                  <img
                    src="https://www.fittr.com/assets/icons/footer/ic_linkedin.svg"
                    alt="LinkedIn"
                    width="30"
                  />
                </a>
                <a href="https://x.com/tweeter">
                  <img
                    src="https://www.fittr.com/assets/icons/footer/ic_twitter.svg"
                    alt="Twitter"
                    width="30"
                  />
                </a>
              </div>
            </div>

            <div className="col-12 col-md-4 text-light text-center text-md-start mt-3 mt-md-0">
              <p className="mb-0">Copyright © 2024-2025 All rights reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
