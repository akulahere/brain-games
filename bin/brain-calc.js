#!/usr/bin/env node
import runGame from '../src/index.js';
import { calcGame as game, calcGameDescription as gameDescription } from '../src/games/calc.js';

runGame(game, gameDescription);
