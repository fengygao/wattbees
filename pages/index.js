import React, { useState,useEffect } from "react";
import Link from "next/link";
import LinkButton from "../components/LinkButton";
import Header from '../components/Header';
import localStorage from "localStorage";
import lang from '../components/lang';

const CircleBg = () => (
  <>
    <div className="circlebg1">
      <img className="img-fluid" src="img/circlebg19.svg" alt="img" />
    </div>
    <div className="circlebg2">
      <img className="img-fluid" src="img/circlebg20.svg" alt="img" />
    </div>
    <div className="circlebg3">
      <img className="img-fluid" src="img/circlebg21.svg" alt="img" />
    </div>
  </>
);

// const Banner = ({
//   img1 = "img/bannerimg01.png",
//   img2 = "img/bannerimg02.png",
//   img3 = "img/bannerimg03.png",
//   title = "Building a better ",
//   title2 = "pragmatic space",
//   tag = "with the world's top technology integrate estate services",
//   cta1 = "Contact Us",
//   cta1path = "/contact-us",
//   cta2 = "",
// }) => (
//   <div className="bannerSec">
//     <div className="bannerImg-sm d-sm-block d-md-none">
//       <img src="img/patterbannerimg.png" alt="img" />
//     </div>
//     <div className="container">
//       <div className="row">
//         <div className="col-md-12">
//           <div className="bannercntSec">
//             <div className="bannerImg">
//               {/* <img class="img-fluid d-sm-block d-md-none" src="img/patterbannerimg.png" alt="img"> */}
//               <div className="bannerimg01 d-none d-md-block">
//                 <img className="img-fluid" src={img1} alt="img" />
//               </div>
//               <div className="bannerimg02 d-none d-md-block">
//                 <img className="img-fluid" src={img2} alt="img" />
//               </div>
//               <div className="bannerimg03 d-none d-md-block">
//                 <img className="img-fluid" src={img3} alt="img" />
//               </div>
//               <div className="bannerbtn 1d-block d-none d-sm-none d-md-block d-xl-none mt-0 mt-md-4">
//                 <Link href={cta1path} passHref>
//                   <LinkButton>{cta1}</LinkButton>
//                 </Link>
//                 {cta2 && <button className="btn btndarkblue">{cta2}</button>}
//               </div>
//             </div>
//             <div className="bannercnt">
//               <h2 className="textwhitecolor">
//                 {title}
//                 <span className="textbluecolor">{title2}</span>
//               </h2>
//               <p className="textgraycolor">{tag}</p>
//               <div className="bannerbtn d-block d-sm-block d-md-none d-lg-none d-xl-block">
//                 <Link href={cta1path} passHref>
//                   <LinkButton>{cta1}</LinkButton>
//                 </Link>
//                 {cta2 && <button className="btn btndarkblue">{cta2}</button>}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );

