/**
 * Top menu bar.  
 */

import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

export default function TopBar() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography
            noWrap
            component="div"
            variant="h5">Xavier Collantes</Typography>
        </Toolbar>
      </AppBar>
    </Box >
  )
}
