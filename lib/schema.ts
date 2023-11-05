import { z } from 'zod';

export const AddOrEditCatFormSchema = z.object({
  name: z.string({ required_error: 'Name is required' }).trim().min(1),
  bio: z.string({ required_error: 'Bio is required' }).min(1),
  gender: z.string({
    required_error: 'Gender is required',
  }),
  dob: z.date({ required_error: 'Birthdate is required' }),
});
