# miniature-spatula

This project is to is create  simple workflow to allow user to choose different recipes and confirm order.

# Highlights of the project setup

### This repo is setup using latest tools like:

1. ### vite -
   Is a build tool that aims to provide a faster and leaner development experience for modern web projects, it uses esbuild which way more faster than any other build tools [https://vitejs.dev/guide/]
2. ### react with typescript -
   Using Typescript to build our React applications will make our react applications more predictable as we will be able to catch a lot of errors at runtime (during compilation). [https://create-react-app.dev/docs/adding-typescript/]
3. ### redux-toolkit with typescript -
   Redux Toolkit makes it easier to write good Redux applications and speeds up development, by baking in our recommended best practices, providing good default behaviors, catching mistakes, and allowing you to write simpler code. Redux Toolkit is beneficial to all Redux users regardless of skill level or experience [https://redux-toolkit.js.org/usage/usage-with-typescript]
8. ### pnpm -
   Saving disk space and boosting installation speed, save a lot of space on your disk proportional to the number of projects and dependencies, and you have a lot faster installations! [https://pnpm.io/next/motivation]

# Setup project in local enviornment

1. Git Clone Repo in local from url using below command
   ```bash
   git clone [repo url]
   ```
2. Go to miniature-spatula directory just created after git clone finishes.
   ```bash
   cd miniature-spatula
   ```
3. Install project packages required to setup project in local, it takes packages from package.josn In same directory execuet below steps:
   ```bash
   pnpm i
   ```
4. Launch application local enviornment, execute below command in same directory
   ```bash
   pnpm run dev
   ```
5. Open http://127.0.0.1:5173/ in browser to access the application

# Features

## Choose Recipe Page
1. User can add and remove different recipes from the list.
2. Add/Remove buttons color and label text is shown as indicator if the recipe is selected or not.
3. A count of selected recipe is shown on top of the page section, where user can see how many recipes user has selected.
4. Continue to next page button is added on top of page section to allow user to proceed to next stage of user details page.
5. Continue button will be enable when atleast 2 recipe is selected.

## User Details Page
1. User details page is created to get the user details for now first name and email.
2. Required validation is there for all form elements
3. email validation for valid format is applicable on email input.
4. User is able to review the selected recipes details on this page like recipe title.
5. For the first time no validation on page, once user clicks on Continue required validation get triggered.
6. On successfull validation of form, user can click on Continue button to proceed with order confoirmation.

## Order Confirmation Page
1. On success, user will be shown a order confirmation page with a awesom lottie file animation.
2. On Failure, also for now order confirmation will be displayed (Handling for this is yet be done)

## Fully Web Responsive
1. This web application works on all resolutions (tested with browser developer tools)
# Add on Extra Feature

## Progress Indicator
1. Progress Indicator is shown on top of the page, where user can see the steps (current, completed, not completed).
2. Color code in green will show the progress to the user.

## Routing Validation
1. Current routing is controlled with order stage, hence user can not directly jump on to other sections from url.
2. User can go back to previous stages from url.

## Not Found Page
1. If user directly go to the respective section without completing the first step app will redirect user to Not Found page

## Error Page
1. In case of API Error user will be redirected to Error Page with a proper messages gets displayed on the page

For error page go to UserDetails.tsx 
(For now success case is by default considered in view of api endpoint not working)
Comment LN 93 and 94
UnComment LN 97
```js
   // Comment below code for success page
   navigate(ROUTES.CONFIRMATION);
   dispatch(setOrderStage(2));
        
   // Uncomment below code for error Page
   // dispatch(setError(err));
```
# Things that could be implemented
1. unit tests with testing-library
2. end to end test with cypress/testcafe

# How It Looks (Desktop and Mobile Versions)

## Desktop View
<img width="1021" alt="ChooseRecipePage" src="https://user-images.githubusercontent.com/6111689/208193807-41f3a20d-4780-4d2a-b1aa-e75f8d1c2fbd.png">
<img width="1045" alt="UserDetailsPage" src="https://user-images.githubusercontent.com/6111689/208193823-b1808d36-5698-4f6f-9bb2-cca6a63556c4.png">
<img width="1030" alt="UserDetailsPageValidationErrors" src="https://user-images.githubusercontent.com/6111689/208193846-93d0460c-1ca2-4dc6-9c9b-07e5ae04214f.png">
<img width="1076" alt="OrderConfirmationPage" src="https://user-images.githubusercontent.com/6111689/208193862-b776f80f-6197-4e9b-8a92-2b7a6b7ffe19.png">
<img width="1035" alt="NotFoundPage" src="https://user-images.githubusercontent.com/6111689/208193912-e158991a-4474-44da-99df-aee5b8462f9c.png">
<img width="1064" alt="ErrorPage" src="https://user-images.githubusercontent.com/6111689/208193969-d9ef28bb-bbb3-4f29-892b-daec465f3acc.png">



## Mobile View
<img width="551" alt="ChooseRecipePageMobile" src="https://user-images.githubusercontent.com/6111689/208193987-ac4d186a-bd78-4a0e-9883-397bd88fead2.png">
<img width="565" alt="UserDetailsPageMobile" src="https://user-images.githubusercontent.com/6111689/208194032-1bdd17f2-6e72-468d-bc62-dce2ab1e4e38.png">
<img width="381" alt="OrderconfirmationPageMobile" src="https://user-images.githubusercontent.com/6111689/208194055-87135c21-709b-4c74-92b2-53522b82f141.png">
<img width="381" alt="NotFoundPageMobile" src="https://user-images.githubusercontent.com/6111689/208194075-a7f3e7cc-39f8-48a1-8099-8557fc83f3a6.png">
<img width="552" alt="ErrorPageMobile" src="https://user-images.githubusercontent.com/6111689/208194090-66ab408d-d202-495b-b903-7d7b40a9dcc0.png">





