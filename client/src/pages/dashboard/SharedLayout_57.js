import React from "react";
import { Outlet, Link } from "react-router-dom";
import Wrapper from "../../assets/wrapper/SharedLayout";

import { Navbar_57, BigSidebar_57, SmallSidebar_57 } from "../../components";

const SharedLayout_xx = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar_57 />
        <BigSidebar_57 />
        <div>
          <Navbar_57 />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};
export default SharedLayout_xx;

/*
const SharedLayout_xx = () => {
  return (
    <Wrapper>
      <nav>
        <Link to='add-job'>add job</Link>
        <Link to='all-jobs'>all jobs</Link>
      </nav>
      <Outlet />
    </Wrapper>
  );
};
*/
