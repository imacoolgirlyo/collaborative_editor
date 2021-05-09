import { useState } from 'react'
import styled from '@emotion/styled'
import {
  Editor,
  EditorState,
  convertToRaw,
  getDefaultKeyBinding
  // KeyBindingUtil
} from 'draft-js'

const Block = styled.div`
  width: 800px;
  height: 800px;
`

const MyEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  )

  function myblockRenderer (contentBlock) {
    const type = contentBlock.getType()
    const text = contentBlock.getText()
    console.log('text: ', text)
    console.log(type)
  }

  function handleEditorChange (editorState) {
    console.log(convertToRaw(editorState.getCurrentContent()))
    setEditorState(editorState)
  }

  return (
    <Block>
      <Editor
        editorState={editorState}
        onChange={handleEditorChange}
        blockRendererFn={myblockRenderer}
      />
    </Block>
  )
}

export default MyEditor
