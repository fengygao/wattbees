import Link from "next/link";

export default function Custom404() {
  return (
    <div className="newsletter-banner mt-2 mt-lg-5 pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="bannerImg d-xl-flex">
              <img
                className="img-fluid d-sm-block d-md-none mb-4"
                src="img/patterbannerimg.png"
                alt="img"
              />
              <div className="bannerimg01 d-none d-xl-block">
                <img
                  className="img-fluid"
                  src="img/bannerimg01.png"
                  alt="img"
                />
              </div>
              <div className="bannerimg02 d-none d-xl-block">
                <img
                  className="img-fluid"
                  src="img/bannerimg02.png"
                  alt="img"
                />
              </div>
              <div className="bannerimg03 d-none d-xl-block">
                <img
                  className="img-fluid"
                  src="img/bannerimg03.png"
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6 mt-3 mt-md-0">
            <div className="newscnt errorcnt">
              <h2 className="textwhitecolor newshead mb-4">
                Sorry! Page not found
              </h2>
              <p className="mb-4">
                Something went wrong, please{" "}
                <span className="textbluecolor">
                  go back to Homepage
                </span>
              </p>
              <div className="sign-btn pt-2">
                <Link href="/" passHref>
                  <button className="btn btnlightblue me-3">
                    Back to Homepage
                  </button>
                </Link>
                {/* <button className="btn btndarkblue">Report a blog</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
