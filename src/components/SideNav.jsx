import React, { useState } from "react";
import { ReactComponent as ArrowRight } from '../img/arrow-right.svg';

export default function SideNav({
  SidenavTitle, SidenavData
}) {
  const [MenuExpanded, SetMenuExpanded] = useState(false);

  const handleMenuExpanded = (e) => {
    SetMenuExpanded(!MenuExpanded);
  }
  return (
    <div className="sidenav">
      <div className="sidenav-container">
        <h4 onClick={handleMenuExpanded}>{SidenavTitle}</h4>
        <div className={`sidenav-menu ${!MenuExpanded ? "hidden" : ""}`}>
          {
            SidenavData.map((link, index) => {
              return (
                <a key={index} href={`#${link.title.replaceAll(" ", "")}`} className="sidenav-link">
                  <h5>{link.title}</h5>
                  <ArrowRight className="icon sm" />
                </a>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}
