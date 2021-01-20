import React from 'react';

function Nav(props) {
  const { currentTab, setCurrentTab } = props;
    return (
      <React.Fragment>

         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li> <a className={currentTab === "home" }>
                  <span onClick ={() => setCurrentTab("home")}>Home</span></a>
                </li>
                <li> <a className={currentTab === "about" ? "mx-2 navActive" : "mx-2"}>
                  <span onClick ={() => setCurrentTab("about")}>About</span></a>
                </li>
                <li> <a className={currentTab === "signIn" ? "mx-2 navActive" : "mx-2"}>
                  <span onClick ={() => setCurrentTab("signIn")}>Login</span></a>
                </li>
                <li> <a className={currentTab === "posts" ? "mx-2 navActive" : "mx-2"}>
                  <span onClick ={() => setCurrentTab("posts")}>Gratitudes</span></a>
                </li>
                <li> <a className={currentTab === "form" ? "mx-2 navActive" : "mx-2"}>
                  <span onClick ={() => setCurrentTab("form")}>Add new Post</span></a>
                </li>
            </ul>
         </nav>
      </React.Fragment>
    );
  }
  export default Nav;