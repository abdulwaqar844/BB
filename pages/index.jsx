import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useQuery } from "@apollo/client";
import GET_ALL_USER_HABIT from "../lib/apollo/queries/getHabits";
import Habits from "../components/Habits";
import Modal from "../components/NewHabit";
export default function Home() {
  const [user, setUser] = useState(null);
  const [habitCount, setHabitCount] = useState(5)

  const router = useRouter();
  const [show, setShow] = useState(false);
  const HanldeShowModal = (state) => setShow(state);

  const handleShow = () => setShow(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/login");
      }
      setUser(user);
    });
  }, [router]);

  const { loading, data } = useQuery(
    GET_ALL_USER_HABIT,
    {
      variables: { userID: "OekgvAyGIbRoEBYZAOZJOTm8JaA3", first: habitCount },
    },
    {
      fetchPolicy: "no-cache",
    }
  );

  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <Head>
        <title>Habit Tracker App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <div>
          <p className="h3  text-center">Your Habits</p>
        </div>
        <div className="d-flex justify-content-center justify-content-center
 justify-content-md-end px-5 py-2 "
        >
          <button className="btn btn-success " onClick={handleShow}> Create Habit</button>
        </div>
        {data &&
          data.habits.map((habit, index) => {
            return (
              <div className=" px-5 py-4" key={index}>
                <Habits habit={habit} />
              </div>
            );
          })}
        < Modal status={show}  HanldeShowModal={HanldeShowModal} />
      </main>
    </div>
  );
}
