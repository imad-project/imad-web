import React, { useState, useRef, useEffect } from "react";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import axios from "axios";
import { getCookie } from "../../src/commons/cookies/cookie";

export default function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [croppedImage, setCroppedImage] = useState<Blob | null>(null);
  const [isClient, setIsClient] = useState(false); // Client-side check
  const token = getCookie("Authorization");
  const cropperRef = useRef<ReactCropperElement>(null);

  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

  // Set `isClient` to true after the component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!token) {
      console.error("Authorization token is missing.");
    }
  }, [token]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      if (file.size > MAX_FILE_SIZE) {
        alert("파일 크기가 10MB를 초과합니다. 다른 파일을 선택해주세요.");
        return; // 파일 크기가 10MB를 초과하면 선택을 취소합니다.
      }

      setSelectedFile(file);
    }
  };

  const handleCrop = () => {
    const cropper = cropperRef.current?.cropper;
    if (cropper) {
      cropper.getCroppedCanvas({ width: 128, height: 128 }).toBlob(
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
    formData.append("image", croppedImage, selectedFile.name);

    try {
      const response = await axios.patch(
        `https://api.iimad.com/api/user/profile_image/custom`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Upload successful:", response.data);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "400px" }}>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {selectedFile &&
        isClient && ( // Render Cropper only on the client side
          <>
            <Cropper
              src={URL.createObjectURL(selectedFile)}
              style={{ height: 400, width: "100%" }}
              initialAspectRatio={1}
              aspectRatio={1}
              guides={false}
              ref={cropperRef}
              viewMode={1}
              dragMode="move"
              cropBoxMovable={false}
              cropBoxResizable={false}
              autoCropArea={1}
              background={false}
              responsive={true}
              checkOrientation={false}
              minCropBoxWidth={128}
              minCropBoxHeight={128}
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
