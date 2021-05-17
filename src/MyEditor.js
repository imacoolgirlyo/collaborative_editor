import { useState } from 'react'
import styled from '@emotion/styled'
import {
  Editor,
  EditorState,
  convertToRaw,
  convertFromRaw,
  getDefaultKeyBinding
  // KeyBindingUtil
} from 'draft-js'

const Block = styled.div`
  width: 800px;
  height: 800px;
  .normal {
    border: 1px solid red;
    font-size: 16px;
    height: 29px;
    display: flex;
    align-items: center;
  }
`

const MyEditor = () => {
  // const getInitialState = () =>
  //   convertFromRaw(JSON.parse(window.localStorage.getItem('contents'))) ??
  //   () => EditorState.createEmpty()
  const getInitialState = () => {
    if (convertFromRaw(JSON.parse(window.localStorage.getItem('contents')))) {
      return convertFromRaw(JSON.parse(window.localStorage.getItem('contents')))
    } else {
      return () => EditorState.createEmpty()
    }
  }
  const [editorState, setEditorState] = useState(getInitialState())

  console.log(
    convertFromRaw(JSON.parse(window.localStorage.getItem('contents')))
  )

  function myblockRenderer (contentBlock) {
    const type = contentBlock.getType()
    const text = contentBlock.getText()
    // console.log('text: ', text)
    // console.log(type)
  }

  function handleEditorChange (editorState) {
    console.log(convertToRaw(editorState.getCurrentContent()))
    window.localStorage.setItem(
      'contents',
      JSON.stringify(convertToRaw(editorState.getCurrentContent()))
    )
    setEditorState(editorState)
  }

  function blockStyleFn (contentBlock) {
    const type = contentBlock.getType()
    if (type === 'unstyled') {
      return 'normal'
    }
  }

  return (
    <Block>
      <Editor
        editorState={editorState}
        onChange={handleEditorChange}
        blockRendererFn={myblockRenderer}
        blockStyleFn={blockStyleFn}
      />
    </Block>
  )
}

export default MyEditor
