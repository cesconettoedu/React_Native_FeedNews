import React from "react"
import { Box, Image } from "native-base"



export default function Storys({ data }){
  return(
    <Box flex={1} marginBottom={4} padding={2} borderRadius={16}>
      <Box
        padding="1"
        borderRadius={10}
        bg={{
          linearGradient: {
            colors: ["lightBlue.300", "violet.800"]
          }
        }}
      >
        <Image 
          source={{ uri: data.avatarUrl }}
          width={16}
          height={16}
          borderRadius={8}
          alt="avatar url"
        />
      </Box>
    </Box>

  )
}