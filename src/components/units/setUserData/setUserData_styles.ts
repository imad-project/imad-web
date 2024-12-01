import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 20px;
`;

export const GenreGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
`;

export const GenreBox = styled.div<{ isSelected: boolean }>`
  flex: 0 0 calc(20% - 10px); /* 한 줄에 5개씩 */

  padding: 10px;
  text-align: center;
  border-radius: 8px;
  border: 2px solid ${({ isSelected }) => (isSelected ? "#0b0537" : "#ccc")};
  background-color: ${({ isSelected }) => (isSelected ? "#0b0537" : "#f5f5f5")};
  color: ${({ isSelected }) => (isSelected ? "white" : "black")};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ isSelected }) =>
      isSelected ? "#3c4b66" : "#e0e0e0"};
  }

  @media (max-width: 1080px) {
    flex: 0 0 calc(30% - 10px); /* 한 줄에 5개씩 */
  }
`;
