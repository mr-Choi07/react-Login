import React from "react";
import {Header, Footer} from "../Layout/index.tsx"
import { StyledHome } from "./style.ts";

export const Home = () => {
  return (
    <StyledHome>
        <Header />
          <section>
            <div>
              <div className="headline">
                <div className="first-headline">test</div>
                <div>server</div>
              </div>
              <div className="sub_line">
                test is very very very good.
              </div>
              <div className="button-area"></div>
            </div>
          </section>
          <Footer />
    </StyledHome>
  );
};
