import { z } from 'zod'

const addBoardSchema = z.object({
  title: z.string().min(1).max(20)
})

export { addBoardSchema }
