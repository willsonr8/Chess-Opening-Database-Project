import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <>
    <AppBar position="static">
      <Toolbar style={{ minHeight: '56px' }}>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Chess Opening Database Project
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/query-openings">Query Openings</Button>
        <Button color="inherit" component={Link} to="/query-results">Results</Button>
      </Toolbar>
    </AppBar>
    <Box mt={4}> 
    </Box>
    </>
  );
}

export default Navigation;
