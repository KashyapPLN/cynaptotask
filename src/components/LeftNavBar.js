import React from 'react'
import { Button, Nav, Navbar } from 'react-bootstrap'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RiSettingsFill } from 'react-icons/ri'
import { FaPlusSquare, FaFile } from 'react-icons/fa'
import { BsFileMusicFill, BsFileFontFill, BsRecordBtnFill } from 'react-icons/bs'
import { MdSubtitles } from 'react-icons/md'
import { HiTemplate } from 'react-icons/hi'

export default function LeftNavBar() {
    return (
        <div className='navContainer'>
            <Navbar expand="lg" >
                <Nav className="leftNav flex-column">
                    <Nav.Item>
                        <Nav.Link className="link">
                            <button className='navBtn'><GiHamburgerMenu className="icon" /></button>
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link className="link">
                            <button className='navBtn'> <RiSettingsFill className="icon" /></button>
                            <p>Settings</p>
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link>
                            <button className='navBtn'> <FaPlusSquare className="icon" /></button>
                            <p>Media</p>
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link>
                            <button className='navBtn'> <BsFileMusicFill className="icon" /></button>
                            <p>Audio</p>
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link>
                            <button className='navBtn'>  <MdSubtitles className="icon" /></button>
                            <p>Subtitles</p>
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link>
                            <button className='navBtn'><BsFileFontFill className="icon" /></button>
                            <p>Text</p>
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link>
                            <button className='navBtn'> <FaFile className="icon ele" /></button>
                            <p>Elements</p>
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link>
                            <button className='navBtn'> <HiTemplate className="icon" /></button>
                            <p>Templates</p>
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link>
                            <button className='navBtn'><BsRecordBtnFill className="icon" /></button>
                            <p>Record</p>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </div>
    )
}
