import { useState } from 'react'
// import styled from '@emotion/styled'
import {
  Editor,
  EditorState,
  // convertToRaw,
  getDefaultKeyBinding
  // KeyBindingUtil
} from 'draft-js'

function myKeyBindingFn (event) {
  if (event.keyCode === 13) {
    return 'make-new-block'
  }
  return getDefaultKeyBinding(event)
}

const EditableBlock = ({ onEnterKeyDownHandler }) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  )

  const handleKeyCommand = command => {
    if (command === 'make-new-block') {
      onEnterKeyDownHandler()
      return 'handled'
    }
    return 'not-handled'
  }
  return (
    <div style={{ border: '1px solid red', height: '30px' }}>
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        handleKeyCommand={handleKeyCommand}
        keyBindingFn={myKeyBindingFn}
      />
    </div>
  )
}

export default EditableBlock
