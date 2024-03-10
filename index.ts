import { validateTagNames } from "./src/validateTagNames";

const paragraph: string = process.argv[2];

if (!paragraph) {
    console.error('ERROR: Please provide a paragraph.');
    process.exit(1);
}

const output: string = validateTagNames(paragraph);
console.log(output);