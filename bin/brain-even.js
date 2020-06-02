#!/usr/bin/env node
import runGame from '../src/index.js';
import { askIsEven as game, evenGameDescription as gameDescription } from '../src/games/even.js';

runGame(game, gameDescription);
