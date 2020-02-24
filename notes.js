const utils = require('./utils')
const chalk = require('chalk')

// API

const addNote = (title, body) => {
    const notes = utils.loadNotes()
    // const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
    
        utils.saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const removeNote = (title) => {
    const notes = utils.loadNotes() 
    const updatedNotes = notes.filter(el => el.title !== title)

    if(notes.length > updatedNotes.length){
        console.log(chalk.green.inverse('Note removed!'))
        utils.saveNotes(updatedNotes)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }    
}

const readNote = (title) => {
    const notes = utils.loadNotes()
    const note = notes.find((note) => note.title === title)

    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.inverse.red('Note not found!'))
    }
}

const listNotes = () => {
    const notes = utils.loadNotes() 
    console.log(chalk.inverse('Your notes'))

    notes.forEach((note) => {
        console.log(note.title)
    })

}

const getNotes = () => {
    const notes = utils.loadNotes();
    return notes;
}

const getNote = (title) => {
    const notes = utils.loadNotes();
    return notes[title];
}

module.exports = {
    addNote,
    removeNote,
    getNotes,
    getNote,
    listNotes,
    readNote
}