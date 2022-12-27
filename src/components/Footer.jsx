import React from "react";
const currentyear = new Date().getFullYear();
function Footer() {
  return (
    <footer>
      <p1>copyright@{currentyear}</p1>
    </footer>
  );
}

export default Footer;
