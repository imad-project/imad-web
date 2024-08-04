import React from "react";
import Pagination from "@mui/material/Pagination";
import styled from "@emotion/styled";

interface PaginationComponentProps {
  currentPage: number;
  pageCount: number;
  onPageChange: (page: number) => void;
}

const StyledPagination = styled(Pagination)`
  margin-top: 10px;

  .MuiPaginationItem-root {
    color: white; // 페이지 아이템 색상
    background-color: #8b89c2; // 선택되지 않은 페이지 배경색
  }
  .MuiPaginationItem-previousNext {
    color: #0b0537; // 이전 및 다음 아이콘 색상
  }

  .Mui-selected {
    background-color: #0b0537; // 선택된 페이지 배경색
  }
`;

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  currentPage,
  pageCount,
  onPageChange,
}) => {
  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    onPageChange(page);
  };

  return (
    <StyledPagination
      count={pageCount}
      page={currentPage}
      onChange={handleChange}
    />
  );
};

export default PaginationComponent;
