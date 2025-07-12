import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

const navItems = [
  { label: 'Crime Reports', to: 'crime-reports' },
  { label: 'Statistics', to: 'statistics' },
  { label: 'Contact', to: 'contact' },
];

const Header = () => {

  
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        CrimeNews
      </Typography>
      <Typography variant="h6" sx={{ my: 2 }}>
        Logout
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem button key={item.label}>
            <Link
              to={item.to}
              smooth={true}
              duration={500}
              offset={-70}
              style={{ cursor: 'pointer', width: '100%', display: 'block' }}
            >
              <ListItemText primary={item.label} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

   const navigate = useNavigate();

   const handleLogout = () => {
    localStorage.removeItem('authToken'); // or any other login flag
    navigate('/auth-login'); // redirect to login page
  };


  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: '#111', boxShadow: 3 }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 'bold', textTransform: 'uppercase' }}
          >
            CrimeNews
          </Typography>
          <Button onClick={handleLogout}>Logout</Button>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-70}
                style={{ textDecoration: 'none' }}
              >
                <Button sx={{ color: '#fff' }}>{item.label}</Button>
              </Link>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
