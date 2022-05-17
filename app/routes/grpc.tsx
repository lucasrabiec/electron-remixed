import { Flex, Heading, Text } from "@chakra-ui/react";
import { json, LoaderFunction } from "@remix-run/node";
import { sendGreetings } from "~/server/grpc.server";
import { Link, useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async () => {
  const response = await sendGreetings('Lucas');

  return json(response);
}

export default function GrpcRoute() {
  const response = useLoaderData();

  return (
    <Flex p={4} gap={4} h='100vh' flexDir='column'>
      <Link to='/'><Heading>GRPC</Heading></Link>
      <Text>Message: {response.message}</Text>
    </Flex>
  )
}