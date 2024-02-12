import React from 'react'


//** Create is the main component that is used throug out the app
//** This component has the input setters and handlers to create a note */
const CreateNote = ({inputText, setInputText, saveHandler}) => {
    const char= 100;
    const charLimit = char - inputText.length;
  return (
    <div className='note'>
        <textarea // set to accept up to 100 characters 
        cols={10} //sets to 10 coloumns 
        rows={5} //set to 5 rows
        placeholder='Type...' // shows the actual "type.." in element
        value={inputText} //the actual user input 
        onChange={(e) => setInputText(e.target.value)}//saving to state the user input
        maxLength={100} // types up to a 100 characters 
        >
        </textarea>
        <div className='note_footer'>
            <span className='label'>{charLimit} Left</span>
            <button className='note_save' onClick={saveHandler}>Save</button>
        </div>
    </div>
  )
}

export default CreateNote

