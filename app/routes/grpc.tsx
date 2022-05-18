import { Flex, Heading, Text } from "@chakra-ui/react";
import { json, LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { client } from "~/server/grpc.server";

export const loader: LoaderFunction = async () => {
  const response = await client.sayHello({ name: 'Lucas' });

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
