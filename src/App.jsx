

import { Box, Stack } from "@mui/material"
import Feed from "./components/Feed"
import Sidebar from "./components/Sidebar"
import AhaBar from "./components/Ahabar"
import Navbar from "./components/Navbar"
function App() {

  return (
    <Box>
      <Navbar />
      <Stack justifyContent={"space-between"} direction={"row"} sx={{ gap: "20px" }}>
        <Sidebar />
        <Feed />
        <AhaBar />
      </Stack>
      {/* <Footer /> */}

    </Box>
  )
}

export default App
