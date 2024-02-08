Test Cases for Todo Application
  <br>This document outlines the test cases for each component in the Todo application.

Footer Component
    <br>1. Renders Footer component: This test checks if the Footer component is correctly rendered.
    <br>2. Displays correct active todos count: This test checks if the Footer component correctly displays the number of active todos.
    <br>3. Renders navigation links: This test checks if the Footer component correctly renders the navigation links.
    <br>4. "Clear completed" button is disabled when all todos are active: This test checks if the "Clear completed" button is disabled when all todos are active.

Header Component
    <br>1. Renders Header component: This test checks if the Header component is correctly rendered.
    <br>2. Renders with correct text: This test checks if the Header component renders with the correct text.
    <br>3. Has correct class: This test checks if the Header component has the correct class.
    <br>4. Renders Input component: This test checks if the Header component correctly renders the Input component.
    <br>5. Input component receives correct props: This test checks if the Input component receives the correct props.

Input Component
    <br>1. Renders Input component: This test checks if the Input component is correctly rendered.
    <br>2. Calls onSubmit function when Enter key is pressed: This test checks if the onSubmit function is called when the Enter key is pressed.
    <br>3. Calls onBlur function when input loses focus: This test checks if the onBlur function is called when the input loses focus.
    <br>4. Has correct placeholder: This test checks if the Input component has the correct placeholder.

Item Component
    <br>1. Renders Item component: This test checks if the Item component is correctly rendered.
    <br>2. Displays correct todo title: This test checks if the Item component correctly displays the todo title.
    <br>3. Checkbox is unchecked when todo is not completed: This test checks if the checkbox is unchecked when the todo is not completed.
    <br>4. Renders Input component on double click: This test checks if the Input component is rendered on double click.
    <br>5. Calls removeItem function when delete button is clicked: This test checks if the removeItem function is called when the delete button is clicked.

Main Component
    <br>1. Renders Main component: This test checks if the Main component is correctly rendered.
    <br>2. Renders correct number of Item components: This test checks if the Main component correctly renders the correct number of Item components.
    <br>3. Calls toggleAll function when checkbox is clicked: This test checks if the toggleAll function is called when the checkbox is clicked.
    <br>4. Checkbox is unchecked when not all todos are completed: This test checks if the checkbox is unchecked when not all todos are completed.


<br>To run the test runner in the interactive watch mode: `npm run test`
<br>To run the app in the development mode: `npm start`
