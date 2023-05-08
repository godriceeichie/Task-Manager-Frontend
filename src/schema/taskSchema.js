import { z } from 'zod'

export const taskSchema = z.object({
    name: z.string(),
    description: z.string().min(5, {message: 'Your description must consist of at least 5 characters'}).optional(),
    category: z.string().min(5, {message: 'Your category must consist of at least 5 character'}).max(20, {
        message: 'Your category must not consist of more than 20 characters'
    }),
    status: z.string(),
    priority: z.string(),
    dueDate: z.date().min(new Date)    
})