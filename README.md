Here's an improved and cleaner version of your GitHub README:

# Furry Friends

## Overview

Furry Friends is a full-stack web application for managing information about cats. This application is built using a modern tech stack and incorporates various libraries and tools to create a user-friendly and efficient user experience. Below, you can find information about the technologies used, why they were chosen, and documentation for specific components and functions.

## Project Live Demo

You can access the live demo of the project here: [Furry Friends Live Demo](https://furry-friends-beta.vercel.app/)

## Tech Stack

Furry Friends is built using the following technologies:

1. **Next.js**: Next.js was chosen for its powerful features, including Server Components and Server Actions, which help reduce the client-side JavaScript bundle size, improving performance. For more information, refer to the Next.js documentation.

2. **Typescript**: Typescript is used for type safety, making the application more robust and maintainable. It enhances the development process with intelligent code completion.

3. **Tailwind CSS + Shadcn UI**: Shadcn UI is a new tool that combines Radix UI with Tailwind CSS, offering customizable components without the need for additional packages. The integration of Tailwind CSS with Next.js makes styling efficient.

4. **React Hook Form + Zod**: React Hook Form is used for building controllable and powerful forms, and Zod is employed for form schema validation. This combination ensures the creation of well-validated forms.

5. **Planetscale Serverless Database**: To build a full-stack application deployed on Vercel, a free, serverless database, Planetscale, was chosen for data management.

6. **Prisma ORM**: Prisma is utilized to manage the database, offering simplicity, ease of use, and powerful features.

7. **date-fns**: Date-fns is employed for date-related operations.

8. **Lucide-React Icons Package**: Lucide-React provides a collection of icons for use in the application.

9. **ESLint + Husky + Prettier**: ESLint, Husky, and Prettier are configured to ensure code quality and safety with pre-commit checks.

## Future Improvements

Although the application functions well, there are areas for future enhancements:

1. **Form Generator Component**: Consider creating a reusable "FormGenerator" component that generates forms based on a schema, eliminating the need to specify individual input elements.

2. **Testing**: Expand test coverage by adding unit tests for utility functions and end-to-end tests to ensure complete coverage of UI functionality.

3. **Image Upload**: Integrate image upload functionality into the form to enhance the user experience.

4. **Refactoring**: Consider refactoring the codebase to make it more maintainable, scalable, and readable.

We hope you enjoy using Furry Friends!

## Component Documentation

### AddOrEditCatForm Component

The `AddOrEditCatForm` component is designed for adding or editing information about cats. It utilizes React Hook Form, Zod validation, and Shadcn UI components for a user-friendly form.

**Usage:**

To use the `AddOrEditCatForm` component, follow these steps:

1. Import the `AddOrEditCatForm` component into your file:

   ```javascript
   import AddOrEditCatForm from 'path/to/AddOrEditCatForm';
   ```

2. Render the component within your React application. You can provide it with `defaultValues` when editing an existing cat.

   ```javascript
   <AddOrEditCatForm defaultValues={defaultCatData} />
   ```

**Props:**

- `defaultValues` (optional): An object containing default values to pre-fill the form fields when editing an existing cat.

The component structure includes `useModal` and `useToast` contexts, a form created with React Hook Form, an `onSubmit` function, and various form fields like "Name," "Gender," "Date of Birth," and "Bio."

### Search Component

The `Search` component provides search functionality in the application, allowing users to input search queries and triggering a debounced search operation.

**Usage:**

To use the `Search` component, follow these steps:

1. Import the `Search` component into your file:

   ```javascript
   import Search from 'path/to/Search';
   ```

2. Render the component within your React application:

   ```javascript
   <Search />
   ```

The component structure includes state management, use of the `useDebounce` hook for debouncing, and UI rendering of the search input field.

### Sort Component

The `Sort` component enables sorting functionality in the application, allowing users to change the sorting order based on specific criteria, such as sorting by name.

**Usage:**

To use the `Sort` component, follow these steps:

1. Import the `Sort` component into your file:

   ```javascript
   import Sort from 'path/to/Sort';
   ```

2. Render the component within your React application:

   ```javascript
   <Sort />
   ```

The component structure includes state management, a tooltip with dynamic content, and UI rendering for sorting by name.

### ModalRoot Component

The `ModalRoot` component serves as the root container for displaying modal dialogs within the application. It uses context to manage and render different types of modals dynamically.

**Usage:**

To use the `ModalRoot` component, follow these steps:

1. Import the `ModalRoot` component into your application.

2. Ensure that the `ModalContext` and `modalRepository` are set up in your application to manage and define modals.

3. Render the `ModalRoot` component within your React application.

The component dynamically renders modals based on the `modalRepository` and the context provided by the `ModalContext`.

### Modal Repository

The `Modal Repository` component is a configuration file defining different types of modals and their associated components. It is used to dynamically render the appropriate modal component based on the modal type.

**Usage:**

To use the `Modal Repository` component, follow these steps:

1. Import the `Modal Repository` component into your application where you manage modals.

2. Ensure that you have the modal components (e.g., `ModalForAddCat`, `ModalForEditCat`, and `ModalForDeleteCat`) dynamically imported or available in your application.

3. Define the modal types using constants and associate them with the corresponding modal components in the `modalRepository`.

4. Use the `modalRepository` to dynamically render modals in your application by providing the appropriate modal type.

The `modalRepository` associates modal type constants with their corresponding dynamically imported modal components, allowing you to easily add and manage different types of modals in your application.

### Prisma Initialization Function

The `prisma` initialization function is responsible for setting up and providing access to the Prisma client in the application. It ensures that a single instance of the Prisma client is used throughout the application for efficient database interaction.

**Usage:**

To use the `prisma` initialization function, follow these steps:

1. Import the `prisma` initialization function into your application.

2. Access the Prisma client instance from the `prisma` variable in your application code to perform database operations using Prisma.

The function initializes the Prisma client with specific configurations and ensures that only one instance is created and shared across the application. It is suitable for database operations.

### Filter Function

The `filter` function manages and updates query parameters within the application, allowing sorting and searching functionality by modifying the URL query string and navigating to the updated URL.

**Usage:**

To use the `filter` function, follow these steps:

1. Import the `filter` function into your application.

2. Call the `filter` function with the desired sorting and search parameters, the router instance from your application, and a `firstRender` flag.

The function updates the URL query parameters based on the provided parameters and navigates to the updated URL, reflecting the filtering or sorting changes in the application.
