#!/usr/bin/env node

import minimist from 'minimist';
import roll from '../lib/roll.js'

const args = minimist(process.argv.slice(2))
let s=args.sides;
let d=args.dice;
let r=args.rolls;
const res = {sides: s, dice:d, rolls:roll(s,d,r)}
console.log(JSON.stringify(res))