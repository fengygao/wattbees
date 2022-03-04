
import React, { useState,useEffect } from "react";
import localStorage from "localStorage";
import lang from '../components/lang';

export default function About(props) {
  console.log(props)
    let langStr = localStorage.getItem('language')  
    if(!langStr){    
      langStr = 'English'
    }
    const [langu, setN] = useState(langStr);
    useEffect(()=>{ // 函数式组件类似生命周期api，第二个参数为空[]模拟 conponentDidMount();为[n]模拟 conponentDidUpdate();return一个函数 模拟componentWillUnMount()
      let langStr2 = localStorage.getItem('language')
      setN(langStr2)
    },[langu])
    return (
      <>
    <div className="about-sec">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="about-content">
              <h2 className="textwhitecolor abouth">
              {lang.AboutBanner1.leftText1[langu]}
              </h2>
              <p>
              {lang.AboutBanner1.leftText2[langu]}
              </p>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="about-img">
              <img src="img/about-img1.png" alt="img" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12">
            <h2 className="headingWh mb-4 mb-sm-4 mb-md-4 mb-xl-5">{lang.AboutBanner2.titleText[langu]}</h2>
          </div>
        </div>
        <div className="row mb-3 mb-lg-5">
          <div className="col-md-6 col-lg-6 col-xl-4">
            <div className="creators mt-5">
              <div className="creatorIcon">
                <img className="img-fluid" src="img/person.png" alt="imig" />
              </div>
              <div className="creatorsText text-center">
                <h2 className="textwhitecolor">{lang.AboutBanner2.firstAboveName[langu]}</h2>
                <h3 className="textbluecolor">{lang.AboutBanner2.firstAboveInfo[langu]}</h3>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-4">
            <div className="creators mt-5">
              <div className="creatorIcon">
                <img className="img-fluid" src="img/person.png" alt="imig" />
              </div>
              <div className="creatorsText text-center">
                <h2 className="textwhitecolor">{lang.AboutBanner2.secondAboveName[langu]}</h2>
                <h3 className="textbluecolor">{lang.AboutBanner2.secondAboveInfo[langu]}</h3>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-4">
            <div className="creators mt-5">
              <div className="creatorIcon">
                <img className="img-fluid" src="img/person.png" alt="imig" />
              </div>
              <div className="creatorsText text-center">
                <h2 className="textwhitecolor">{lang.AboutBanner2.thirdAboveName[langu]}</h2>
                <h3 className="textbluecolor">{lang.AboutBanner2.thirdAboveName[langu]}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-3 mb-lg-5">
          <div className="col-md-6 col-lg-6 col-xl-4">
            <div className="creators mt-5">
              <div className="creatorIcon">
                <img className="img-fluid" src="img/person.png" alt="imig" />
              </div>
              <div className="creatorsText text-center">
                <h2 className="textwhitecolor">{lang.AboutBanner2.firstBelowName[langu]}</h2>
                <h3 className="textbluecolor">{lang.AboutBanner2.firstBelowName[langu]}</h3>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-4">
            <div className="creators mt-5">
              <div className="creatorIcon">
                <img className="img-fluid" src="img/person.png" alt="imig" />
              </div>
              <div className="creatorsText text-center">
                <h2 className="textwhitecolor">{lang.AboutBanner2.secondBelowName[langu]}</h2>
                <h3 className="textbluecolor">{lang.AboutBanner2.secondBelowName[langu]}</h3>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-4">
            <div className="creators mt-5">
              <div className="creatorIcon">
                <img className="img-fluid" src="img/person.png" alt="imig" />
              </div>
              <div className="creatorsText text-center">
                <h2 className="textwhitecolor">{lang.AboutBanner2.thirdBelowName[langu]}</h2>
                <h3 className="textbluecolor">{lang.AboutBanner2.thirdBelowName[langu]}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
   );
  }

