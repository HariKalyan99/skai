import React from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import WidgetsIcon from '@mui/icons-material/Widgets';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import useStore from '../store';
import '../components/Sidebar.module.css';

const Sidebar = () => {
  const isSidebarOpen = useStore((state) => state.isSidebarOpen);

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={isSidebarOpen}
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          backgroundColor: '#F3E8FF',
        },
      }}
    >
      <div className="sidebar-header">
        <Typography variant="h6" noWrap component="div">
        <img src="../assets/assets/directright.png" alt="logo" />
        </Typography>
        <Typography variant="body2" noWrap component="div">
          Sample Project Name
        </Typography>
      </div>
      <List>
        <ListItem button component={Link} to="/projects">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Project" />
        </ListItem>
        <ListItem button component={Link} to="/widgetConfig">
          <ListItemIcon>
            <WidgetsIcon />
          </ListItemIcon>
          <ListItemText primary="Widget Configuration" />
        </ListItem>
        <ListItem button component={Link} to="/deployment">
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Deployment" />
        </ListItem>
        <ListItem button component={Link} to="/pricing">
          <ListItemIcon>
            <MonetizationOnIcon />
          </ListItemIcon>
          <ListItemText primary="Pricing" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button component={Link} to="/accountSettings">
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
