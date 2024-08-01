import { Helmet } from "react-helmet-async";
// import "";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Main Page</title>
        {/* <link rel="canonical" href="https://www.test.com/" /> */}
      </Helmet>
      <div className="main-container">
        <nav
          className="navbar"
          role="navigation"
          id="gnb"
          aria-label="메인 메뉴"
        >
          <div className="navbar-logo">
            <i className="fa-soild"></i>
            {/* <img /> */}
            <a>HYONWOO CAR</a>
          </div>
          <ul className="navbar__menu">
            <li>
              <a>메뉴1</a>
            </li>
            <li>
              <a>메뉴2</a>
            </li>
            <li>
              <a>메뉴3</a>
            </li>
            <li>
              <a>메뉴4</a>
            </li>
          </ul>
        </nav>
      </div>
      <main className="container">
        <div></div>
      </main>
    </>
  );
};
export default Home;
