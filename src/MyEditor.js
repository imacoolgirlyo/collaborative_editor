import styled from '@emotion/styled'
import { Editor, EditorState } from 'draft-js'
import { useState } from 'react'

const Block = styled.div`
  width: 800px;
  height: 800px;
`

const MyEditor = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
  return (
    <Block>
      <Editor editorState={editorState} onChange={setEditorState} />
    </Block>
  )
}

export default MyEditor