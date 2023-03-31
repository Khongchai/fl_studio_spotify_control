const textDecoder = new TextDecoder();
const port = 5000;
const listener = Deno.listen({ port });
console.log("listening on 0.0.0.0:" + port);

for await (const conn of listener) {
  const buf = new Uint8Array(1024);
  while (true) {
    await conn.read(buf);
    const decodedMessage = textDecoder.decode(buf);
    console.log("Received", decodedMessage);

    // Do spotify thingy here.
  }
}

console.log("Connection end");
