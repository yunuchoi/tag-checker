# Tag Checker

## Assumptions

1. The count of tags in a paragraph and the length of a paragraph are finite, countable and computationally manageable.
2. Paragraphs without tags are correctly tagged paragraphs.
3. Paragraphs do not have tags nested inside the same tag (e.g. `<B><B>No nesting like this.</B></B>`)
4. Tags do not contain any attributes.

<br />

## Installation

1. Clone the repository to your local machine.

```bash
git clone https://github.com/yunuchoi/tag-checker.git
```

2. Navigate to the project directory.

3. Install dependencies using npm.

```bash
npm install
```

4. Compile the TypeScript file to JavaScript.

```bash
tsc
```

5. Run the program from the command line.

```bash
node dist/index.js "The following text <C><B>is centered and in boldface</B></C>"
```

<br />

## Testing

1. Navigate to the project directory.

2. Run the testing command.

```bash
npm test
```