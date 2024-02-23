import { Box, CircularProgress } from '@mui/material'

const PageLoader = () => (
  <Box
    sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100svw',
      height: '100svh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <CircularProgress />
  </Box>
)

export { PageLoader }
