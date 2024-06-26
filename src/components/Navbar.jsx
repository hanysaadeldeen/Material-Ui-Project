import { AppBar, Avatar, Badge, InputBase, Menu, Toolbar, Typography, styled } from "@mui/material"


import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import NightlightIcon from '@mui/icons-material/Nightlight';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import MailIcon from '@mui/icons-material/Mail';
import { Notifications } from "@mui/icons-material";
import { useState } from "react";
const StyledToolbar = styled(Toolbar)(
    {
        display: "flex",
        justifyContent: "space-between"
    }
)
const Search = styled("div")(({ theme }) => {
    return {
        background: "white",
        borderRadius: theme.shape.borderRadius,
        width: "40%",
        padding: "5px 15px"
    };
});
const Icons = styled("div")({
    padding: "10px 20px",
    display: "flex",
    gap: "15px",
    alignItems: "center"

})

const Navbar = () => {
    const items = [
        { text: 'Home', href: "/", icon: <HomeIcon /> },
        { text: 'About', href: "/", icon: <InfoIcon /> },
        { text: 'Pages', href: "/", icon: <MenuBookRoundedIcon /> },
        { text: 'Groups', href: "/", icon: <GroupRoundedIcon /> },
        { text: 'Store', href: "/", icon: <StorefrontRoundedIcon /> },
        { text: 'Setting', href: "/", icon: <SettingsIcon /> },
        { text: 'Profile', href: "/", icon: <Person2RoundedIcon /> },

    ]
    const [open, setOpen] = useState(false)
    return (

        <AppBar position="sticky">
            <StyledToolbar>
                <Typography
                    variant="h6" sx={{
                        display: {
                            xs: "none",
                            sm: "block"
                        }
                    }}>Hany-Mohamed
                </Typography>
                <CodeOffIcon
                    sx={{
                        display: {
                            xs: "block",
                            sm: "none"
                        },
                        size: "30px"
                    }} />

                <Search>
                    <InputBase sx={{ width: "100%", color: "black" }} placeholder="Search" />
                </Search>
                <Icons>
                    <Badge
                        sx={{
                            display: {
                                xs: "none",
                                sm: "block"
                            }
                        }}
                        badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                    <Badge
                        sx={{
                            display: {
                                xs: "none",
                                sm: "block"
                            }
                        }}
                        badgeContent={4} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar

                        sx={{ width: 35, height: 35 }} src="https://mui.com/static/images/avatar/1.jpg"
                        onClick={() => setOpen(!open)}
                    />
                    <Typography sx={{ display: { sm: "none" } }} variant="span">Hany-mohamed </Typography>
                </Icons>
            </StyledToolbar>

            <Menu
                sx={{
                    display: {
                        xs: "flex",
                        sm: "none"
                    }
                }}
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"

                open={open}
                onClose={() => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                {/* <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem> */}
                <List >
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
            </Menu>
        </AppBar>
    )
}

export default Navbar