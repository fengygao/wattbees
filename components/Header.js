import { useState } from 'react';
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import lang from './lang';
import localStorage from "localStorage";
const SearchBar = () => (
  <div className="searchform d-none d-md-inline-flex">
    {/* <form>
      <input
        type="text"
        name="SearchItem"
        placeholder="Search items, collections and creators"
      />
      <button>
        <img src="img/searchicon.svg" alt="img" />
      </button>
    </form> */}
  </div>
);

const Header = ({getChildStr}) => {
    const [expand, setExpand] = useState(false);
    let langStr = localStorage.getItem('language')  
    console.log(langStr)
    if(langStr === 'Chinese'){     
      langStr = 'Chinese'
    }else{
      langStr = 'English'
    }
  const [langu, setN] = useState(langStr);// 函数式组件 类似state的声明并设置初始值 第一个参数为nane,第二个为function
    const currentUser = false;
    const router = useRouter();
    // console.log(props) 传值
    // 英文切换
    const onEnglish = () => { 
      localStorage.setItem('language','English')         
      setN('English')
      getChildStr('English')
      console.log('English',langu)

    };
    // 中文切换
    const onChinese = () => {     
      setN('Chinese')
      getChildStr('Chinese')
      console.log('Chinese',langu)
      localStorage.setItem('language','Chinese') 
    };
  return (
    <>
      <Head>
        <title>Wattbees</title>
        <meta charSet="utf-8" />
        <meta name="Googlebot-News" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
        <meta name="robots" content="noimageindex" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar collapseOnSelect expand="lg" onToggle={expanded => setExpand(expanded)}>
        <Container>
          <Link href="/" passHref>
            <Navbar.Brand>
              <img
                className="img-fluid"
                src="img/logo.png"
                alt="img"
                width="180px"
              />
            </Navbar.Brand>
          </Link>

          {/* <SearchBar /> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <div className="hamburger-toggle">
              <div className={`hamburger ${expand ? 'active' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </Navbar.Toggle>
          {/* <button
                  className="navbar-toggler collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbar-content"
                >
                  <div className="hamburger-toggle">
                    <div className="hamburger">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </button> */}
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              {lang.menuTop[langu].map((menu, i) => (
                <Link href={menu.path} passHref key={i}>
                  <Nav.Link
                    active={router.pathname === menu.path}
                  >
                    {menu.label}
                  </Nav.Link>
                </Link>
              ))}
            </Nav>
            <DropdownButton
              variant="outline-secondary"
              title={langu}
              id="input-group-dropdown-1"

            >
              <Dropdown.Item href="#" onClick={onEnglish}>
                <img
                className="img-fluid"
                src="img/iconChinese.png"
                alt="img"
                width="28px"
              /> English</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#" onClick={onChinese}>
                <img
                className="img-fluid"
                src="img/iconEnglish.png"
                alt="img"
                width="28px"
              /> Chinese</Dropdown.Item>
            </DropdownButton>
          </Navbar.Collapse>
          {currentUser && (
            <div className="loginWallet d-none d-md-inline-flex">
              <div className="dropdown me-md-3 me-lg-2 me-xl-1 me-xxl-3">
                <a
                  className="btn dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src="img/usericon.svg" alt="img" />
                </a>

                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="signin.html">
                      Sign in
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="signup.html">
                      Sign up
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Forgot password
                    </a>
                  </li>
                </ul>
              </div>

              <a className="btn" href="wallet.html">
                <img src="img/walleticon.svg" alt="img" />
              </a>
            </div>
          )}
        </Container>
      </Navbar>
    </>
  );
  
};

export default Header;
