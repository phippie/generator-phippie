'use strict';

var path = require('path'),
    util = require('util'),
    yeoman = require('yeoman-generator'),
    chalk = require('chalk'),
    packagejs = require('../package.json');

const constants = require('./generator-constants'),
    CLIENT_MAIN_SRC_DIR = constants.CLIENT_MAIN_SRC_DIR;

module.exports = Generator;

function Generator() {
    yeoman.Base.apply(this, arguments);
    this.env.options.appPath = this.config.get('appPath') || CLIENT_MAIN_SRC_DIR;
}

util.inherits(Generator, yeoman.Base);

/**
 * Prints a PHippie logo.
 */
Generator.prototype.printLogo = function () {
    this.log(' \n' +
        chalk.green('  ██████╗  ') + chalk.red(' ██╗  ██╗ ██╗ ██████╗  ██████╗  ██╗ ███████╗\n') +
        chalk.green('  ██╔══██╗ ') + chalk.red(' ██║  ██║ ██║ ██╔══██╗ ██╔══██╗ ██║ ██╔════╝\n') +
        chalk.green('  ██████╔╝ ') + chalk.red(' ███████║ ██║ ██████╔╝ ██████╔╝ ██║ █████╗  \n') +
        chalk.green('  ██╔═══╝  ') + chalk.red(' ██╔══██║ ██║ ██╔═══╝  ██╔═══╝  ██║ ██╔══╝  \n') +
        chalk.green('  ██║      ') + chalk.red(' ██║  ██║ ██║ ██║      ██║      ██║ ███████╗\n') +
        chalk.green('  ╚═╝      ') + chalk.red(' ╚═╝  ╚═╝ ╚═╝ ╚═╝      ╚═╝      ╚═╝ ╚══════╝\n')
    );
    this.log(chalk.white.bold('                            http://phippie.github.io\n'));
    // if (!this.skipChecks) this.checkForNewVersion();
    this.log(chalk.white('Welcome to the PHippie Generator ') + chalk.yellow('v' + packagejs.version));
    this.log(chalk.white('Documentation for creating an application: ' + chalk.yellow('https://phippie.github.io/creating-an-app/')));
    this.log(chalk.white('Application files will be generated in folder: ' + chalk.yellow(process.cwd())));
};
