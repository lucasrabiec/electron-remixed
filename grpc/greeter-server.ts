import { range } from "ix/asynciterable";
import { createServer } from "nice-grpc";
import {
  CountReply,
  DeepPartial,
  GreeterDefinition,
  GreeterServiceImplementation,
  HelloReply,
} from "./gen_proto/hello-world";
import { map, withAbort } from "ix/asynciterable/operators";

const impl: GreeterServiceImplementation = {
  async sayHello(request): Promise<DeepPartial<HelloReply>> {
    return { message: `Hello ${request.name}` }
  },

  async *serverCounter(request, context): AsyncIterable<DeepPartial<CountReply>> {
    yield* range(0, request.countRange).pipe(
      withAbort(context.signal),
      map((current) => ({ counter: current }))
    )
  }
}

async function main() {
  const server = createServer();

  server.add(GreeterDefinition, impl);
  await server.listen('0.0.0.0:50051')
}

main().then(() => {});
