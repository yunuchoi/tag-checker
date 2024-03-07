# Tag Checker

## Assumptions

1. The count of tags in a paragraph and the length of a paragraph are finite, countable and computationally manageable.
2. Paragraphs without tags are correctly tagged paragraphs.


---

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