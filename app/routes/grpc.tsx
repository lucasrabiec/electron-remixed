import { Flex, Heading, Text } from "@chakra-ui/react";
import { json, LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { client } from "~/server/grpc.server";

export const loader: LoaderFunction = async () => {
  const { message } = await client.sayHello({ name: 'Lucas' });
  let counter = '';
  for await (const response of client.serverCounter({ countRange: 10 })) {
    counter += `${response.counter} `
  }

  return json({message, counter});
}

export default function GrpcRoute() {
  const response = useLoaderData();

  return (
    <Flex p={4} gap={4} h='100vh' flexDir='column'>
      <Link to='/'><Heading>GRPC</Heading></Link>
      <Text>Message: {response.message}</Text>
      <Text>Counter: {response.counter}</Text>
    </Flex>
  )
}
