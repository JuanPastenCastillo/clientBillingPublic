import React from "react"
import { Clients, Configure, Invoices, ProductsAndServices } from "../icons"
import "../styles/ISC_Header.css"

const ISC_Header = () => {
  return (
    <div className="ISC_Header">
      <a href="#">Overview</a>
      <ul>
        <li>
          <a href="#">
            {" "}
            <Clients /> Clients
          </a>
        </li>
        <li>
          <a href="#">
            <ProductsAndServices /> Products & Services
          </a>
        </li>
        <li>
          <a href="#">
            {" "}
            <Invoices /> Invoices
          </a>
        </li>
      </ul>
      <a href="#">
        {" "}
        <Configure /> Configure
      </a>
    </div>
  )
}

export default ISC_Header
