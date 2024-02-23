import React from 'react'
import { Box, ClickAwayListener, Typography } from '@mui/material'

import { useAppSelector } from '@/app/model/store'
import { Board } from '@/shared/api'

import { selectors } from '../model'
import { BoardItemActions } from './BoardItemActions'

type BoardItemProps = Pick<Board, 'id'>

const BoardItem = (props: BoardItemProps) => {
  const { id } = props
  const board = useAppSelector((state) => selectors.selectById(state, id))

  const [isHovered, setIsHovered] = React.useState(true)

  const handleIsHovered = () => setIsHovered(true)
  const handleIsNotHovered = () => setIsHovered(false)

  return (
    <ClickAwayListener
      onClickAway={handleIsNotHovered}
      disableReactTree
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          padding: '0rem 0rem 0rem 1rem'
        }}
        onPointerEnter={handleIsHovered}
        onPointerLeave={handleIsNotHovered}
      >
        <Typography
          variant="body1"
          paddingY={0.5}
        >
          {board?.title}
        </Typography>
        <BoardItemActions
          id={id}
          isHidden={!isHovered}
        />
      </Box>
    </ClickAwayListener>
  )
}

export { BoardItem }
