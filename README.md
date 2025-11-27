# Ecommerce Web Application — React Frontend

A fully responsive and feature-rich ecommerce web application built using React. This project demonstrates practical application architecture, dynamic data management, routing across multiple pages, automated component testing, and real-time UI updates using async operations. Designed as a primary portfolio project, it showcases strong proficiency in modern frontend development and application scaling practices.

<img width="1839" height="870" alt="Image" src="https://github.com/user-attachments/assets/5d6b5da9-0fd5-49c0-9da0-5e7bc3b0c63e" />

## Overview

The application simulates an online shopping experience with product listings, detailed product views, cart management capabilities, and smooth page transitions using React Router. Data throughout the application is fetched using Axios, enabling structured asynchronous operations and reinforcing the use of async and await in real development workflows.  

The project also includes automated testing using Vitest to validate key UI and logic components, improving maintainability and reliability.

## Key Features

- **Frontend-Focused Architecture**  
  Entire application logic and state management are implemented on the frontend. Node.js is only used to run the development environment.

- **Routing With React Router**  
  Navigation between product pages, product details, cart, and other pages is handled with client-side routing.

- **Data Fetching with Axios**  
  Product and cart data are retrieved using [Axios](https://axios-http.com/docs/intro) requests, providing hands-on experience with async/await and structured request handling.

- **Real-Time Data Mutation**  
  Implemented functionality to update data dynamically within the application state, simulating back-and-forth communication flow with a backend.

- **Automated Testing With Vitest**  
  Test coverage for components and logic to ensure reliability and validate expected UI behavior.

- **Reusable Component Design**  
  Built using modular and scalable component structures for clean UI and easy maintainability.

- **Responsive Design**  
  Complete layout compatibility for mobile, tablet, and desktop viewports.

## Technology Stack

- React.js
- React Router DOM
- Axios
- Vitest (Unit Testing)
- Node.js (for development server execution)
- CSS

## Running the Project

### Clone the repository
```bash
git clone https://github.com/Madhankannan02/Ecommerce-React.git
cd Ecommerce-React
```

## Install dependencies
```bash
npm install
```

## Start Developement Server
```bash
npm run dev
```

## Testing

Testing is an important part of this project to ensure that core components function reliably and integrate correctly when combined. The application uses [**Vitest**](https://github.com/vitest-dev/vitest) as the testing framework, providing fast test execution and a smooth developer experience.

<img width="1010" height="286" alt="Image" src="https://github.com/user-attachments/assets/2996d2dd-ef96-4cfd-8317-da4b16b92a5c" />

### Types of Testing Implemented

- **Unit Testing**
  - Focused on validating individual, isolated React components and utility functions.
  - Ensured that standalone components render correctly, handle props properly, and maintain expected behavior independently of external dependencies.

- **Integration Testing**
  - Tested components that rely on multiple other components or shared application state.
  - Verified that UI interactions, data flow, and component communication work correctly when combined as part of larger feature modules.
  - Checked real-world interactions such as adding items to the cart and updating state across pages.

### Running Tests

To execute the full test suite, run the following command:

```bash
npx vitest
```
## Future Enhancements

Planned improvements and additional capabilities to extend the application:

- Enhanced product search and filtering mechanisms
- Implementation of Redux or Context API for scalable and centralized state management
- Integration with a real backend API or cloud services such as Firebase
- Admin dashboard for product creation, editing, and deletion (CRUD operations)
- Checkout flow with payment simulation and order processing


## Purpose and Learning Outcomes

This project was developed as a comprehensive hands-on learning experience with the goal of strengthening core frontend engineering skills. Key learning outcomes include:

- Designing scalable application architecture and component structure
- Implementing multi-page navigation and routing logic using React Router
- Handling real-time UI updates through async and await with Axios
- Practicing both unit and integration testing to support a testing-first development mindset
- Building responsive layouts and reusable UI components to support maintainability and performance

The project reflects production-style design patterns and realistic ecommerce application workflow, demonstrating capability in modern frontend development and application scalability.

---

## License

Distributed under the [MIT](https://choosealicense.com/licenses/mit/) License.
