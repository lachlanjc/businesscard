#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  handle: chalk.cyan('lachlanjc'),
  name: chalk.white('Lachlan Campbell'),
  now: chalk.white('Web designer-dev – IMA @ NYU, ’23'),
  twitter: chalk.cyan('twitter.com/lachlanjc'),
  github: chalk.cyan('github.com/lachlanjc'),
  glitch: chalk.cyan('glitch.com/@lachlanjc'),
  web: chalk.cyan('lachlanjc.me'),
  npx: chalk.white('npx lachlanjc'),
  labelNow: chalk.white.bold('       Now:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelGlitch: chalk.white.bold('    Glitch:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.white.bold('      Card:')
}

// Actual strings we're going to output
const nl = '\n'
const heading = `@${data.handle} – ${data.name}`
const nowing = `${data.labelNow}  ${data.now}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const glitching = `${data.labelGlitch}  ${data.glitch}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading + nl + nl + nowing + nl + twittering + nl + githubing + nl + glitching + nl + webing + nl + nl + carding

console.log(chalk.cyan(boxen(output, options)))
