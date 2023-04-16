import React from 'react'
import Menu from './Menu'
import { Col, Row } from 'react-bootstrap'
import UserPage from './UserPage'


export default function Home() {
  return (
    <div>
        <Row>
            <Col sm={2}>
        <div className='menu-container'>
        <Menu/>
        </div>
        </Col>
        <Col sm={10}>
           <UserPage/>
        </Col>
        </Row>
    </div>
  )
}
