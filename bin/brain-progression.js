#!/usr/bin/env node
import gameRunner from '../src/index.js';
import { progression as game, progressionGameDescription as gameDescription } from '../src/games/progression.js';

gameRunner(game, gameDescription);
