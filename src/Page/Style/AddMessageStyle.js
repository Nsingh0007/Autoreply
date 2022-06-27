import styled from "styled-components";
export const SubHeaderContainer = styled.div`
  width: 100%;
  color: #fff;
  height: 100px;
  display: flex;

  position: absolute;
  margin-top: 120px;
  justify-content: center;

  margin-left: 4px;
`;
// export const CardContainer = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
export const SubHeaderField = styled.div`
  width: 86%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SubTextSet = styled.div`
  font-size: 40px;
  color: red;
  font-weight: 700;

  @media only screen and (max-width: 700px) {
    font-size: 30px;
    font-weight: 600;
    line-height: 18px;
  }
  @media only screen and (max-width: 500px) {
    font-size: 20px;
    font-weight: 600;
    line-height: 18px;
  }
  @media only screen and (max-width: 320px) {
    font-size: 15px;
    font-weight: 500;
    line-height: 18px;
  }
`;

export const ButtonField = styled.div`
  margin-right: "50px";
`;
export const SubText = styled.h1`
  font-size: 35px;
  color: red;
  font-weight: 600;

  @media only screen and (max-width: 700px) {
    font-size: 30px;
    font-weight: 600;
    line-height: 18px;
  }
  @media only screen and (max-width: 510px) {
    font-size: 20px;
    font-weight: 600;
    line-height: 18px;
  }
  @media only screen and (max-width: 374px) {
    font-size: 15px;
    font-weight: 500;
    line-height: 18px;
  }
`;
export const Card = styled.div`
  width: 300px;
  height: 80px;

  background: #000000;
  border: 6px solid #ff0000;
  border-radius: 15px;

  background: #000000;

  margin: 20px;
  font-size: 25px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PopupContant = styled.div`
  display: flex;
  justify-content: center;

  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 5px; ;
`;
export const PopupInputField = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  align-content: flex-start;
`;
export const ReplyPopupHead = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 17px;
  /* identical to box height */
  color: #e6e6e6;
`;

export const PopupInput = styled.input`
  width: 228px;
  height: 45px;
  color: white;
  padding-left: 25px;
  background: #0c0c0c;
  border: 1px solid #333333;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-size: 18px;
  font-weight: 600;
  /* Inside auto layout */

  margin-top: 10px;
  ::placeholder {
    font-size: 14px;
    font-weight: 600;
    color: #8c8e8e;
  }
`;

export const PopupButton = styled.button`
  width: 104px;
  height: 50px;

  background: #ff0000;
  border: 3px solid #ff0000;
  border-radius: 85px;

  font-weight: 700;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  color: #000000;
`;
export const PopupCancilButton = styled.div`
  background: #020202;
  border: 3px solid #ff0000;
  border-radius: 85px;
  font-weight: 700;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: red;
  margin-left: 15px;

  padding: 12px;
  padding-left: 18px;
  padding-right: 18px;
  display: flex;
  justify-content: center;
  align-item: center;
`;
export const PopupBtnField = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
`;
export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CardField = styled.div`
  width: 91%;
  padding-left: 40px;
  display: flex;

  margin-top: 250px;
  flex-wrap: wrap;
`;
export const CardContent = styled.div`
  display: flex;
  margin: 20px;
  flex-wrap: wrap;
`;
export const MessageSetAdded = styled.div`
  width: 50px;
  min-height: 200px;
  margin-top: 20px;
  background: #000000;
  border: 3px solid #ff0000;

  border-left: none;

  background: #000000;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
`;
export const EditPopup = styled.div`
  display: flex;
  justify-content: center;
`;
export const Dot = styled.div`
  width: 40px;
  height: 232px;

  background: #000000;
  border: 4px solid #ff0000;

  border-left: none;

  background: #000000;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
`;
export const PopupEditContant = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  flex-direction: column;
  margin-top: 10px;
`;
export const PopupDelField = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px;
`;
