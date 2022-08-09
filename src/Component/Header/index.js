import { useNavigate } from "react-router-dom";
import { HeaderContainer, HeaderField, Headerheading } from "./HeaderStyle";
// import { Logout } from "../StyleComponent/HeaderStyle";
import React, { useEffect, useState } from "react";
import { MdArrowBack } from "@react-icons/all-files/md/MdArrowBack";
const Header = () => {
  const Navigate = useNavigate();
  const [ShowBackIcon, setShowBackIcon] = useState(true);
  useEffect(() => {
    var url = window.location.href;
    var new_url = url.split("/")[url.split("/").length - 1];
    var url2 = url.split("/")[url.split("/").length - 2];
    console.log("urlllll", url2 + new_url, url.split("/"));
    if (new_url === "BOT") {
      setShowBackIcon(false);
    } else if (url2 == "BOT" && new_url == "") {
      setShowBackIcon(false);
    }
  }, []);

  return (
    <HeaderContainer>
      <HeaderField>
        {ShowBackIcon ? (
          <MdArrowBack className="Back-icon" onClick={() => Navigate(-1)} />
        ) : (
          <div></div>
        )}
        <Headerheading>Auto Reply</Headerheading>
        <div></div>
        {/* <Logout>
        <AiOutlineLogout
          onClick={() => {
            localStorage.clear("token");
            Navigate("/");
          }}
          className="logout-icon"
        />
      </Logout> */}
      </HeaderField>
    </HeaderContainer>
  );
};

export default Header;
