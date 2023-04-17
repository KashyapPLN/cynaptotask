import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Assets from './Assets'
import Player from './Player'
import Properties from './Properties'
import MediaPlayer from './MediaPlayer'
import EditorToolBar from './EditorToolBar'
import {AiOutlinePlus} from 'react-icons/ai'
import CustomSeekBar from './SeekBar'
import Seek from './Seek'




export default function VideoEditor() {

  return (
    <div>
        <Row>
<Col sm={3}>
<Assets />
</Col>
<Col sm={6}>
<Player />
</Col>
<Col sm={3}>
<Properties/>
</Col>
        </Row>
        <Row>
            <Col>
            <div>
                <div>
                  <MediaPlayer/>
                </div>
                <div>
                  <EditorToolBar/>
                </div>
<div>
  <Seek/>
  {/* <CustomSeekBar/> */}
  <CustomSeekBar/>
 
</div>
            </div>
            </Col>
        </Row>
    </div>
  )
}
