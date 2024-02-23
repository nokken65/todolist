import React from 'react'
import { ArrowBackIosNew as ArrowBackIcon } from '@mui/icons-material'
import { Box, Button, Drawer, styled } from '@mui/material'

import { BoardList } from '@/entities/board'

const drawerWidth = 240

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  })
}))

type DefaultLayoutProps = React.PropsWithChildren

const DefaultLayout = (props: DefaultLayoutProps) => {
  const { children } = props

  const [open, setOpen] = React.useState(true)

  const handleDrawerOpen = () => setOpen(true)
  const handleDrawerClose = () => setOpen(false)

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            overflowY: 'visible'
          }
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <Button
          variant="outlined"
          sx={({ palette }) => ({
            position: 'absolute',
            right: '-0.8rem',
            top: '0.8rem',

            width: '1.6rem',
            minWidth: '1.6rem',
            maxWidth: '1.6rem',
            height: '1.6rem',

            padding: 0,

            borderWidth: '2px',
            borderRadius: '1.6rem',
            zIndex: 100,

            backgroundColor: palette.background.paper
          })}
          onClick={handleDrawerClose}
        >
          <ArrowBackIcon sx={{ width: '0.6rem', height: '0.6rem' }} />
        </Button>
        <Box sx={{ overflow: 'auto' }}>
          <BoardList />
        </Box>
      </Drawer>
      <Main open={open}>
        <Box sx={{ display: 'flex' }}>
          {!open && (
            <Button
              variant="text"
              sx={({ palette }) => ({
                position: 'fixed',
                padding: 0,
                left: 0,
                top: 0,
                borderRadius: 0,

                width: '1rem',
                minWidth: '1rem',
                maxWidth: '1rem',
                height: '100svh',
                backgroundColor: palette.action.hover
              })}
              onClick={handleDrawerOpen}
            >
              <Button
                variant="contained"
                sx={{
                  position: 'absolute',
                  right: '-0.8rem',
                  top: '0.8rem',

                  width: '1.6rem',
                  minWidth: '1.6rem',
                  maxWidth: '1.6rem',
                  height: '1.6rem',

                  padding: 0,

                  borderWidth: '2px',
                  borderRadius: '1.6rem',
                  zIndex: 100
                }}
                onClick={handleDrawerOpen}
              >
                <ArrowBackIcon
                  sx={{ width: '0.6rem', height: '0.6rem', rotate: '180deg' }}
                />
              </Button>
            </Button>
          )}

          {children}
        </Box>
      </Main>
    </Box>
  )
}

export { DefaultLayout }
