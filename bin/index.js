#!/usr/bin/env node
const { Command } = require("commander");
const Flora = require("../src/utilities/Flora");

const program = new Command();
const flora = new Flora();

program
	.name("flora.js")
	.description("A command line utility for flower nerds")
	.version("1.0.0");

program
	.command("random")
	.description("returns a random plant")
	.option("-f, --family <String>", "returns a random plant within the specified plant family", null)
	.action((options) => {
		try {
			// return a random plant within the specified family
			if (options.family) {
				const plant = flora.randomByFamily(options.family);
				return console.log(plant);
			}

			// return a random plant
			const plant = flora.random();
			return console.log(plant);
		} catch (error) {
			return console.log(error.message);
		}
	});

program.parse(process.argv);
