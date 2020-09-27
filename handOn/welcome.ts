// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.
console.log("Welcome to Deno 🦕");


const url = Deno.args[0]
const res = await fetch(url);

const body = new Uint8Array(await res.arrayBuffer());
await Deno.stdout.write(body);
