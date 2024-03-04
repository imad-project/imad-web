export default function Search_UI(props: any) {
  return (
    <>
      <div>
        <input onChange={props.onChangeQuery} />
        <button onClick={props.onClickSearch}>검색</button>
      </div>
    </>
  );
}
