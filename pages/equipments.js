import React, { useState,useEffect } from "react";
import localStorage from "localStorage";
import lang from '../components/lang';

  export default function Achievements(props) {
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
        <div className="row mt-5">
          <div className="col-md-12">
            <h2 className="headingWh mb-4 mb-sm-4 mb-md-4 mb-xl-5">
            {lang.EquipmentsBanner1.titleText[langu]}
            </h2>
          </div>
        </div>
        <div className="row mb-3 mb-lg-5">
          <div className="col-md-6 col-lg-6 col-xl-4">
            <div className="creators mt-5">
              <div className="creatorImg">
                <img
                  className="img-fluid"
                  src="img/antminer.png"
                  alt="img"
                />
              </div>
              <div className="creatorsText text-center">
                <h2 className="textwhitecolor">{lang.EquipmentsBanner1.firstAboveName[langu]}</h2>
                <h3 className="textbluecolor">{lang.EquipmentsBanner1.firstAboveInfo[langu]}</h3>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-4">
            <div className="creators mt-5">
              <div className="creatorImg">
                <img
                  className="img-fluid"
                  src="img/wahtsminer.png"
                  alt="img"
                />
              </div>
              <div className="creatorsText text-center">
                <h2 className="textwhitecolor">{lang.EquipmentsBanner1.secondAboveName[langu]}</h2>
                <h3 className="textbluecolor">{lang.EquipmentsBanner1.secondAboveInfo[langu]}</h3>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-4">
            <div className="creators mt-5">
              <div className="creatorImg">
                <img
                  className="img-fluid"
                  src="img/avalongminer.png"
                  alt="img"
                />
              </div>
              <div className="creatorsText text-center">
                <h2 className="textwhitecolor">{lang.EquipmentsBanner1.thirdAboveName[langu]}</h2>
                <h3 className="textbluecolor">{lang.EquipmentsBanner1.thirdAboveInfo[langu]}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12">
            <h2 className="headingWh mb-4 mb-sm-4 mb-md-4 mb-xl-5">
            {lang.EquipmentsBanner2.leftText1[langu]}
            </h2>
          </div>
        </div>
      </div>
    </div>
    </>
   );
  }
