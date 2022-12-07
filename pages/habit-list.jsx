import React, { useState, useEffect } from "react";
import GET_ALL_USER_HABIT from "../lib/apollo/queries/getHabits";
import DELETE_HABIT from "../lib/apollo/mutations/deleteHabit";
import { useMutation, useLazyQuery } from "@apollo/client";
import Head from "next/head";
import EditHabit from "../components/EditHabit";
import { auth } from "../lib/firebase";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";

function HabitList() {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);
  const [show, setShow] = useState(false);
  const [habit, setHabit] = useState({});
  const [habitCount, setHabitCount] = useState(5);
  console.log("User", user)
  console.log("loading", loading)
  const [deleteHabit] = useMutation(DELETE_HABIT, {
    refetchQueries: [
      {
        query: GET_ALL_USER_HABIT, variables: {
          userID: user?.uid, first: habitCount
        }
      }
    ],
  })
  const handleShow = (habit) => {
    setShow(true);
    setHabit(habit);
  };
  const HanldeShowModal = (state) => setShow(state);

  const [getHabits, { error, data, loading: LoadingQueryResult }] =
  useLazyQuery(
    GET_ALL_USER_HABIT,
    {
      variables: { userID: user?.uid, first: habitCount },
    },
    {
      fetchPolicy: "no-cache",
    }
  );
  const handleDeleteHabit = (habitId) => {
    deleteHabit(
      { variables: { habitId } }

    );
  };

  useEffect(() => {
    if (loading) {
      return;
      // return <h2>Loading</h2>;
    }
    if (!user) router.push("/login");
    if (user) {
      getHabits();
    }
  }, [user, loading]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <>
      <Head>
        <title>All Habit List | Habit Tracker App</title>
      </Head>
      <div className="container-fluid header py-4 px-5 py-4">
        <p className="h4 text-center border-bottom pb-2 text-light">All Habit Lists</p>
        {LoadingQueryResult && LoadingQueryResult ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : null}
        <table className="table text-light">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Descriptions</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>

          <tbody>
            {data &&
              data.habits.map((habit, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{++index}</th>
                    <td>
                      {habit.title} {habit.starred && "🌟"}
                    </td>
                    <td>{habit.description}</td>
                    <td>
                      <button
                        onClick={() => handleShow(habit)}
                        className="btn btn-sm btn-light"
                      >
                        ✏️
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-light"
                        onClick={() => handleDeleteHabit(habit.id)}
                      >
                        ❌
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <EditHabit
        habit={habit}
        status={show}
        HanldeShowModal={HanldeShowModal}
      />
    </>
  );
}

export default HabitList;
