import React from 'react'
import { Add as AddIcon } from '@mui/icons-material'
import { Box, Button, Popover } from '@mui/material'

import { AddBoardForm } from '.'

const AddBoard = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'add-board-popover' : undefined

  return (
    <div>
      <Button
        aria-describedby={id}
        onClick={handleClick}
        sx={{ width: '100%', justifyContent: 'flex-start' }}
      >
        <AddIcon />
        Add board
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'left'
        }}
      >
        <Box sx={{ padding: '1rem' }}>
          <AddBoardForm />
        </Box>
      </Popover>
    </div>
  )
}

export { AddBoard }
