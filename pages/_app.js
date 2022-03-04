import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import Layout from '../components/layout'
import React, { useState,useEffect } from "react";
import localStorage from "localStorage";

export default function MyApp({ Component, pageProps }) { 
  const getOtherStr = (msg) => {          
    console.log(msg)
    pageProps.langu = msg
    location.reload()
  };
  return (
    <Layout getOtherStr={getOtherStr}>
      <Component {...pageProps}/>
    </Layout>
  )
}
