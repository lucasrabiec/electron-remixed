import { credentials } from '@grpc/grpc-js';
import { GreeterClient } from "../../grpc/protos/hello-world";

const client = new GreeterClient('0.0.0.0:50051', credentials.createInsecure());

export const sendGreetings = (name: string) => {
  return new Promise((resolve, reject) => {
    client.sayHello({name}, (err, response) => {
      if (err) {
        reject(err);
      }
      resolve(response);
    });
  });
}