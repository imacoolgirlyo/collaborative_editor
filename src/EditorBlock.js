import { useState } from 'react'
import styled from '@emotion/styled'
import {
  Editor,
  EditorState,
  convertToRaw,
  getDefaultKeyBinding
  // KeyBindingUtil
} from 'draft-js'
import { db } from './index'

function myKeyBindingFn (event) {
  if (event.keyCode === 13) {
    return 'make-new-block'
  }
  return getDefaultKeyBinding(event)
}

const EditorBlock = ({ setBlocks }) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  )

  function myblockRenderer (contentBlock) {
    const type = contentBlock.getType()
    const text = contentBlock.getText()
    // console.log('text: ', text)
    // console.log(type)
  }

  function handleEditorChange (editorState) {
    const { blocks } = convertToRaw(editorState.getCurrentContent())
    console.log(blocks)
    // db.collection('contents')
    //   .add({
    //     contentState
    //   })
    //   .then(docRef => {
    //     console.log(docRef.id)
    //   })

    setEditorState(editorState)
  }

  function makeNewEditorBlock () {
    setBlocks(blocks => blocks.concat(['new block']))
  }

  function handleKeyCommand (command) {
    if (command === 'make-new-block') {
      makeNewEditorBlock()
      return 'handled'
    }
    return 'not-handled'
  }

  return (
    <div style={{ border: '1px solid red', height: '30px' }}>
      <Editor
        editorState={editorState}
        onChange={handleEditorChange}
        blockRendererFn={myblockRenderer}
        handleKeyCommand={handleKeyCommand}
        keyBindingFn={myKeyBindingFn}
      />
    </div>
  )
}

export default EditorBlock
