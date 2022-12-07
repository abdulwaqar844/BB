import DayHabit from "./DayHabit";
const Habits = ({ habit }) => {
  return (
    <div>
      <p className="h3 text-light">
        {habit.title} {habit.starred && "🌟"}
      </p>
      <p className="h5 text-dark"> {habit.description}</p>
      
      <DayHabit habits={habit.habits} habitId={habit.id} />
    </div>
  );
};
export default Habits;
