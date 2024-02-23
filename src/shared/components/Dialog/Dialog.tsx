import React from 'react'
import { Box, DialogTitle, Dialog as MuiDialog } from '@mui/material'

type DialogProps = React.PropsWithChildren & {
  title?: React.ReactNode
  isOpen: boolean
  onClose: VoidFunction
}

const Dialog = (props: DialogProps) => {
  const { children, title, isOpen, onClose } = props

  return (
    <MuiDialog
      onClose={onClose}
      open={isOpen}
    >
      {title && <DialogTitle>{title}</DialogTitle>}
      <Box padding={1}>{children}</Box>
    </MuiDialog>
  )
}

export { Dialog }
