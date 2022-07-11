// import React, { useState } from "react";
// import { MdDeleteForever } from "react-icons/md";
// import { FiEdit } from "react-icons/fi";
// import Popup from "../../Component/_shared/Popup";
// import Button from "../../Component/CustomButton";
// import { Bot } from "../../mobx/MobxStore";
// import { PopupInput } from "../Style/AddMessageStyle";
// import axios from "axios";
// const MessageEdit = (props) => {
//   console.log("--->>>>>>>>>>>>>>>>>>>", JSON.stringify(props?.item));
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDelOpen, setIsDelOpen] = useState(false);
//   const [editName, setEditName] = useState(props.user.title);
//   const deltogglePopup = () => {
//     setIsDelOpen(!isDelOpen);
//   };
//   const Cancilhandelpopup = () => {
//     deltogglePopup();
//   };

//   // const togglePopup = (props) => {};
//   const handelpopup = async (id) => {
//     console.log("first", id);

//     await axios
//       .put(
//         `https://autoreplybackend.moreyeahs.in/api/bot/updatebot?botId=${id}`,
//         {
//           title: editName,
//           mobile: "1234567890",
//         }
//       )
//       .then((res) => {
//         console.log(
//           "GET MEESAGE SET DATAAAAAAAAAAAAAAA--->>>>>>>>>>>>>>>>>>>>>>>>>",
//           res.data.message
//         );
//         props.getMessageReply();
//         // Bot.setEditName(res.data.message);
//         // setIsLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         // setIsLoading(false);
//       });
//   };

//   return (
//     <div>
//       <div className="popup-edit-field">
//         <FiEdit className="edit-icon" onClick={deltogglePopup} />
//         <h3>Edit</h3>
//       </div>
//       {isDelOpen && (
//         <Popup
//           content={
//             <div className=" edit-popup">
//               <div
//                 className="popup-contant"
//                 style={
//                   {
//                     // flexWrap: "wrap",
//                   }
//                 }
//               >
//                 <div className="edit-field">
//                   <label className="reply-popup-head">Edit</label>
//                   <PopupInput
//                     value={editName}
//                     id="BotWord"
//                     placeholder="Edit Message Set "
//                     type="text"
//                     style={{
//                       width: "160px",
//                       height: "40px",
//                       marginBottom: "5px",
//                       Color: "blcak",
//                     }}
//                     onChange={(e) => {
//                       setEditName(e.target.value);
//                     }}
//                   />
//                 </div>
//                 <div className="edit-field-button">
//                   <Button
//                     className="popupButton"
//                     onClick={() => handelpopup(props?.item?._id)}
//                     style="edit-button"
//                   >
//                     Edit
//                   </Button>
//                   <Button
//                     className="popup-Cancel-Button"
//                     role="button"
//                     style="cancil-button"
//                     onClick={() => {
//                       Cancilhandelpopup();
//                     }}
//                   >
//                     Cancel
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           }
//           style={{
//             height: "auto",
//             width: "auto",
//           }}
//         />
//       )}{" "}
//     </div>
//   );
// };

// export default MessageEdit;
import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import Popup from "../../Component/_shared/Popup";
import Button from "../../Component/CustomButton";
import { Bot } from "../../mobx/MobxStore";
import { PopupInput } from "../Style/AddMessageStyle";
import axios from "axios";
const MessageEdit = (props) => {
  console.log("--->>>>>>>>>>>>>>>>>>>", JSON.stringify(props?.item));
  const [isOpen, setIsOpen] = useState(false);
  const [isDelOpen, setIsDelOpen] = useState(false);
  const [editName, setEditName] = useState(props.user.title);
  const deltogglePopup = () => {
    setIsDelOpen(!isDelOpen);
  };
  const Cancilhandelpopup = () => {
    deltogglePopup();
  };

  // const togglePopup = (props) => {};
  const handelpopup = async (id) => {
    console.log("first", id);

    await axios
      .put(
        `https://autoreplybackend.moreyeahs.in/api/bot/updatebot?botId=${id}`,
        {
          title: editName,
          mobile: "1234567890",
        }
      )
      .then((res) => {
        console.log(
          "GET MEESAGE SET DATA--->>>>>>>>>>>>>>>>>>>>>>>>>",
          res.data.message
        );
        props.getBotMsg();
        // Bot.setEditName(res.data.message);
        // setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        // setIsLoading(false);
      });
  };

  return (
    <div>
      <div className="popup-edit-field">
        <FiEdit className="edit-icon" onClick={deltogglePopup} />
        <h3>Edit</h3>
      </div>
      {isDelOpen && (
        <Popup
          content={
            <div className=" edit-popup">
              <div
                className="popup-contant"
                style={
                  {
                    // flexWrap: "wrap",
                  }
                }
              >
                <div className="edit-field">
                  <label className="reply-popup-head">Edit</label>
                  <PopupInput
                    value={editName}
                    id="BotWord"
                    placeholder="Edit Message Set "
                    type="text"
                    style={{
                      width: "160px",
                      height: "40px",
                      marginBottom: "5px",
                      Color: "blcak",
                    }}
                    onChange={(e) => {
                      setEditName(e.target.value);
                    }}
                  />
                </div>
                <div className="edit-field-button">
                  <Button
                    className="popupButton"
                    onClick={() => handelpopup(props?.item?._id)}
                    style="edit-button"
                  >
                    Edit
                  </Button>
                  <Button
                    className="popup-Cancel-Button"
                    role="button"
                    style="cancil-button"
                    onClick={() => {
                      Cancilhandelpopup();
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          }
          style={{
            height: "auto",
            width: "auto",
          }}
        />
      )}{" "}
    </div>
  );
};

export default MessageEdit;
