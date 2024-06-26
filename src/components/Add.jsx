import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, styled } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import DateRangeIcon from '@mui/icons-material/DateRange';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 280,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 3,
};


const Userbox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginTop: "15px "
})
const Add = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Tooltip title="delete" sx={{
                position: "sticky", bottom: "20px", left: {
                    xs: "calc(50% - 40px)",
                    sm: "40px"
                }
            }}>

                <Fab
                    onClick={() => setOpen(!open)}
                    color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Modal
                open={open}
                onClose={() => setOpen(!open)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} bgcolor={"background.default"} color={"text.primary"} borderRadius={4}>
                    <Typography id="modal-modal-title"
                        textAlign={"center"} color={"gray"}
                        variant="h6" component="h2"
                        fontWeight={700}
                    >
                        Text in a modal
                    </Typography>

                    <Userbox>
                        <Avatar
                            alt="me" src="https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=161&fit=crop&auto=format" />
                        <Typography
                            fontSize={16}
                            fontWeight={500}
                            variant="span">Hany mohamed</Typography>
                    </Userbox>
                    <TextField
                        sx={{ width: "100%", marginTop: "20px" }}
                        id="standard-multiline-static"
                        multiline
                        rows={2}
                        defaultValue="Write Any Thing"
                        variant="standard"
                    />
                    <Stack direction={"rows"} mt={2} mb={3} gap={1} >
                        <EmojiEmotionsIcon color="success" />
                        <PersonAddIcon color="primary" />
                        <VideoCallIcon color="secondary" />
                        <InsertPhotoIcon color="error" />
                    </Stack>
                    <ButtonGroup
                        variant="contained"
                        fullWidth
                        mt={2}>
                        <Button
                            onClick={() => setOpen(false)}
                        >Post</Button>
                        <Button
                            sx={{ width: "100px" }}
                        ><DateRangeIcon /></Button>
                    </ButtonGroup>
                </Box>
            </Modal>

        </>
    )
}

export default Add