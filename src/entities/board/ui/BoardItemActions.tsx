import React from 'react'
import { MoreHoriz as MoreIcon } from '@mui/icons-material'
import { Button, List, ListItem, ListItemButton, Popover } from '@mui/material'

import { useAppDispatch } from '@/app/model/store'
import { Board, localStorageApi } from '@/shared/api'

type BoardItemActionsProps = Pick<Board, 'id'> & { isHidden: boolean }

const BoardItemActions = (props: BoardItemActionsProps) => {
  const { id, isHidden } = props

  const dispatch = useAppDispatch()

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  const handleOpenPopover: React.MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClosePopover = () => {
    setAnchorEl(null)
  }

  const handleRemoveBoard = () => dispatch(localStorageApi.removeBoard({ id }))

  const isOpen = Boolean(anchorEl)
  const popoverId = isOpen ? 'board-item-actions-popover' : undefined

  return (
    <>
      <Button
        aria-describedby={popoverId}
        onClick={handleOpenPopover}
        sx={{
          padding: 0,
          minHeight: '100%',
          borderRadius: 0,
          minWidth: '2rem',
          visibility: isHidden ? 'hidden' : 'visible'
        }}
      >
        <MoreIcon />
      </Button>
      <Popover
        id={popoverId}
        open={isOpen}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'left'
        }}
      >
        <List disablePadding>
          <ListItem disablePadding>
            <ListItemButton onClick={handleRemoveBoard}>Delete</ListItemButton>
          </ListItem>
        </List>
      </Popover>
    </>
  )
}

export { BoardItemActions }
