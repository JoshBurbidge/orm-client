import * as dotenv from 'dotenv';
dotenv.config();

import { init } from 'orm';
import { User } from './model/User.js';

async function run() {
  const connection = await init()

  const one = await User.findById(34);
  console.log(one)
  // new User().delete()

  const newUser = await new User({
    // id: 60,
    username: 'newUser13',
    name: 'newName2',
    type: 'customer'
  }).save();
  console.log('new: ', newUser)

  const result = await User.findAll();
  console.log(result)

  await connection.disconnect();
}

run()