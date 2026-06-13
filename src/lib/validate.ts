import { z } from 'zod';

export const createUser = z.object({
  username: z.string().min(4).max(66).describe('Username of the user'),
  email: z.email().trim().lowercase().describe('Email of the user'),
  password: z.string().min(8).describe('Password of the user'),
});

export type CreateUser = z.infer<typeof createUser>;
