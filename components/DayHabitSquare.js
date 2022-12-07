import { useMutation } from "@apollo/client";
import SET_DAILY_HABIT from "../lib/apollo/mutations/setDailyHabit";
import GET_ALL_USER_HABIT from "../lib/apollo/queries/getHabits";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";

function DayHabitSquare({ day, habitId }) {  const [user, loading] = useAuthState(auth);

  const { done, disabled } = day;

  const [setDailyHabit] = useMutation(SET_DAILY_HABIT, {
    refetchQueries: [GET_ALL_USER_HABIT],
  });

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
        userID: user?.uid,
      },
    });
  };
  let bg;
  let cursorStyle;
  if (disabled) {
    bg = "white";
    cursorStyle = "not-allowed";
  } else if (done) {
    bg = "rgb(117 218 151)";
    cursorStyle = "default";
  } else {
    bg = "rgb(147 153 157)";
    cursorStyle = "pointer";
  }

  return (
    <div
  
    >
      <p 
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
        cursor: cursorStyle,
      
      }} onDoubleClick={handleSetHabit}>{new Date(day.date).getDate()} </p>
    </div>
  );
}

export default DayHabitSquare;
