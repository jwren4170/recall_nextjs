import z from 'zod';

export const loginSchema = z.object({
  email: z.email({pattern: z.regexes.rfc5322Email}),
  password: z
    .string()
    .min(8, { error: 'Password must be at least 8 characters' }),
});

export const signupSchema = z.object({
  fullName: z.string({ error: 'Name is required' }).min(5, {
    error: 'Name must be at least 5 characters',
  }),
  email: z.email({pattern: z.regexes.rfc5322Email}),
  password: z
    .string()
    .min(8, { error: 'Password must be at least 8 characters' }),
});
