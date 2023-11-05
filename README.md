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
