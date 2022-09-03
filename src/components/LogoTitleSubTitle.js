import React from "react"
import "../styles/LogoTitleSubTitle.css"

const LogoTitleSubTitle = ({
  logo = false,
  textLogo = "`textLogo`",
  title = "`title`",
  subTitle = "`subTitle`"
}) => {
  
  
  
  
  return (
    <div className={logo ? "LTST-WrapperWithLogo": "LTST-WrapperWithoutLogo"}>
      {logo && (
        <div className="LTST-Circle">
          <div className="LTST-Circle-Text">{textLogo}</div>
        </div>
      )}

      <p className="LTST-Title">{title}</p>
      <span className="LTST-Subtitle">{subTitle}</span>
    </div>
  )
}

export default LogoTitleSubTitle
