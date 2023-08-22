import { Uuid, connect, disconnect, uuidObject } from 'orm';

console.log(new Uuid().v4())
console.log(uuidObject.v4())

async function run() {
  const connection = await connect();
  await disconnect(connection);
}
run()