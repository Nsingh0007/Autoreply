import React from "react";
import { Box, PopupBox, PopupContainer } from "../StyleComponent/Popup";

const Popup = (props) => {
  return (
    <PopupContainer>
      <PopupBox>
        <Box style={{ ...props.style }}>{props.content}</Box>
      </PopupBox>
    </PopupContainer>
  );
};

export default Popup;
