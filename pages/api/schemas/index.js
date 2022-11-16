import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type User {
    id: ID
    login: String
    avatar_url: String
  }

  type Query {
    getUsers: [User]
    getUser(name: String!): User!
  }
  type Mutation {
    addHabit(title: String!, description: String!): String
    setDailyHabit(habitId: ID!, done: Boolean!, date: String!): String
    setMood(date: String!, type: String!) :String
  }
`;

//     import { gql } from "apollo-server-micro";

// export const typeDefs = gql`




//   query me {
//     me {
//       name
//       email
//       pushToken
//       id
//       isPro
//     }

//     moods(first: 5, orderBy: date_DESC) {
//       id
//       type
//       date
//     }
//     habits(first: 5) {
//       title
//       description
//       starred
//       habits(first: 5, orderBy: date_DESC) {
//         id
//         date
//         done
//       }
//     }
//   }

//   query getHabits {
//     habits {
//       id
//       title
//       description
//       habits {
//         id
//         done
//         date
//       }
//     }
//   }

//   query myMoods {
//     moods(
//       where: { date_gte: "2019-03-01", date_lte: "2019-03-30" }
//       orderBy: date_ASC
//     ) {
//       id
//       type
//       date
//     }
//   }


//   //For changing the date for the current month + refreshing

//   this.props.data.stopPolling();
//   await this.props.data.refetch({
//     start,
//     end
//   });
//   this.props.data.startPolling(5000);`;
