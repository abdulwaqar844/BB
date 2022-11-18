import { days } from "../utils/dayjs";
import DayHabitSquare from "./DayHabitSquare";
const DayHabit = ({ habits, habitId }) => {
  console.log("Habit Recieved", habits);
  console.log("HabitID Recieved", habitId);
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
  console.log("After Refactore", data);
  return (
    <div className="d-flex flex-wrap">
      {data?.map((day, index) => {
        return <DayHabitSquare day={day} key={index} habitId={habitId}/>;
      })}
    </div>
  );
};

export default DayHabit;
