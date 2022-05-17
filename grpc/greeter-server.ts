import { Server, ServerCredentials } from '@grpc/grpc-js';
import { GreeterService, GreeterServer } from "./protos/hello-world";

function sayHello(call: any, callback: any) {
  const reply = { message: `Hello ${call.request.name}` };
  callback(null, reply);
}

function main() {
  const server = new Server();
  const impl: GreeterServer = {
    sayHello: sayHello
  }
  server.addService(GreeterService, impl);
  server.bindAsync('0.0.0.0:50051', ServerCredentials.createInsecure(), () => {
    server.start();
  });
}

main();
