import { AppBar, Avatar, Badge, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from "@mui/material"

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
    const [open, setOpen] = useState(false)
    return (
        <AppBar position="static">
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
                    <InputBase sx={{ width: "100%" }} placeholder="Search" />
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
                    <Typography sx={{ display: { sm: "none" } }} variant="span">Hany</Typography>
                </Icons>
            </StyledToolbar>

            <Menu
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
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar