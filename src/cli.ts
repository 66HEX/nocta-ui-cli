#!/usr/bin/env node
import { Command } from 'commander';
import chalk from 'chalk';
import { init } from './commands/init';
import { add } from './commands/add';
import { list } from './commands/list';

// Import package.json to get the version dynamically
const packageJson = require('../package.json');

const program = new Command();

program
  .name('nocta-ui')
  .description('CLI for Nocta UI Components Library')
  .version(packageJson.version);

program
  .command('init')
  .description('Initialize your project with components config')
  .action(async () => {
    try {
      await init();
    } catch (error) {
      console.error(chalk.red('Error:', error));
      process.exit(1);
    }
  });

program
  .command('add')
  .description('Add a component to your project')
  .argument('<component>', 'component name')
  .action(async (componentName: string) => {
    try {
      await add(componentName);
    } catch (error) {
      console.error(chalk.red('Error:', error));
      process.exit(1);
    }
  });

program
  .command('list')
  .description('List all available components')
  .action(async () => {
    try {
      await list();
    } catch (error) {
      console.error(chalk.red('Error:', error));
      process.exit(1);
    }
  });

program.on('command:*', () => {
  console.error(chalk.red('Invalid command: %s'), program.args.join(' '));
  console.log(chalk.yellow('See --help for a list of available commands.'));
  process.exit(1);
});

program.parse();