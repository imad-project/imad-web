import React, { useState, useRef } from "react";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import axios from "axios";

export default function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [croppedImage, setCroppedImage] = useState<Blob | null>(null);

  // Cropper의 ref를 위한 타입 설정
  const cropperRef = useRef<ReactCropperElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
    }
  };

  const handleCrop = () => {
    const cropper = cropperRef.current?.cropper;
    if (cropper) {
      cropper.getCroppedCanvas().toBlob(
        (blob) => {
          if (blob) {
            setCroppedImage(blob);
          }
        },
        "image/jpeg",
        0.95
      );
    }
  };

  const handleUpload = async () => {
    if (!croppedImage || !selectedFile) return;

    const formData = new FormData();
    formData.append("file", croppedImage, selectedFile.name);

    try {
      const response = await axios.post("API_ENDPOINT", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Upload successful:", response.data);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {selectedFile && (
        <>
          <Cropper
            src={URL.createObjectURL(selectedFile)}
            style={{ height: 400, width: "100%" }}
            initialAspectRatio={1}
            aspectRatio={1}
            guides={false}
            ref={cropperRef}
            viewMode={1}
            minCropBoxHeight={10}
            minCropBoxWidth={10}
            background={false}
            responsive={true}
            autoCropArea={1}
            checkOrientation={false}
          />
          <button onClick={handleCrop}>Crop Image</button>
        </>
      )}
      <button onClick={handleUpload} disabled={!croppedImage}>
        Upload Image
      </button>
    </div>
  );
}
