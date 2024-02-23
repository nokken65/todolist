import { useAppSelector } from '@/app/model/store'
import { Tasklist } from '@/shared/api/localStorage'

import { selectors } from '../model'

type TasklistTitleProps = Pick<Tasklist, 'id'>

export const TasklistTitle = ({ id }: TasklistTitleProps) => {
  const title = useAppSelector((state) =>
    selectors.selectTitleByTasklistId(state, id)
  )

  return <h3>{title}</h3>
}
