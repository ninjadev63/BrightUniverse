import React from "react";
import { useTranslation } from "react-i18next";

const FileUploader = ({ setAttachment }) => {
  const { t } = useTranslation();

  const hiddenFileInput = React.useRef(null);
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [selectedName, setSelectedName] = React.useState("");
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    setSelectedFile(fileUploaded);
    setSelectedName(fileUploaded.name);
    setAttachment(fileUploaded);
    // props.handleFile(fileUploaded);
  };
  return (
    <div>
      <div className="flex gap-4 items-center">
        {" "}
        <button
          className="border-none bg-white 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl text-xl font-bold"
          onClick={handleClick}
        >
          {t("add attachment")}
        </button>
        <h3> {selectedName}</h3>
      </div>

      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: "none" }}
        multiple
      />
    </div>
  );
};
export default FileUploader;
