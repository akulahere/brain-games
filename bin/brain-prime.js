#!/usr/bin/env node
import gameRunner from '../src/index.js';
import { prime as game, primeGameDescription as gameDescription } from '../src/games/prime.js';

gameRunner(game, gameDescription);