const Banner2 = ({ text, img, langu }) => (
  <div className="bannerSec bannerSecHome3">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="bannercntSec">
            <div className="bannercnt" >
              <h2 className="textwhitecolor">
                {text || lang.HomeBanner1.leftText1[langu]}
                {langu=='English' && !text && <span className="textbluecolor">{lang.HomeBanner1.leftText2[langu]}</span>}
              </h2>
            </div>
            <div className="bannerimg mb-4 mb-md-4 mb-lg-4 mb-xl-0">
              <img
                className="img-fluid d-none d-xl-block"
                src={img || "img/btc-mining11.png"}
                alt="img"
              />
              <img
                className="img-fluid d-none d-md-block d-lg-block d-xl-none"
                src={img || "img/btc-mining11.png"}
                alt="img"
              />
              <img
                className="img-fluid d-md-none "
                src={img || "img/btc-mining11.png"}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function Home(props) {
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
    useEffect(() => {    
      console.log(' use effect')
  }, [])
    const getChildStr = (msg) => {  // header组件事件返回的值     
      setN(msg)
      console.log(langu,msg)
    };
  return (
    <>
      <CircleBg />
      {/* <Banner /> */}
      {/* <Header getChildStr={getChildStr} /> */}
      <Banner2 langu={langu}/>
      <div className="about-sec">
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-12">
              <h2 className="headingWh mb-4 mb-sm-4 mb-md-4 mb-xl-5">
              {lang.HomeBanner2.titleText[langu]}
              </h2>
            </div>
          </div>
          <div className="row mb-3 mb-lg-5">
            <div className="col-md-6 col-lg-6 col-xl-4">
              <div className="createsell">
                <div className="createsellHead">
                  <div className="creatsellicon">
                    <img src="img/power.png" alt="img" width="50px" />
                  </div>
                  <h3 className="textwhitecolor">
                  {lang.HomeBanner2.firstAbove[langu]}
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-4">
              <div className="createsell">
                <div className="createsellHead">
                  <div className="creatsellicon">
                    <img src="img/support.png" alt="img" width="50px" />
                  </div>
                  <h3 className="textwhitecolor">
                  {lang.HomeBanner2.secondAbove[langu]}
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-4">
              <div className="createsell">
                <div className="createsellHead">
                  <div className="creatsellicon">
                    <img src="img/repair.png" alt="img" width="50px" />
                  </div>
                  <h3 className="textwhitecolor">
                  {lang.HomeBanner2.thirdAbove[langu]}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3 mb-lg-5">
            <div className="col-md-6 col-lg-6 col-xl-4">
              <div className="createsell">
                <div className="createsellHead">
                  <div className="creatsellicon">
                    <img src="img/setupwalleticon.svg" alt="img" />
                  </div>
                  <h3 className="textwhitecolor">
                  {lang.HomeBanner2.firstBelow[langu]}
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-4">
              <div className="createsell">
                <div className="createsellHead">
                  <div className="creatsellicon">
                    <img src="img/collectionicon.svg" alt="img" />
                  </div>
                  <h3 className="textwhitecolor">
                  {lang.HomeBanner2.secondBelow[langu]}
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-4">
              <div className="createsell">
                <div className="createsellHead">
                  <div className="creatsellicon">
                    <img src="img/addyouricon.svg" alt="img" />
                  </div>
                  <h3 className="textwhitecolor">
                  {lang.HomeBanner2.thirdBelow[langu]}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Banner2
        img="img/onsite.png"
        text={lang.HomeBanner3.leftText1[langu]}
        langu={langu}
      />
      <div className="about-sec">
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-12">
              <h2 className="headingWh mb-4 mb-sm-4 mb-md-4 mb-xl-5">
              {lang.HomeBanner4.titleText[langu]}
              </h2>
            </div>
          </div>
          <div className="row mb-3 mb-lg-5">
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="createsell">
                <div className="createsellHead">
                  <div className="creatsellicon">
                    <img src="img/power.png" alt="img" width="50px" />
                  </div>
                  <h3 className="textwhitecolor">
                    {lang.HomeBanner4.firstAbove[langu]}
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="createsell">
                <div className="createsellHead">
                  <div className="creatsellicon">
                    <img src="img/support.png" alt="img" width="50px" />
                  </div>
                  <h3 className="textwhitecolor">
                  {lang.HomeBanner4.secondAbove[langu]}
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="createsell">
                <div className="createsellHead">
                  <div className="creatsellicon">
                    <img src="img/repair.png" alt="img" width="50px" />
                  </div>
                  <h3 className="textwhitecolor">
                  {lang.HomeBanner4.thirdAbove[langu]}
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="createsell">
                <div className="createsellHead">
                  <div className="creatsellicon">
                    <img src="img/setupwalleticon.svg" alt="img" />
                  </div>
                  <h3 className="textwhitecolor">{lang.HomeBanner4.fourthAbove[langu]}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
