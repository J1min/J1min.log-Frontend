export const getTodaysDate = () => {
  let today = new Date();
  let year = today.getFullYear(); // 년도
  let month = today.getMonth() + 1; // 월
  let date = today.getDate(); // 날짜
  let hours = today.getHours(); // 시
  let minutes = today.getMinutes(); // 분
  return [year, month, date].join(".") + " " + [hours, minutes].join(":");
};


export const onChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  setState: React.Dispatch<string>
) => {
  setState(event.target.value);
};