import React, { useContext } from 'react';
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { UIContext } from '../../../context/ui';

const list = ['inbox', 'email', 'login'];

export const Sidebar = () => {
  const { sideMenuOpen, closeSideMenu } = useContext(UIContext);

  return (
    <Drawer anchor='left' open={sideMenuOpen} onClose={closeSideMenu}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: '5px 10px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography>Menu</Typography>
            <IconButton size='small' onClick={closeSideMenu}>
              <CloseOutlinedIcon />
            </IconButton>
          </Box>
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
