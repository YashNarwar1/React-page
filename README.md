React Sidebar Navigation Example
This is a simple example of a sidebar navigation component built using React. It demonstrates how to toggle the visibility of the sidebar and prevent scrolling on the main content when the sidebar is open.

Features
Toggleable sidebar navigation
Prevent scrolling on the main content when the sidebar is open
Technologies Used
React
CSS


to start 
1. clone this repository in your local machine
2. npm install
3. npm run dev


Usage
Click the sidebar button or icon to toggle the sidebar.
Scrolling on the main content should be disabled when the sidebar is open to prevent unwanted behavior.
Prevent Scrolling
The app utilizes CSS to prevent scrolling on the main content when the sidebar is open. This is achieved by adding a class to the body element when the sidebar is open. The CSS rules for this behavior can be found in the App.css file.

To adapt this behavior to other components or pages in your app, simply add or remove the class from the appropriate element (e.g., body, a container div, etc.) based on the desired conditions in your React components.
