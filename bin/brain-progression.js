#!/usr/bin/env node
import runGame from '../src/index.js';
import { progression as game, progressionGameDescription as gameDescription } from '../src/games/progression.js';

runGame(game, gameDescription);
