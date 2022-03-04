import { useEffect,useState } from "react";
import Header from './Header';
import Footer from './Footer';
import localStorage from "localStorage";

export default function Layout({ children,getOtherStr }) {
  useEffect( () => { document.querySelector("body").classList.add("themebgcolor") } );
  let langStr = localStorage.getItem('language')  
  if(langStr === 'English'|| !langStr){     
    langStr = 'English'
    localStorage.setItem('language','English')
  }else{ 
    langStr = 'Chinese'
    localStorage.setItem('language','Chinese')
  }
  const [langu, setN] = useState(langStr)
  // header中英文切换
  const getChildStr = (msg) => {  // header组件事件返回的值     
    setN(msg)
    // console.log('Chinese',msg)
    getOtherStr(msg)
  };
  
  return (
    <>
      <Header getChildStr={getChildStr}/>
      <div>{children}</div>
      <Footer langu={langu}/>
    </>
  );
}
