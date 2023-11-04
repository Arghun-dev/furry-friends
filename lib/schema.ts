import { z } from 'zod';

export const AddOrEditCatFormSchema = z.object({
  name: z.string().trim().min(1, { message: 'Name is required' }),
  bio: z.string().min(1, { message: 'Bio is required' }),
  gender: z.string({
    required_error: 'Please select gender',
  }),
  dob: z.date(),
});
