import React from "react";
import { useAppContext } from "../context/appContext_57";
import NavLinks from "./NavLinks_57";
import Logo from "./Logo_57";
import Wrapper from "../assets/wrapper/BigSidebar_57";

const BigSidebar_xx = () => {
  const { showSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container " : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar_xx;
