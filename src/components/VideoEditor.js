import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Assets from './Assets'
import Player from './Player'
import Properties from './Properties'
import MediaPlayer from './MediaPlayer'
import DragNDrop from './DragNDrop'
import Scale from './Scale'
import LeftNavBar from './LeftNavBar'
import ProjectSettings from '../css-files/ProjectSettings'




export default function VideoEditor() {

  return (
    <div>
        <Row>
<Col sm={3}>
<Row>
<Col sm={3}>
<LeftNavBar/>
</Col>
<Col sm={9}>
<ProjectSettings/>
</Col>
</Row>
{/* <Assets /> */}
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
  {/* <Seek/> */}
  {/* <CustomSeekBar/> */}
  {/* <CustomSeekBar/>
  <VideoTrimmer/> */}
 {/* <DragNDrop/> */}
 <Scale/>
</div>
            </div>
            </Col>
        </Row>
    </div>
  )
}
