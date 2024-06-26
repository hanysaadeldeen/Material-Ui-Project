

import { Box, Stack, ThemeProvider, createTheme } from "@mui/material"
import Feed from "./components/Feed"
import Sidebar from "./components/Sidebar"
import AhaBar from "./components/Ahabar"
import Navbar from "./components/Navbar"
import Add from "./components/Add"
import { useState } from "react"

function App() {
  const [mode, setMode] = useState("light")

  const Darktheme = createTheme({
    palette: {
      mode: mode,
    }
  })
  return (
    <ThemeProvider theme={Darktheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack justifyContent={"space-between"} direction={"row"} sx={{ gap: "20px" }}>
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <AhaBar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  )
}

export default App
