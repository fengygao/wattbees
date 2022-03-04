import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";
import localStorage from "localStorage";
import lang from "../components/lang";

export default function ContactUs(props) {
  const router = useRouter();
  const { success } = router.query;
  let langStr = localStorage.getItem("language");
  if(langStr === 'Chinese'){     
    langStr = 'Chinese'
  }else{
    langStr = 'English'
  }
  const [langu, setN] = useState(langStr);
  useEffect(() => {
    // 函数式组件类似生命周期api，第二个参数为空[]模拟 conponentDidMount();为[n]模拟 conponentDidUpdate();return一个函数 模拟componentWillUnMount()
    let langStr2 = localStorage.getItem("language");
    setN(langStr2);
  }, [langu]);

  useEffect(() => {  
    if (langStr) {
      document.getElementById("formName").setAttribute("placeholder",lang.ContactUsBanner1.LeftValName[langu]);
      document.getElementById("formEmail").setAttribute("placeholder",lang.ContactUsBanner1.LeftValEMail[langu]);
      document.getElementById("formSubject").setAttribute("placeholder",lang.ContactUsBanner1.LeftValSubject[langu]);
      document.getElementById("formMessage").setAttribute("placeholder",lang.ContactUsBanner1.LeftValMsg[langu]);
    }
  });
  return (
    <>
      <div className="contactsec">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="sign-from contact-form">
                <h2 className="textwhitecolor contact-head">
                  {lang.ContactUsBanner1.leftTitle[langu]}
                </h2>
                <form action="/api/hello" method="post">
                  <div className="row">
                  <div className="col-md-8">
                    <div className="input-box">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="form-input"
                        id="formName"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="input-box">
                      <input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        className="form-input"
                        id="formEmail"
                      />
                    </div>
                  </div>
                </div>
                <div className="input-box">
                  <input
                    type="text"
                    name="sub"
                    placeholder="Subject of message"
                    className="form-input"
                    id="formSubject"
                  />
                </div>
                <div className="input-box">
                  <textarea
                    name="message"
                    className="form-input"
                    placeholder="Enter the message"
                    defaultValue={""}
                    id="formMessage"
                  />
                </div>
                  <div className="contact-submit">
                    {success === "" ? (
                      <p style={{ color: "#fff" }}>Message sent!</p>
                    ) : (
                      <Button className="btnlightblue">
                        {lang.ContactUsBanner1.LeftBtnSend[langu]}
                      </Button>
                    )}
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about-crypton">
                <h2 className="textwhitecolor contact-head">
                  {lang.ContactUsBanner1.rightTitle[langu]}
                  <span className="textbluecolor">Watt</span>Bees
                </h2>
                <p>{lang.ContactUsBanner1.rightContent[langu]}</p>
                <div className="contact-details">
                  <ul>
                    <li>
                      <a href="#" className="textwhitecolor">
                        <svg
                          width={13}
                          height={10}
                          viewBox="0 0 13 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.625 0C11.1223 0 11.5992 0.197544 11.9508 0.549175C12.3025 0.900805 12.5 1.37772 12.5 1.875V7.875C12.5 8.37228 12.3025 8.84919 11.9508 9.20082C11.5992 9.55246 11.1223 9.75 10.625 9.75H2.375C1.87772 9.75 1.40081 9.55246 1.04917 9.20082C0.697544 8.84919 0.5 8.37228 0.5 7.875V1.875C0.5 1.37772 0.697544 0.900805 1.04917 0.549175C1.40081 0.197544 1.87772 0 2.375 0H10.625ZM11.75 2.97075L6.6905 5.94825C6.64267 5.97633 6.5892 5.99346 6.53395 5.99839C6.4787 6.00331 6.42305 5.99592 6.371 5.97675L6.3095 5.94825L1.25 2.97225V7.875C1.25 8.17337 1.36853 8.45952 1.5795 8.6705C1.79048 8.88147 2.07663 9 2.375 9H10.625C10.9234 9 11.2095 8.88147 11.4205 8.6705C11.6315 8.45952 11.75 8.17337 11.75 7.875V2.97075ZM10.625 0.75H2.375C2.07663 0.75 1.79048 0.868526 1.5795 1.0795C1.36853 1.29048 1.25 1.57663 1.25 1.875V2.1015L6.5 5.19L11.75 2.1V1.875C11.75 1.57663 11.6315 1.29048 11.4205 1.0795C11.2095 0.868526 10.9234 0.75 10.625 0.75Z"
                            fill="white"
                          />
                        </svg>
                        info@wattbees.com
                      </a>
                    </li>
                    <li>
                      <a href="#" className="textwhitecolor">
                        <svg
                          width={11}
                          height={13}
                          viewBox="0 0 11 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.5 0C8.53769 0 11 2.39526 11 5.35023C11 7.61105 9.36692 10.0749 6.14308 12.7681C5.96382 12.9179 5.73526 13.0002 5.49894 13C5.26262 12.9998 5.03422 12.9171 4.85523 12.767L4.642 12.587C1.56087 9.96406 0 7.56057 0 5.35023C0 2.39526 2.46231 0 5.5 0ZM5.5 0.823113C4.26572 0.823113 3.082 1.30008 2.20923 2.14908C1.33647 2.99808 0.846154 4.14957 0.846154 5.35023C0.846154 7.27193 2.28349 9.4861 5.19764 11.9664L5.40805 12.1437C5.43364 12.1651 5.46626 12.1768 5.5 12.1768C5.53374 12.1768 5.56637 12.1651 5.59195 12.1437C8.64713 9.59091 10.1538 7.31748 10.1538 5.35023C10.1538 4.75572 10.0335 4.16704 9.79959 3.61778C9.56572 3.06853 9.22292 2.56946 8.79077 2.14908C8.35862 1.72869 7.84558 1.39523 7.28095 1.16772C6.71632 0.940211 6.11115 0.823113 5.5 0.823113ZM5.5 3.29245C6.06104 3.29245 6.59909 3.50925 6.9958 3.89516C7.39252 4.28107 7.61539 4.80448 7.61539 5.35023C7.61539 5.89599 7.39252 6.4194 6.9958 6.80531C6.59909 7.19122 6.06104 7.40802 5.5 7.40802C4.93897 7.40802 4.40091 7.19122 4.0042 6.80531C3.60749 6.4194 3.38462 5.89599 3.38462 5.35023C3.38462 4.80448 3.60749 4.28107 4.0042 3.89516C4.40091 3.50925 4.93897 3.29245 5.5 3.29245ZM5.5 4.11557C5.16338 4.11557 4.84055 4.24565 4.60252 4.47719C4.36449 4.70874 4.23077 5.02278 4.23077 5.35023C4.23077 5.67769 4.36449 5.99173 4.60252 6.22328C4.84055 6.45482 5.16338 6.5849 5.5 6.5849C5.83662 6.5849 6.15945 6.45482 6.39748 6.22328C6.63551 5.99173 6.76923 5.67769 6.76923 5.35023C6.76923 5.02278 6.63551 4.70874 6.39748 4.47719C6.15945 4.24565 5.83662 4.11557 5.5 4.11557Z"
                            fill="white"
                          />
                        </svg>
                        1605 High Tech Way, Colorado Spring, CO 80907
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <div className="joincommunity mt-3">
                <ul>
                  <li>
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="img/discordbutton.svg"
                        alt="img"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="img/twitter.svg"
                        alt="img"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="img/insta.svg"
                        alt="img"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="img/reditbutton.svg"
                        alt="img"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="img/youtube.svg"
                        alt="img"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="img/emailbutton.svg"
                        alt="img"
                      />
                    </a>
                  </li>
                </ul>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
