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
