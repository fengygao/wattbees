import Link from "next/link";
import routes from "./routes";
import React, { useState,useEffect } from "react";
import localStorage from "localStorage";
import lang from './lang';

  export default function Footer(props) {
      let langStr = localStorage.getItem('language')  
      console.log(props.langu,langStr)
      if(langStr === 'Chinese'){     
        langStr = 'Chinese'
      }else{
        langStr = 'English'
      }
    const [langu, setN] = useState(props.langu);
    useEffect(()=>{ // 函数式组件类似生命周期api，第二个参数为空[]模拟 conponentDidMount();为[n]模拟 conponentDidUpdate();return一个函数 模拟componentWillUnMount()
      let langStr2 = localStorage.getItem('language')
      setN(langStr2)
      console.log(langu)
    },[langu])
  return (
    <>
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-xl-4">
          <div className="footsec">
            <div className="footlogocntSec">
              <a href="#" className="footlogo">
                <img
                  className="img-fluid"
                  src="img/logo.png"
                  alt="img"
                  width="100%"
                />
              </a>
              <p>
              {lang.footerInfo.leftContent[langu]}
              </p>
            </div>
            {/* <div className="joincommunity">
              <h3>Join the Community</h3>
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
                    <img className="img-fluid" src="img/insta.svg" alt="img" />
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
        <div className="col-lg-12 col-xl-8 d-none d-md-flex justify-content-between">
          <div className="footlinks">
            {/* <h2>My account</h2>
            <ul>
              <li>
                <a href="#">Profile</a>
              </li>
              <li>
                <a href="#">Favorites</a>
              </li>
              <li>
                <a href="#">My collection</a>
              </li>
              <li>
                <a href="#">Settings</a>
              </li>
            </ul> */}
          </div>
          <div className="footlinks">
            {/* <h2>Discover</h2>
            <ul>
              <li>
                <a href="#">Art</a>
              </li>
              <li>
                <a href="#">Phorography</a>
              </li>
              <li>
                <a href="#">Domain Names</a>
              </li>
              <li>
                <a href="#">Memes</a>
              </li>
              <li>
                <a href="#">Virtual Worlds</a>
              </li>
              <li>
                <a href="#">Trading Cards</a>
              </li>
            </ul> */}
          </div>
          <div className="footlinks">
            <h2>{lang.footerInfo.rightTitle[langu]}</h2>
            <ul>       
              {lang.menuTop[langu].map((route, i) => (    
                <li key={i}>
                  <Link href={route.path}>{route.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  </>
  );
};