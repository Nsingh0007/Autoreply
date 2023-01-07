import React from "react";
import "./Style.css";
const SubHeader = (props) => {
  const {
    headerTitle = "Title",
    addButtonTitle = "title",
    showSettingBtn = false,
    onAddBtnClick,
    onSettingClick,
  } = props;
  return (
    <div>
      <div className="SubHeaderContainer">
        <div className="SubHeaderField">
          <div className="SubTextSet">{headerTitle}</div>
          <div className="ButtonField">
            <button
              type="button"
              value="Click to Open Popup"
              className="button"
              onClick={() => onAddBtnClick()}
            >
              + {addButtonTitle}
            </button>

            {showSettingBtn && (
              <button className="button" onClick={() => onSettingClick()}>
                Setting
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
