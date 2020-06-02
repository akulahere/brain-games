#!/usr/bin/env node
import runGame from '../src/index.js';
import { prime as game, primeGameDescription as gameDescription } from '../src/games/prime.js';

runGame(game, gameDescription);
