import { createChannel, createClient } from "nice-grpc";
import { GreeterClient, GreeterDefinition } from "../../grpc/gen_proto/hello-world";

const channel = createChannel('localhost:50051');

export const client: GreeterClient = createClient(
  GreeterDefinition,
  channel,
);
