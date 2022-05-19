import React from 'react'
import {Typography, Button} from "@mui/material"

interface Props{
    setStartList: React.Dispatch<React.SetStateAction<boolean>>;
}

const WelcomePage:React.FC<Props> = ({setStartList}) => {
  return (
    <>
    <Typography variant='h2'>Welcome to Memory Generator</Typography>
    <Button onClick={() => setStartList(true)} variant='contained' sx={{marginTop:'200px'}}>Start</Button>
    </>
  )
}

export default WelcomePage