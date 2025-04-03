import React from "react";
import { StyledLayout } from "./style.ts";

export const Header = () => {
  return (
    <StyledLayout>
      <nav>
        <div className="logo"></div>
        <div className="menuBar">
          <a href="">Premlum</a>
          <a href="">Support</a>
          <a href="">Download</a>
          <span>|</span>
          <a href="/signup">회원가입</a>
          <a href="/signin">로그인</a>
        </div>
      </nav>
    </StyledLayout>
  );
};

export const Footer = () => {
  return (
    <StyledLayout>
      <footer>
        <div className="container">
          </div>
          <div className="last-line">
            <div>&#169;2025 test</div>
          </div>
      </footer>
    </StyledLayout>
  );
};
