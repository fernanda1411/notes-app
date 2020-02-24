const fs = require('fs')

/**
 * This function reads a json from notes.json and returns
 * an object representing the original JSON
 */
const loadNotes = () => {
    try {
        const dataJSON = fs.readFileSync('notes.json').toString() // string
        const dataJS = JSON.parse(dataJSON) // js object
        return dataJS
    } catch (e){
        return []
    }
}

/**
 * This function gets an object and write its string version to notes.json
 * @param {object} notes
 */
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
    loadNotes,
    saveNotes
}