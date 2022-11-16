import axios from "axios";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./../../../lib/firebase";
export const resolvers = {
  Query: {
    getUsers: async () => {
      try {
        const users = await axios.get("https://api.github.com/users");
        return users.data.map(({ id, login, avatar_url }) => ({
          id,
          login,
          avatar_url,
        }));
      } catch (error) {
        throw error;
      }
    },
    getUser: async (_, args) => {
      try {
        const user = await axios.get(
          `https://api.github.com/users/${args.name}`
        );
        return {
          id: user.data.id,
          login: user.data.login,
          avatar_url: user.data.avatar_url,
        };
      } catch (error) {
        throw error;
      }
    },
  },
  Mutation: {
    addHabit: async (_, args) => {
      try {
        const docRef = await addDoc(collection(db, "Habits"), {
          title: args.title,
          description: args.description,
        });
        console.log("Document written with ID: ", docRef.id);
        return docRef.id;
      } catch (error) {
        throw error;
      }
    },
    setDailyHabit: async (_, args) => {
      try {
        console.log("Args", args);
        const docRef = await addDoc(collection(db, "DailyHabits"), {
          habitId: args.habitId,
          done: args.done,
          date: args.date,
        });
        console.log("Document written with ID: ", docRef.id);
        return docRef.id;
      } catch (error) {
        throw error;
      }
    },
    setMood: async (_, args) => {
      try {
        const docRef = await addDoc(collection(db, "DailyMood"), {
          type: args.type,
          date: args.date,
        });
        console.log("Document written with ID: ", docRef.id);
        return docRef.id;
      } catch (error) {
        throw error;
      }
    },
  },
};
