import { Box } from "@mui/material"

const AhaBar = () => {
    return (
        <Box
            flex={2} p={2}
            sx={{
                bgcolor: "pink",
                display: {
                    xs: "none",
                    sm: "block"
                }

            }}
        >rightbar</Box>
    )
}

export default AhaBar