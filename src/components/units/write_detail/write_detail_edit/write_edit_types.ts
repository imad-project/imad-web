import { ChangeEvent } from "react";

export interface IBoardWriteProps {
  handleTitleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleContentsChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeCategory: (event: ChangeEvent<HTMLSelectElement>) => void;
  onClickSpoiler: () => void;
  onClickSubmit: () => void;
  onClickCancel: () => void;
  isSpoiler: boolean;
  titleCount: number;
  contentsCount: number;
  titleError: string;
  contentsError: string;
  title: string;
  content: string;
  category: number;
}
