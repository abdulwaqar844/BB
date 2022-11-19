
# Habit Tracker App


## About 

Habit Tracker is user friendly habit tracking Web based application. User can register for his account , add his habits and track his habits for whole month.

## Technology Used 

- NextJs (Frontend )
- GraphQL-NextJS API (Backend)
- Firebase (Database)
- Authunteication (Firebase)

## How to use

A New user can register his account and login to portal. Then A User can add his habits to portal and select daily complete habits by double clicking on date of month. Complete habit will be marked as green and pending habits shown in gray color. User only selects current and privios days of the month. Upcomming days of month are disabled that can't be marked as completed.

## GraphQL Backend


Created Graphql server usign Nextjs's API routes feature.

- *Query*

 1. **habits** Query to fetch all habits from backend.
- *Mutation*


 1. **createHabit** to create new habit entry in database.

 2. **setDailyHabit** to setDaily Habit of user

 3. **editHabit** to Edit title , description and starred property of habit.

 4. **deleteHabit** to delete habit of user.

### Database

For storing data , Firebase firestore is used. Firebase is cloud service provider which offers multiple cloud services. Firestore is NOSql database.

### Authentications

For Authentication, Firebase Auth service is used to authenticate users and save users for future.






This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
