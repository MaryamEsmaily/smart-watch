import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
function Footer() {
  return (
    <div
      className="position-fixed bottom-0 bg-dark py-3 px-5 my-3"
      style={{
        left: "50%",
        transform: "translateX(-50%)",
        borderRadius: "30px",
      }}
    >
      <BiHomeAlt className="fs-2 me-4" />
      <BsPerson className="fs-2" />
    </div>
  );
}

export default Footer;
