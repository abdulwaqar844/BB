import { useMutation } from "@apollo/client";
import SET_DAILY_HABIT from "../lib/apollo/mutations/setDailyHabit";
import GET_ALL_USER_HABIT from "../lib/apollo/queries/getHabits";

function DayHabitSquare({ day, habitId }) {
  const { done, disabled } = day;

  const [setDailyHabit, { loading, data, error }] = useMutation(
    SET_DAILY_HABIT,
    {
      refetchQueries: [GET_ALL_USER_HABIT],
    }
  );

  const handleSetHabit = () => {
    if (done) {
      return;
    }
    if (disabled) {
      return;
    }
    setDailyHabit({
      variables: {
        habitId,
        date: day.date,
        done: !done,
        userID: "OekgvAyGIbRoEBYZAOZJOTm8JaA3",
      },
    });
  };
  let bg;
  if (disabled) {
    bg = "white";
  } else if (done) {
    bg = "green";
  } else {
    bg = "gray";
  }

  return (
    <div
      style={{
        border: `1px solid gray`,
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignContent: "center ",
        fontSize: "20px",
        background: bg,
        color: day.done ? "white" : "black",
        margin: "3px",
      }}
    >
      <p onDoubleClick={handleSetHabit}>{new Date(day.date).getDate()} </p>
    </div>
  );
}

export default DayHabitSquare;
