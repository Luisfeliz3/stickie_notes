import React from 'react'

const CreateNote = ({inputText, setInputText, saveHandler}) => {
  return (
    <div className="note">

        <textarea
        cols={10}
        rows={5}
        placeholder='type..'
        value={inputText}
        onChange={setInputText((e)=>e.target.value)}
        maxLength={100}
        ></textarea>
        <div className="note_footer">
            <span className="label">{}Left   
            <button className="note_save">Save</button>
            </span>
        </div>
    </div>
  )
}

export default CreateNote