import React, { useState, useRef, useEffect } from "react";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import axios from "axios";
import { getCookie } from "../../../src/commons/cookies/cookie";
import styled from "@emotion/styled";
import apiClient from "@/api/apiClient";

// 이미지 업로드 컴포넌트 스타일링
const UploadContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const FileInput = styled.input`
  display: none;
`;

const FileInputLabel = styled.label`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  margin-right: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

const CustomButton = styled.button`
  background-color: #008cba;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #007bb5;
  }
  &:disabled {
    background-color: #e7e7e7;
    color: #a9a9a9;
    cursor: not-allowed;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
`;

const Profile_Image = styled.img<{ isSelected: boolean }>`
  width: 50px;
  height: 50px;
  cursor: pointer;
  border: ${({ isSelected }) => (isSelected ? "3px solid blue" : "none")};
  border-radius: 25px;
  box-shadow: 0px 0px 10px gray;
  margin: 10px;
`;

const Row_Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Row_Box2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const Box = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const imageList = [
  { id: 1, name: "indigo" },
  { id: 2, name: "yellow" },
  { id: 3, name: "green" },
  { id: 4, name: "pink" },
  { id: 5, name: "blue" },
  { id: 6, name: "red" },
];

export default function ImageUpload(props: any) {
  const [selectedProfile, setSelectedProfile] = useState(0);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [croppedImage, setCroppedImage] = useState<Blob | null>(null);
  const [isClient, setIsClient] = useState(false); // Client-side check
  const token = getCookie("Authorization");
  const cropperRef = useRef<ReactCropperElement>(null);

  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

  // 기본이미지 변경부
  const onClickProfile = (id: number) => {
    setSelectedProfile(id);
  };

  const onClickSubmitProfile = async () => {
    if (selectedProfile == 0) {
      alert("이미지를 선택후 시도해주세요");
      return;
    } else {
      const formData = new FormData();
      formData.append("image", `default_profile_image_${selectedProfile}.png`);
      try {
        const response = await apiClient.patch(
          `/api/user/profile_image/default`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (response.status === 200) {
          console.log("Upload successful:", response.data);
          alert("프로필 기본 이미지 변경 정상완료!");
          props.closeModal();
        }
      } catch (error) {
        console.error("Upload failed:", error);
      }
    }
  };

  // Set `isClient` to true after the component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!token) {
      console.error("Authorization token is missing.");
    }
  }, [token]);

  // 커스텀 이미지 변경부
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
      const response = await apiClient.patch(
        `/api/user/profile_image/custom`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        console.log("Upload successful:", response.data);
        alert("프로필 커스텀 이미지 변경 정상완료!");
        props.closeModal();
      }
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <>
      <Box>
        <Title>기본 이미지로 변경</Title>
        <Row_Box>
          {imageList.map((el) => (
            <div key={el.id}>
              <Profile_Image
                src={`/img/icon/profile/${el.name}.png`}
                isSelected={selectedProfile === el.id}
                onClick={() => onClickProfile(el.id)}
              />
            </div>
          ))}
        </Row_Box>
        <CustomButton onClick={onClickSubmitProfile}>
          선택한 기본이미지 적용
        </CustomButton>
      </Box>

      <Box>
        <Title>커스텀 이미지로 변경</Title>

        <UploadContainer>
          <FileInput
            type="file"
            accept="image/*"
            id="fileInput"
            onChange={handleFileChange}
          />

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

                <CustomButton onClick={handleCrop}>
                  커스텀 이미지 자르기
                </CustomButton>
              </>
            )}
          <Row_Box2>
            <FileInputLabel htmlFor="fileInput">이미지 선택</FileInputLabel>
            <CustomButton onClick={handleUpload} disabled={!croppedImage}>
              이미지 적용
            </CustomButton>
          </Row_Box2>
        </UploadContainer>
      </Box>
    </>
  );
}
