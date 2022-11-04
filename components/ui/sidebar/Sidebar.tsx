import React from 'react';
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';

const list = ['inbox', 'email', 'login'];

export const Sidebar = () => {
  return (
    <Drawer anchor='left' open={true}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: '5px 10px' }}>
          <Typography>Menu</Typography>
          <List>
            {list.map((element, index) => (
              <ListItem button key={element}>
                <ListItemIcon></ListItemIcon>
                <ListItemText>{element}</ListItemText>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Box>
    </Drawer>
  );
};
