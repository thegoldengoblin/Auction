import React from 'react';
import { styled, Box, Drawer, List, ListItem, ListItemText, CssBaseline } from '@mui/material';

const drawerWidth = 240;

const AppDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  position: 'absolute',
  top: '64px',  // Update this value to match the height of your Navbar
  height: 'calc(100% - 64px)', // This will make the sidebar span the rest of the page height
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
  },
}));

const Sidebar = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppDrawer variant="permanent">
        <List>
          {['Item 1', 'Item 2', 'Item 3'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </AppDrawer>
    </Box>
  );
}

export default Sidebar;
