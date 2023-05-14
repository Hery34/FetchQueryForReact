# FetchQueryForReact
Repository containing some reusable components for querying and displaying datas in a react.js project
The three following components provided serve to fetch and display data in a React application using reusable components.


# # FetchQuery
This is a React component that fetches data from an API and filters it based on specified fields. It uses the  **useState** and  **useEffect** hooks to manage state and perform side effects. The component also renders loading and error messages.

# # DisplayFetchQuery

This is a React component that displays a table with the specified header, body, and class. It uses the  map function to render the header and body rows.

# # AppFetchQuery

This is a React component that fetches data from an API using the  **FetchQuery** component and displays it using the  **DisplayFetchQuery** component. It stores the table header, body, and class in state variables, and passes them as props to the  **DisplayFetchQuery** component.

# # How to use  them

To **use** these **components** in your own **React** application, you can **import** them into your code and use them as needed. Be sure to pass the **required** **props** to **each component** , such as the **URL** and **fields** for the  **FetchQuery** component, and the header, body, and class for the   **DisplayFetchQuery** components.  
  
Overall, these components demonstrate how to fetch and display data in a React application using reusable components.
