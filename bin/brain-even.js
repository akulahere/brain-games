#!/usr/bin/env node
import gameRunner from '../src/index.js';
import { askIsEven as game, evenGameDescription as gameDescription } from '../src/games/even.js';

gameRunner(game, gameDescription);
