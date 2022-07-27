import {
  Button,
  createTheme,
  CssBaseline,
  FormControlLabel,
  FormGroup,
  Stack,
  Switch,
  ThemeProvider,
} from '@mui/material'
import React, { useState } from 'react'
import logo from '../images/Shoply..svg'

const Navbar = () => {
  const [color, setColor] = useState(false)
  const darkTheme = createTheme({
    palette: {
      mode: color ? 'light' : 'dark',
    },
  })
  const handleColor = () => {
    setColor((prev) => !prev)
  }
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main>This app is using the dark mode</main>
      <Stack spacing={2}>
        <Button>About</Button>
        <Button>Main</Button>
        <FormGroup>
          <FormControlLabel
            onClick={handleColor}
            control={<Switch />}
            label="light"
          />
          <FormControlLabel
            value={color}
            disabled
            control={<Switch />}
            label="Disabled"
          />
        </FormGroup>
      </Stack>
    </ThemeProvider>
  )
}

export default Navbar
