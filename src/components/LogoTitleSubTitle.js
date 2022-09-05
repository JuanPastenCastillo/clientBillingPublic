import React from "react"
import { Stripe } from "../icons"
import "../styles/LogoTitleSubTitle.css"

const LogoTitleSubTitle = ({
  logo = false,
  textLogo = "`textLogo`",
  title = "`title`",
  subTitle = "`subTitle`",
  customLogo = null
}) => {
  return (
    <div className={logo ? "LTST-WrapperWithLogo" : "LTST-WrapperWithoutLogo"}>
      {logo && (
        <div className="LTST-Circle">
          <Stripe />
        </div>
      )}

      {customLogo}
      <p className="LTST-Title">{title}</p>
      <span className="LTST-Subtitle">{subTitle}</span>
    </div>
  )
}

export default LogoTitleSubTitle
