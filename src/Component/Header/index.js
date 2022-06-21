import { useNavigate } from "react-router-dom";
import {
  HeaderContainer,
  HeaderField,
  Headerheading,
} from "../StyleComponent/HeaderStyle";
// import { Logout } from "../StyleComponent/HeaderStyle";

import { MdArrowBack } from "@react-icons/all-files/md/MdArrowBack";
const Header = () => {
  const Navigate = useNavigate();

  return (
    <HeaderContainer>
      <HeaderField>
        <MdArrowBack className="Back-icon" onClick={() => Navigate(-1)} />
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
