#!/usr/bin/env node

const ora = require('ora')
const { promisify } = require('util')
const { Command } = require('commander');
const download = require('download-git-repo')
const program = new Command();

const clone = async function (repo, desc) {
  const downloads = promisify(download)
  const process = ora(`cloning => ${repo}`)

  process.start()
  await downloads(repo, desc)
  process.succeed()
}

program
  .argument('<name>', 'your project name')
  .action((name) => {
    clone('github:cleves0315/potato-tag-boilerplate', `${name}`)
  })

program.parse();
