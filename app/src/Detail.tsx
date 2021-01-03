import React from 'react'
import { Box, Card, CardContent } from '@material-ui/core'
import { useParams } from 'react-router-dom'
import { AppBar } from './AppBar'

export const Detail = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <>
      <AppBar title={`data: ${id}`} />
      <Box display="flex" justifyContent="center">
        <Card style={{ width: 300, marginTop: 16 }}>
          <CardContent>hello: {id}</CardContent>
        </Card>
      </Box>
    </>
  )
}
