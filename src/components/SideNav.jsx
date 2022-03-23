import React from "react";
import { ReactComponent as ArrowRight } from '../img/arrow-right.svg';

export default function SideNav({
  SidenavTitle, SidenavData
}) {
  return (
    <div className="sidenav">
      <div className="sidenav-container">
        <h3>{SidenavTitle}</h3>
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
  );
}
