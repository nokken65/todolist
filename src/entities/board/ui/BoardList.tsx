import { List, ListItem, ListItemButton } from '@mui/material'

import { useAppSelector } from '@/app/model/store'

import { selectors } from '../model'
import { BoardItem } from './BoardItem'

const BoardList = () => {
  const boardIds = useAppSelector(selectors.selectIds)

  return (
    <List>
      {boardIds.map((id) => (
        <ListItem
          key={id}
          disablePadding
        >
          <ListItemButton sx={{ padding: 0 }}>
            <BoardItem id={id} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}

export { BoardList }
