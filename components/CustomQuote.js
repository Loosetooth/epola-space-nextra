import React from "react"
import { FormatQuote } from "@mui/icons-material"
import { Paper, Typography } from "@mui/material"
import { ThemeProvider, createTheme } from '@mui/material/styles';
const muiLightTheme = createTheme({ palette: { mode: 'light' } });
const muiDarkTheme = createTheme({ palette: { mode: 'dark' } });
import { useTheme } from 'next-themes'


export const CustomQuote = (props) => {
  const { resolvedTheme } = useTheme();
  const muiTheme = resolvedTheme === 'dark' ? muiDarkTheme : muiLightTheme;

  const quoteText = props.quoteText
  const author = props.author
  const source = props.source
  return <ThemeProvider theme={muiTheme}>
    <div style={{
      width: "100%",
      display: "flex",
      justifyContent: "right",
      marginTop: "1rem",
      marginBottom: "1rem",
      textAlign: "left"
    }}>
      <Paper elevation={3} sx={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "end",
        width: "100%"
      }}>
        <Typography>
          <FormatQuote />
          {quoteText}
        </Typography>
        <div style={{
          width: 'fit-content'
        }}>
          <Typography align="left" marginTop="1rem" fontWeight={600}>
            {author}
          </Typography>
          <Typography align="left">
            {source}
          </Typography>
        </div>
      </Paper>
    </div>
  </ThemeProvider>
}