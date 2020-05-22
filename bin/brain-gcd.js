#!/usr/bin/env node
import gameRunner from '../src/index.js';
import { gcd as game, gcdGameDescription as gameDescription } from '../src/games/gcd.js';

gameRunner(game, gameDescription);
