const yargs = require("yargs");
const notes = require("./notes");

// Customize yargs version
yargs.version("1.1.0");

// add, remove, read, list

const yargsAddObj = {
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  }, 
  handler(argv) {
    notes.addNote(argv.title, argv.body)
    // console.log(chalk.green.inverse("Title: " + argv.title));
    // console.log(chalk.blue.inverse("Body: " + argv.body));
  }
}
// Create add command
yargs.command(yargsAddObj);

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: 'Note title',
      commandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.removeNote(argv.title)
    //console.log(chalk.red.inverse("Removing the note"));
  }
});

// Create read command
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.readNote(argv.title)
    // console.log(chalk.blue.inverse("Reading a note"));
  }
});

// Create list command
yargs.command({
  command: "list",
  describe: "List a note",
  handler() {
    notes.listNotes()
  }
});

yargs.parse();
// console.log(yargs.argv)
