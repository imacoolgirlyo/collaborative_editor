import { useState, useCallback } from 'react' 
import styled from '@emotion/styled'
import EditableBlock from './EditableBlock'


const Block = styled.div`
  width: 800px;
  height: 800px;
`

const MyEditor = () => {
  const [blocks, setBlocks] = useState([1, 2])

  const handleEnterKeyDownHandle = useCallback((event) => {
    console.log('enter key down')
  },[])
  
  return (
    <Block>
      {blocks.map(block => 
        <EditableBlock onEnterKeyDownHandler={handleEnterKeyDownHandle}/>
      )}
    </Block>
  )
}

export default MyEditor
