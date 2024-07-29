import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Main Page</title>
        {/* <link rel="canonical" href="https://www.test.com/" /> */}
      </Helmet>
      <div className="head">
        <nav role="navigation" id="gnb" aria-label="메인 메뉴">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </nav>
      </div>
    </>
  );
};
export default Home;
