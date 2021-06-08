import React from "react";
import { trustPilot, logo, facebook, twitter, blog } from "./Images";

export default function Footer(props) {
  return (
    <div className={"footerSection"}>
      <div className={"hl"}></div>
      <div
        className={"wrapperVerticalArea"}
      >
        <div className={"row1"}>
          <div className={"addressSection"}>
            <img id={"footerLogo"} src={logo} alt={"companyLogo"} />
            <img id={"reviewImg"} src={trustPilot} alt={"reviewImg"} />
            <p>{"14 East, Level 8, Sliema Road, GZR1639, Malta"}</p>
          </div>
          <div className={"companyLinks"}>
            <h2>{"COMPANY"}</h2>
            <ul>
              <li>
                <a href={"#AboutUS"}>{"About us"}</a>
              </li>
              <li>
                <a href={"#Careers"}>{"Careers"}</a>
              </li>
            </ul>
          </div>
          <div className={"supportLinks"}>
            <h2>{"SUPPORT"}</h2>
            <ul>
              <li>
                <a href={"#helpCenter"}>{"Help Center"}</a>
              </li>
              <li>
                <a href={"#Contact"}>{"Contact"}</a>
              </li>
            </ul>
          </div>
          <div className={"socialLinks"}>
            <h2>{"SOCIAL"}</h2>
            <ul>
              <li>
                <a href={"#blog"}>
                  <span>
                    <img className={"socialIcons"} src={blog} alt={"fbIcon"} />
                  </span>
                  {"Blog"}
                </a>
              </li>
              <li>
                <a href={"#twitter"}>
                  <span>
                    <img
                      className={"socialIcons"}
                      src={twitter}
                      alt={"twitterIcon"}
                    />
                  </span>
                  {"Twitter"}
                </a>
              </li>
              <li>
                <a href={"#facebook"}>
                  <span>
                    <img
                      className={"socialIcons"}
                      src={facebook}
                      alt={"fbIcon"}
                    />
                  </span>
                  {"Facebook"}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={"row2"}>
          <ul>
            <li>&copy; {"Xcoins.com"}</li>
            <li>{"Terms of Service"}</li>
            <li>{"Privacy Policy"}</li>
            <li>{"Legal notice"}</li>
            <li>{"Sitemap"}</li>
          </ul>
        </div>
        <div className={"row3"}>
          <p>
            {
              "Xcoins is property of CF Technologies Ltd - Company #204616970 4 East.Level 8, Sliema Road, GZR1639, Malta. All trademarks and copyrights belong to their respective owners. All rights reserved. "
            }
          </p>
        </div>
      </div>
    </div>
  );
}
