import { ChangeEvent } from "react";

export interface IBoardWriteProps {
  handleTitleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleContentsChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeCategory: (event: ChangeEvent<HTMLSelectElement>) => void;
  onChangeSpoiler: () => void;
  onClickSubmit: () => void;
  handleSpoiler: (event: ChangeEvent<HTMLInputElement>) => void;
  x: number;
}
