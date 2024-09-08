import React, { useState } from "react";
import Modal from "react-modal";
import ImageUpload from "./profile_image"; // ImageUpload 컴포넌트 불러오기
import styled from "@emotion/styled";
import { height } from "@mui/system";

// 모달을 화면에 렌더링할 위치를 지정 (필수)

// 커스텀 버튼 스타일
const CustomButton = styled.button`
  background-color: #008cba;
  color: white;
  padding: 12px 24px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #007bb5;
  }
`;

// 모달 스타일 (react-modal의 인라인 스타일링)
const customModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    height: "70%",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

const Row_box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default function Profile_Modal(props: any) {
  return (
    <div>
      <Modal
        isOpen={props.isModalOpen}
        onRequestClose={props.closeModal}
        style={customModalStyles}
        contentLabel="Image Upload Modal"
      >
        <Row_box>
          <h2>프로필 이미지 변경</h2>
          <CustomButton onClick={props.closeModal}>닫기</CustomButton>
        </Row_box>
        <ImageUpload closeModal={props.closeModal} />{" "}
        {/* ImageUpload 컴포넌트 */}
      </Modal>
    </div>
  );
}
