#!/usr/bin/env node
import { askName, calcGame } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = askName();
console.log('What is the result of the expression?');
calcGame(name);
