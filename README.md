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
