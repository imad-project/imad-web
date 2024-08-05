import React from "react";

// 줄바꿈 문자를 <br> 태그로 변환하는 함수
export const TextConvert = (text: string | undefined): JSX.Element => {
  if (text == undefined) {
    return <div>error</div>;
  }
  return (
    <>
      {text.split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </>
  );
};
