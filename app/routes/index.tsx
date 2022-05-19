import { Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { NavLink, useLoaderData } from "@remix-run/react"

import { app } from "~/server/electron.server"

export function loader() {
  return {
    userDataPath: app.getPath("userData"),
  }
}

export default function Index() {
  const data = useLoaderData()
  return (
    <Flex as='main' flexDir={'column'} gap={'1rem'} p={4}>
      <Heading size='2xl' textAlign='center'>Welcome to Electron Remixed</Heading>
      <Text>Use data path: {data.userDataPath}</Text>
      <Heading size='xl'>Super duper menu:</Heading>
      <Center flexDir={'column'} gap={4}>
        <Button colorScheme={'orange'} as={NavLink} to={'/jokes'} width={300}>JOKES (remix official example)</Button>
        <Button colorScheme={'orange'} as={NavLink} to={'/files'} width={300}>FILES</Button>
        <Button colorScheme={'orange'} as={NavLink} to={'/grpc'} width={300}>GRPC</Button>
        <Button colorScheme={'orange'} as={NavLink} to={'/grpc-client-only'} width={300}>GRPC Client Only</Button>
      </Center>
    </Flex>
  )
}
