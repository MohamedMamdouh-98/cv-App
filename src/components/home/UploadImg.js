import React, { useState } from "react";
import "./image.css";
const UploadImg = () => {
  const [image, setImage] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
        setIsUploaded(true);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="upload-img">
      <div className="button-upload">
        <label htmlFor="add">Add Image</label>
        <input
          type="file"
          accept=".jpg,.png,"
          onChange={handleImageChange}
          id="add"
        />
      </div>
      <div className="card-img">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default UploadImg;
