import { days } from "../utils/dayjs";
import DayHabitSquare from "./DayHabitSquare";
const DayHabit = ({ habits, habitId }) => {
  //   console.log(habits);
  const getHabitList = () => {
    return days.map(({ date, disabled }) => {
      const index = habits.findIndex((habit) => habit.date.startsWith(date));
      return index !== -1
        ? {
            ...habits[index],
            disabled,
          }
        : {
            id: `${date}-${habitId}`,
            done: false,
            date,
            disabled,
          };
    });
  };
  const data = getHabitList();
  //   const data = ({}) => {
  //     return days.map(({ date, disabled }) => {
  //       const index = dayHabit.findIndex((habit) => habit.date.startsWith(date));
  //       return index !== -1
  //         ? {
  //             ...dayHabit[index],
  //             disabled,
  //           }
  //         : {
  //             id: `${date}-${habitId}`,
  //             done: false,
  //             date,
  //             disabled,
  //           };
  //     });
  //   };
  //   console.log(data);

  return (
    <div className="d-flex">
      {data?.map((day) => {
        return <DayHabitSquare day={day} key={day.id} />;
      })}
    </div>
  );
};

export default DayHabit;
