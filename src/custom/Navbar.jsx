import React,{useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Button from '@mui/material/Button';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import { IoCall } from "react-icons/io5";
import { HiInformationCircle } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';
import { FaCarSide } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { IoHomeSharp } from "react-icons/io5";
import { useLocation } from 'react-router-dom';

export default function Navbar() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const user = useSelector(state => state.user);
    const location = useLocation();
  

    const accessToken = localStorage.getItem('token');
   

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        navigate('/profile');
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>My Profile</MenuItem>
           
            {
                user?.data?.role === "admin" && (
                    <MenuItem onClick={() => navigate('/admin')}>Admin Dashboard</MenuItem>
                )
            }
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    useEffect(() => {
        // Update the value state based on the current location
        switch (location.pathname) {
            case '/':
                setValue(0);
                break;
            case '/book-cabs':
                setValue(1);
                break;
            case '/about-us':
                setValue(2);
                break;
            case '/contact-us':
                setValue(3);
                break;
            default:
                setValue(0);
        }
    }, [location.pathname]);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <AppBar position="static"
                sx={{
                    backgroundColor: '#FFA500',
                    // background: 'linear-gradient(90deg, rgba(207,179,10,1) 0%, rgba(128,112,7,1) 50%, rgba(215,197,8,1) 100%)',
                    color: 'black',
                    borderRadius: 7,
                    width: "90%"

                }}
            >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        {/* <MenuIcon /> */}
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' }, color: "white" }}
                    >
                        Cabzen
                    </Typography>
                    <Box sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
        }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    switch (newValue) {
                        case 0:
                            navigate('/');
                            break;
                        case 1:
                            navigate('/book-cabs');
                            break;
                        case 2:
                            navigate('/about-us');
                            break;
                        case 3:
                            navigate('/contact-us');
                            break;
                        default:
                            navigate('/');
                    }
                }}
                sx={{
                    background: '#FFF7B0',
                    maxWidth: '100%',
                    width: '50%',
                    borderRadius: 7,
                    '& .Mui-selected': { // Styling the selected label
                        color: 'orange !important', // Making the selected label orange
                    },
                }}
            >
                <BottomNavigationAction label="Home" icon={<IoHomeSharp  size={25} />} />
                <BottomNavigationAction label="Cabs" icon={<FaCarSide size={25} />} />
                <BottomNavigationAction label="About Us" icon={<HiInformationCircle size={25} />} />
                <BottomNavigationAction label="Contact Us" icon={<IoCall size={25} />} />
            </BottomNavigation>
        </Box>

                    {
                        accessToken ? (
                            <>
                                <Button variant="outlined" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' }, color: "black",  marginRight: 2 }}
                                    onClick={() => {
                                        localStorage.removeItem('token');
                                        navigate('/');
                                    }}
                                >
                                    Logout
                                </Button>

                                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                    <IconButton
                                        size="large"
                                        edge="end"
                                        aria-label="account of current user"
                                        aria-controls={menuId}
                                        aria-haspopup="true"

                                        onClick={handleProfileMenuOpen}
                                    >
                                        <AccountCircle sx={{
                                            color: "white"
                                        }} />
                                    </IconButton>
                                </Box>
                            </>
                        ) : (

                            <Box sx={{ display: 'flex' }}>
                                <Button variant="outlined" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' }, color: "white", backgroundColor: "black", marginRight: 2 }}
                                    onClick={() => navigate('/login')}
                                >
                                    Login
                                </Button>
                                <Typography variant="h5" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' }, color: "white" }}>
                                    |
                                </Typography>
                                <Button variant="outlined" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' }, color: "white", marginLeft: 2 }}
                                    onClick={() => navigate('/register')}
                                >
                                    Register
                                </Button>
                            </Box>

                        )
                    }


                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}