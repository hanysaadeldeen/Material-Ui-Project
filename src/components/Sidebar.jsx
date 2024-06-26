import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import NightlightIcon from '@mui/icons-material/Nightlight';
const Sidebar = () => {

    const items = [
        { text: 'Home', href: "/", icon: <HomeIcon /> },
        { text: 'About', href: "/", icon: <InfoIcon /> },
        { text: 'Pages', href: "/", icon: <MenuBookRoundedIcon /> },
        { text: 'Groups', href: "/", icon: <GroupRoundedIcon /> },
        { text: 'Store', href: "/", icon: <StorefrontRoundedIcon /> },
        { text: 'Setting', href: "/", icon: <SettingsIcon /> },
        { text: 'Profile', href: "/", icon: <Person2RoundedIcon /> },

    ]
    return (
        <Box
            flex={1} p={2}
            sx={{
                display: {
                    xs: "none",
                    sm: "block"
                }
            }}>
            <Box
                position="fixed"
            >
                <List>
                    {
                        items.map(item => {
                            return (
                                <ListItem key={item.text} disablePadding>
                                    <ListItemButton component="a" href={item.href}
                                    >
                                        <ListItemIcon>
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={item.text} />
                                    </ListItemButton>
                                </ListItem>
                            )
                        })
                    }
                    <ListItem disablePadding>
                        <ListItemButton
                        >
                            <ListItemIcon>
                                <NightlightIcon />
                            </ListItemIcon>
                            <Switch />
                        </ListItemButton>
                    </ListItem>
                </List>

            </Box>
        </Box>
    )
}

export default Sidebar