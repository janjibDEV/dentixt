### Dentixt: Dental Clinic Marketplace

## Project Description

Dentixt is a platform that allows dental clinics in Malaysia to register their clinics at marketplace. Users will be able to select the dental clinic they want to go at the best price possible. Frameworks used in this project is Next.js, Tailwind, MongoDB. For future implementation, Stripe API might be used for payment and another api for email messaging (mailchimp maybe?)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.
### API routes

This project has three files under the api folder: `clinic.js`, `getOneClinic.js`, `server.js`

#### clinic.js

- Perform get request to fetch list of clinics based on zipcode

#### getOneClinic.js

- Perform get request to fetch the selected clinic based on _id

#### server.js

- Perform post request to post reservation data

- Perform get request to fetch reservation data based on id

## Learn More

To learn more about stack used in this project, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [MongoDB CRUD Documentation](https://www.mongodb.com/docs/manual/crud/) - learn CRUD operation using node.js and MongoDB
- [Tailwindcss Documentation](https://tailwindcss.com/docs/installation) - learn tailwind css

For more information about the project:
Plase visit this link: [Project Figjam](https://www.figma.com/file/kJWd9g1U20H49BqWzC9mB1/dentixt?node-id=303%3A362&t=g54iSnNLcipHpx9M-1)

## Deployment

This app is deployed on Vercel. Check out the app at [https://dentixt.vercel.app](https://dentixt.vercel.app)

