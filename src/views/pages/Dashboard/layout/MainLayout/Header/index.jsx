import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import ProfileSection from './ProfileSection';


// project imports
// import LogoSection from '../LogoSection';



// assets
import { IconMenu2 } from '@tabler/icons-react';
import Buttons from './Buttons';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = ({ handleLeftDrawerToggle }) => {
  const theme = useTheme();

  return (
    <>
      {/* logo & toggler button */}
      <Box
        sx={{
          width: 228,
          display: 'flex',
        
          [theme.breakpoints.down('md')]: {
            width: 'auto'
          }
        }}
       
      >
        <Box component="span" sx={{ display: { xs: 'none', md: 'block' ,marginBottom : '5px' ,marginTop: '5px' }, flexGrow: 1 }}>
       
            <img className="logo1" src="../../../../../../../public/assets/Images/logo.png" alt="Logo" />
          
        </Box>
        <ButtonBase sx={{ borderRadius: '8px', overflow: 'hidden' }}>
          <Avatar
            variant="rounded"
            sx={{
              ...theme.typography.commonAvatar,
              ...theme.typography.mediumAvatar,
              transition: 'all .2s ease-in-out',
              background: theme.palette.secondary.light,
              color: theme.palette.secondary.dark,
              '&:hover': {
                background: theme.palette.secondary.dark,
                color: theme.palette.secondary.light
              }
            }}
            onClick={handleLeftDrawerToggle}
            color="inherit"
          >
            <IconMenu2 stroke={1.5} size="1.3rem" />
          </Avatar>
        </ButtonBase>

       

      </Box>
      <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ flexGrow: 1 }} />
        <Buttons />

      <ProfileSection />

    
     
  
    </>
  );
};

Header.propTypes = {
  handleLeftDrawerToggle: PropTypes.func
};

export default Header;
