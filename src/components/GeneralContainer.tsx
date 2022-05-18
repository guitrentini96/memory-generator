import React from 'react'
import {Container, Stack} from '@mui/material'

interface Props{
    children: React.ReactNode
}

const GeneralContainer:React.FC<Props> = ({children}) => {
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center' }}>
      <Stack
        sx={{
          width: '100%',
          marginTop: '10vh',
          marginBottom:'10vh',
          minHeight: '80vh',
          padding: '10px',
          alignItems:'center'
        }}
      >
        {children}
      </Stack>
    </Container>
  )
}

export default GeneralContainer