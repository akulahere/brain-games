#!/usr/bin/env node
import runGame from '../src/index.js';
import { gcd as game, gcdGameDescription as gameDescription } from '../src/games/gcd.js';

runGame(game, gameDescription);
