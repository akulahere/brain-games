#!/usr/bin/env node
import gameRunner from '../src/index.js';
import { calcGame as game, calcGameDescription as gameDescription } from '../src/games/calc.js';

gameRunner(game, gameDescription);
