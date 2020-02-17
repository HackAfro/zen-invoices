# Invoices Application

This repository contains the solution for the ZenHomes frontend application challenge.

## Tools used

The application is built using Javascript. The application uses React and was bootstrapped using Create React App.

The full list of tools used by the application can be found below:

- [React](https://reactjs.org) - tooling for frontend development
- [React Switch](https://github.com/markusenglund/react-switch#readme) - provided styled switch input
- [React Nice Dates](https://github.com/hernansartorio/react-nice-dates#readme) - Date picker input component
- [React Feather](https://github.com/feathericons/react-feather#readme) - Icon pack
- [React Modal](https://github.com/reactjs/react-modal) - Modal library

## Getting up and running

- Clone the repository
- Inside the cloned directory, run the following commands:
  - `npm install` or `yarn` - To install all the project's dependencies.
  - Run `yarn start` or `npm start` to start the frontend application

## Project directory

The project directory houses the server application and the frontend application.

- The frontend application - `./src`

The reusable components that make up the frontend application can be found in the `src/components` directory. Each component serves a single purpose:

- `./src/components/header` - renders the application header
- `./src/components/table` - renders list of invoices
- `./src/components/invoice-form` - this component manages the invoice creation flow
- `./src/components/modal` - renders the invoice form in a dialog
- `./src/component/transfer-list` - renders all existing transfers

Asides from the components directory, the other existing directories are:

- `./src/contexts`: holds created context to manage app wide state
- `./src/providers`: renders the context file and provides helper methods for updating the state

## Styling

Styling was done using utility classes provided by [TailwindCSS](https://tailwindcss.com/) and some custom styles. Responsiveness was achieved using a [mobile first approach](https://tailwindcss.com/docs/responsive-design#mobile-first)
