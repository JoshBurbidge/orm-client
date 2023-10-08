import * as dotenv from 'dotenv';
dotenv.config();

import { init } from 'orm';
import { User } from './model/User.js';

async function run() {
  const connection = await init()

  const result = await User.findAll();
  console.log(result)

  const one = await User.findById(24);

  const newUser = await new User({
    username: 'newUser8',
    name: 'newName2',
    type: 'customer'
  }).save();
  console.log('new: ', newUser)

  await connection.disconnect();
}

run()