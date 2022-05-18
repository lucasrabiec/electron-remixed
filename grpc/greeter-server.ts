import { createServer } from "nice-grpc";
import {
  DeepPartial,
  GreeterDefinition,
  GreeterServiceImplementation,
  HelloReply,
  HelloRequest
} from "./gen_proto/hello-world";

const impl: GreeterServiceImplementation = {
  async sayHello(request: HelloRequest): Promise<DeepPartial<HelloReply>> {
    return { message: `Hello ${request.name}` }
  }
}

async function main() {
  const server = createServer();

  server.add(GreeterDefinition, impl);
  await server.listen('0.0.0.0:50051')
}

main().then(() => {});
