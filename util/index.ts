export const getTodaysDate = () => {
  const today = new Date();
  const year = today.getFullYear(); // 년도
  const month = today.getMonth() + 1; // 월
  const date = today.getDate(); // 날짜
  const hours = today.getHours(); // 시
  const minutes = today.getMinutes(); // 분
  return [year, month, date].join(".") + " " + [hours, minutes].join(":");
};

export const onChangeAction = (
  event: React.ChangeEvent<HTMLInputElement>,
  setState: React.Dispatch<React.SetStateAction<any>>
) => {
  setState(event.target.value);
};
