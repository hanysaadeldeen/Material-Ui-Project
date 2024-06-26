import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import React from "react"

const AhaBar = () => {
    const itemData = [
        { img: "https://images.unsplash.com/photo-1549388604-817d15aa0110?w=161&fit=crop&auto=format", title: "one" },
        { img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=161&fit=crop&auto=format", title: "two" },
        { img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=161&fit=crop&auto=format", title: "three" },
    ]
    return (
        <Box
            flex={2} p={2}
            sx={{
                display: {
                    xs: "none",
                    sm: "block"
                }
            }}
        >
            <Box position={"fixed"} overflow={"auto"}>
                <Typography variant="h6" marginBottom={2} fontWeight={"100"}>Online Friends</Typography>
                <AvatarGroup sx={{ flexDirection: "row" }} max={7}  >
                    <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
                    <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
                    <Avatar alt="Cindy Baker" src="" />
                    <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/5.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/4.jpg" />
                </AvatarGroup>
                <Typography variant="h6" fontWeight={"100"} marginBottom={2} marginTop={3}>Latest Image</Typography>
                <ImageList sx={{ width: 400, height: 150 }} variant="woven" cols={3} gap={4}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=161&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
                <Typography variant="h6" fontWeight={"100"} marginBottom={2} marginTop={3}>Latest Conversations</Typography>

                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/3.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        to Scott, Alex, Jennifer
                                    </Typography>
                                    {" — Wish I could come, but I'm out of town this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>

                </List>
            </Box>
        </Box>
    )
}

export default AhaBar