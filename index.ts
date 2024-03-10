import { validateTags } from "./src/validateTags";

const paragraph: string = process.argv[2];

if (!paragraph) {
    console.error('ERROR: Please provide a paragraph.');
    process.exit(1);
}

const output: string = validateTags(paragraph);
console.log(output);