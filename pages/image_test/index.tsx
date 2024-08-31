import React, { useState, useRef, useEffect, useCallback } from "react";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import axios from "axios";
import styled from "@emotion/styled";

const CircleOverlay = styled.div`
  position: absolute;
  width: 128px;
  height: 128px;
  border: 2px solid rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  pointer-events: none;
  box-sizing: border-box;
`;

export default function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [croppedImage, setCroppedImage] = useState<Blob | null>(null);
  const cropperRef = useRef<ReactCropperElement>(null);
  const [overlayPosition, setOverlayPosition] = useState({ top: 0, left: 0 });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
    }
  };

  const updateOverlayPosition = useCallback(() => {
    const cropper = cropperRef.current?.cropper;
    if (cropper) {
      const containerData = cropper.getContainerData();
      const cropBoxData = cropper.getCropBoxData();

      const top =
        containerData.height / 2 -
        64 +
        (cropBoxData.top - containerData.height / 2) *
          (cropBoxData.width / containerData.width);
      const left =
        containerData.width / 2 -
        64 +
        (cropBoxData.left - containerData.width / 2) *
          (cropBoxData.width / containerData.width);

      setOverlayPosition({
        top: Math.max(top, 0),
        left: Math.max(left, 0),
      });
    }
  }, []);

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

  useEffect(() => {
    if (selectedFile) {
      updateOverlayPosition();
    }
  }, [selectedFile, updateOverlayPosition]);

  return (
    <div style={{ position: "relative", width: "100%", height: "400px" }}>
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
            dragMode="move"
            cropBoxMovable={true}
            cropBoxResizable={true}
            autoCropArea={1}
            background={false}
            responsive={true}
            checkOrientation={false}
            minCropBoxWidth={128}
            minCropBoxHeight={128}
            cropend={updateOverlayPosition}
          />
          <CircleOverlay
            style={{
              top: `${overlayPosition.top}px`,
              left: `${overlayPosition.left}px`,
            }}
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
