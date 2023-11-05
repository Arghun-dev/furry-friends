# furry-friends

## Documentaion

You can access to the project live in here: [link](https://furry-friends-beta.vercel.app/)

# AddOrEditCatForm Component Documentation

## Overview

The `AddOrEditCatForm` component is a React form component designed for adding or editing information about cats. It makes use of several libraries and components, such as `react-hook-form`, `zod`, and shadcn UI components to create a user-friendly form for managing cat data.

## Usage

To use the `AddOrEditCatForm` component, follow these steps:

1. Import the `AddOrEditCatForm` component into your file:

   ```javascript
   import AddOrEditCatForm from 'path/to/AddOrEditCatForm';
   ```

2. Render the component within your React application. You can provide it with `defaultValues` if you are editing an existing cat, otherwise, omit it for adding a new cat:

   ```javascript
   <AddOrEditCatForm defaultValues={defaultCatData} />
   ```

## Props

### `AddOrEditCatFormProps`

- `defaultValues` (optional): An object containing the default values to pre-fill the form fields when editing an existing cat.

## Component Structure

The `AddOrEditCatForm` component consists of the following major parts:

1. `useModal` and `useToast` contexts are used to manage modals and display toast notifications.

2. A form is created using the `react-hook-form` library, and it is associated with the `AddOrEditCatFormSchema` for validation.

3. The `onSubmit` function handles form submission, distinguishing between adding a new cat and editing an existing one. It then displays a toast notification and closes the modal if the operation is successful.

4. The form structure consists of several form fields, including "Name," "Gender," "Date of Birth," and "Bio."

## Form Fields

The form fields are rendered using the following UI components:

- `Input` for the "Name" field.
- `Select` for the "Gender" field, allowing the user to select "Male" or "Female."
- `Calendar` for the "Date of Birth" field, providing a date picker with a calendar icon.
- `Textarea` for the "Bio" field.

## Component Dependencies

The `AddOrEditCatForm` component relies on the following libraries and components:

- `react-hook-form` for form management.
- `zod` for form validation.
- Various UI components from `'@/components/ui'` for rendering form fields and buttons.
- `CalendarIcon` from `'lucide-react'` for the calendar icon.
- `useModal` and `useToast` for managing modals and displaying notifications.

# Search Component Documentation

The `Search` component is a React component designed for implementing search functionality in the web application. It allows users to input search queries and triggers the search operation when the input is debounced. The component relies on several libraries and UI components to achieve this functionality.

## Usage

To use the `Search` component, follow these steps:

1. Import the `Search` component into your file:

   ```javascript
   import Search from 'path/to/Search';
   ```

2. Render the component within your React application.

   ```javascript
   <Search />
   ```

## Component Structure

The `Search` component consists of the following key parts:

1. Import Statements: The component imports the required libraries and components, including React, Next.js, and UI components.

2. State Management: The component uses `useState` to manage the search value and `useDebounce` to debounce the search input.

3. Effect Hook: The `useEffect` hook listens for changes in the debounced search value and triggers the `filter` function, which is responsible for handling the search operation. The `useSearchParams` and `useRouter` hooks are used to obtain the current search parameters and navigate to the search results page.

4. UI Rendering: The component renders a search input field along with a search icon. The search value is bound to the input field, and changes to the input are captured to update the search value.

## Props

The `Search` component does not accept any props, and it relies on internal state management and hooks.

## Component Dependencies

The `Search` component relies on the following libraries, components, and hooks:

- React and Next.js for building the component.
- `lucide-react` for rendering the search icon.
- `useDebounce` hook from `'@/hooks/useDebounce'` for debouncing the search input.
- `filter` function from `'@/lib/filter'` for handling the search operation.
- `useSearchParams` and `useRouter` hooks from Next.js for managing search parameters and navigation.

## Component Behavior

1. The component renders a search input field with a placeholder for "Search...".

2. As the user types in the search input, the value is captured and stored in the `searchValue` state.

3. The `useDebounce` hook debounces the `searchValue`, waiting for a 400ms pause in typing before updating the `debouncedValue`.

4. The `useEffect` hook monitors changes in the `debouncedValue` and triggers the `filter` function with the search parameters, allowing for search operations to occur.

5. The search icon is displayed to the left of the input field.

# Sort Component Documentation

The `Sort` component is a React component designed for implementing sorting functionality in the web application. It allows users to change the sorting order of a list or data based on a specific criteria, in this case, sorting by name. The component relies on several libraries and UI components to achieve this functionality.

## Usage

To use the `Sort` component, follow these steps:

1. Import the `Sort` component into your file:

   ```javascript
   import Sort from 'path/to/Sort';
   ```

2. Render the component within your React application.

   ```javascript
   <Sort />
   ```

## Component Structure

The `Sort` component consists of the following key parts:

1. Import Statements: The component imports the required libraries and components, including React, Next.js, and UI components.

2. State Management: The component uses `useState` to manage the sorting order (`sort`).

3. Effect Hook: The `useEffect` hook listens for changes in the `sort` state and triggers the `filter` function, which is responsible for handling the sorting operation. The `useSearchParams` and `useRouter` hooks are used to obtain the current search parameters and navigate to the sorted results.

4. Tooltip Content Rendering: The `renderContent` variable is calculated using `useMemo` and provides the tooltip trigger and content based on the sorting order. It dynamically changes based on the current sorting state (`sort`).

5. UI Rendering: The component renders a tooltip containing the sorting functionality. It includes the text "Sort by: Name" along with a sorting icon and a tooltip with a description of the sorting action.

## Props

The `Sort` component does not accept any props, and it relies on internal state management and hooks.

## Component Dependencies

The `Sort` component relies on the following libraries, components, and hooks:

- React and Next.js for building the component.
- `lucide-react` for rendering the sorting icons.
- `filter` function from `'@/lib/filter'` for handling the sorting operation.
- `useSearchParams` and `useRouter` hooks from Next.js for managing search parameters and navigation.
- `Tooltip`, `TooltipProvider`, `TooltipTrigger`, and `TooltipContent` components from `'@/components/ui/tooltip'` for tooltip functionality.

## Component Behavior

1. The component initially displays a tooltip with the text "Sort by: Name" and an arrow icon indicating the current sorting order.

2. Clicking the arrow icon toggles the sorting order between ascending (up arrow), descending (down arrow), and no sorting (horizontal arrow). The tooltip content dynamically changes to reflect the current sorting state.

3. The `useEffect` hook listens for changes in the `sort` state and triggers the `filter` function with the sorting criteria. This allows for sorting operations to occur based on the selected sorting order.

# ModalRoot Component Documentation

The `ModalRoot` component is a React component that serves as the root container for displaying modal dialogs within the web application. It uses context to manage and render different types of modals dynamically. The modals are defined in a `modalRepository` and are rendered based on their type.

## Usage

To use the `ModalRoot` component, follow these steps:

1. Import the `ModalRoot` component into your application:

   ```javascript
   import ModalRoot from 'path/to/ModalRoot';
   ```

2. Ensure that the `ModalContext` and `modalRepository` are set up in your application to manage and define modals.

3. Render the `ModalRoot` component within your React application:

   ```javascript
   <ModalRoot />
   ```

## Component Structure

The `ModalRoot` component has a straightforward structure:

1. Import Statements: The component imports the required dependencies, including React, `ModalContext`, and `modalRepository`.

2. Use `ModalContext`: The `useModal` hook is used to access the `modals` array from the `ModalContext`.

3. Rendering Modals: The component maps through the `modals` array, which contains modal definitions. For each modal, it looks up the corresponding `ModalComponent` from the `modalRepository` based on its type.

4. Rendering Modal Components: If a valid `ModalComponent` is found, it is rendered with its associated `props`.

## Props

The `ModalRoot` component does not accept any props, as it relies on the context and data from the `ModalContext` and `modalRepository`.

## Component Dependencies

The `ModalRoot` component relies on the following dependencies:

- React: For building the component.
- `ModalContext`: For managing modal state and data.
- `modalRepository`: A repository containing definitions of different modal types and their associated components.

## Component Behavior

1. The `ModalRoot` component uses the `useModal` hook to access the `modals` array from the `ModalContext`.

2. It maps through the `modals` array and, for each modal, looks up the corresponding `ModalComponent` from the `modalRepository` based on the modal's type.

3. If a valid `ModalComponent` is found in the repository, it is rendered with the associated `props`.

4. This dynamic rendering approach allows you to easily add and manage different types of modals in your application.

# Modal Repository Component Documentation

The `Modal Repository` component is a configuration file that defines different types of modals and their associated components. It is used to dynamically render the appropriate modal component based on the modal type. This component is often used in conjunction with the `ModalRoot` component to manage and display modals in a web application.

## Usage

To use the `Modal Repository` component, follow these steps:

1. Import the `Modal Repository` component into your application where you manage modals:

   ```javascript
   import modalRepository from 'path/to/modalRepository';
   ```

2. Ensure that you have the modal components (e.g., `ModalForAddCat`, `ModalForEditCat`, and `ModalForDeleteCat`) dynamically imported or available in your application.

3. Define the modal types using constants and associate them with the corresponding modal components in the `modalRepository`.

4. Use the `modalRepository` to dynamically render modals in your application by providing the appropriate modal type.

## Component Structure

The `Modal Repository` component has a simple structure:

1. Import Statements: The component imports the `dynamic` function from 'next/dynamic' to enable dynamic imports.

2. Dynamic Imports: It dynamically imports modal components (e.g., `ModalForAddCat`, `ModalForEditCat`, and `ModalForDeleteCat`) using the `dynamic` function. This allows for code-splitting and lazy loading of modal components.

3. Modal Type Constants: The component defines constants (e.g., `MODAL_FOR_ADD_CAT`, `MODAL_FOR_EDIT_CAT`, and `MODAL_FOR_DELETE_CAT`) to represent different modal types.

4. Modal Repository Object: The `modalRepository` object associates modal type constants with their corresponding dynamically imported modal components.

## Props

The `Modal Repository` component does not accept any props. It is a configuration file used to define modal types and their associated components.

## Component Dependencies

The `Modal Repository` component relies on the following dependencies:

- `next/dynamic`: For enabling dynamic imports of modal components.

- Modal components (e.g., `ModalForAddCat`, `ModalForEditCat`, and `ModalForDeleteCat`): These are dynamically imported modal components that are associated with modal types.

## Component Behavior

1. The `Modal Repository` component dynamically imports modal components (e.g., `ModalForAddCat`, `ModalForEditCat`, and `ModalForDeleteCat`) using the `dynamic` function. This enables code-splitting and lazy loading of the components.

2. It defines constants (e.g., `MODAL_FOR_ADD_CAT`, `MODAL_FOR_EDIT_CAT`, and `MODAL_FOR_DELETE_CAT`) to represent different modal types.

3. The `modalRepository` object associates modal type constants with their corresponding dynamically imported modal components. This allows you to easily map and render the appropriate modal component based on the modal type.

# Prisma Initialization Function Documentation

The `prisma` initialization function is responsible for setting up and providing access to the Prisma client in a web application. It ensures that a single instance of the Prisma client is used throughout the application and allows for efficient database interaction. This function is often used with Prisma for database operations.

## Overview

The `prisma` initialization function is designed to create and manage a Prisma client instance, making it available globally within the application. It initializes the Prisma client with specific configurations and ensures that only one instance is created and shared across the application.

## Function Usage

To use the `prisma` initialization function, follow these steps:

1. Import the function into your application:

   ```javascript
   import { prisma } from 'path/to/prisma-init';
   ```

2. Access the Prisma client instance from the `prisma` variable in your application code. You can now perform database operations using Prisma.

## Function Structure

The `prisma` initialization function has the following structure:

1. Import Statements: The function imports the `PrismaClient` from the `'@prisma/client'` package.

2. Global Instance: It defines a global variable named `globalForPrisma` that allows for global access to the Prisma client.

3. Initialization or Reuse: It checks if a Prisma client instance already exists in `globalForPrisma.prisma`. If it exists, the function reuses that instance. If not, it creates a new Prisma client instance with specific logging configurations.

4. Environmental Checks: The function checks if the application is not in a production environment (`process.env.NODE_ENV !== 'production'`). In non-production environments, it assigns the Prisma client instance to `globalForPrisma.prisma`. This ensures that the Prisma client is available for debugging purposes and avoids multiple instantiations.

## Function Dependencies

The `prisma` initialization function depends on the following:

- `@prisma/client`: The Prisma client package is used to create and manage a connection to the database.

## Function Behavior

1. The function creates a single global instance of the Prisma client, allowing it to be accessed from any part of the application.

2. It initializes the Prisma client with specific configurations, such as enabling query logging for debugging purposes.

3. It checks if the application is not in a production environment to enable debugging and multiple instantiations if needed.

# Filter Function Documentation

The `filter` function is responsible for managing and updating query parameters within the web application. It allows for sorting and searching functionality by modifying the URL query string and then navigating to the updated URL. This function is commonly used in Next.js applications to filter and display content based on user preferences.

## Overview

The `filter` function plays a crucial role in web applications where sorting and filtering of content is required. It accepts parameters such as sorting criteria, search terms, the application's router, and a flag to handle the initial render. It constructs a new query string based on the provided parameters and navigates to the updated URL to reflect the filtering or sorting changes.

## Function Usage

To use the `filter` function, follow these steps:

1. Import the function into your application:

   ```javascript
   import { filter } from 'path/to/filter';
   ```

2. Call the `filter` function with the desired sorting and search parameters, the router instance from your application, and a `firstRender` flag.

   ```javascript
   filter(sort, search, router, firstRender);
   ```

3. The function will update the URL query string based on the provided parameters and navigate to the updated URL.

## Function Structure

The `filter` function has the following structure:

1. Import Statements: The function imports the `AppRouterInstance` from 'next/dist/shared/lib/app-router-context.shared-runtime'. This is used to access the router instance provided by the Next.js framework.

2. Parameters: The function accepts the following parameters:

   - `sort` (string or null): The sorting criteria.
   - `search` (string or null): The search terms.
   - `router` (AppRouterInstance): The router instance provided by the Next.js framework.
   - `firstRender` (object with a `current` property): A flag to manage the initial render.

3. Initial Render Handling: The function checks if it's the initial render (determined by the `firstRender.current` flag). If it is the initial render, the function sets the flag to `false` and returns without making any changes.

4. Query String Construction: The function constructs a new query string (`query`) based on the provided sorting and search parameters. It includes the 'sort' and 'search' query parameters, separated by an ampersand if both are present.

5. URL Navigation: The function uses the router to navigate to the updated URL, which includes the constructed query string.

## Function Behavior

1. The `filter` function manages and updates the URL query parameters based on the provided sorting and search parameters.

2. It handles the initial render by checking the `firstRender.current` flag and setting it to `false` after the first call.

3. The function constructs a new query string based on the provided sorting and search parameters.

4. It uses the router to navigate to the updated URL, reflecting the filtering or sorting changes in the application.
