import { z } from 'zod'

import { addBoardSchema } from '../validation'

type AddBoardValues = z.infer<typeof addBoardSchema>

export type { AddBoardValues }
