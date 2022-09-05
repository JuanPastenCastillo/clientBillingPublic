import React from "react"
import "../styles/Header.css"
import { ExternalLink } from "../icons"

const HeaderTitle = ({ company, displaySubTitle }) => {
  if (displaySubTitle === "ClientBillingPT1") {
    return (
      <>
        <p>
          Client Billing{" "}
        </p>
        <span>
          - a full payment solution for your business, free with {company}
        </span>

      </>
    )
  }

  return <p>Client Billing</p>
}

const Header = ({ company = "{company}", displaySubTitle }) => {
  return (
    <div className="Header">
      <div className="HeaderLeft">
        <HeaderTitle company={company} displaySubTitle={displaySubTitle} />
      </div>

      <div className="HeaderRight">
        <a href="#">
          <p>Docs</p>
          <ExternalLink></ExternalLink>
        </a>
      </div>
    </div>
  )
}

export default Header
