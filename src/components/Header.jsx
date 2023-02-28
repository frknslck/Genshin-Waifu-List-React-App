import React from 'react'
import logo from "../assets/Logo.png"
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"

const Header = () => {
  return (
    <Container>
        <Image src={logo}></Image>
        <h1 className='mt-4 font-monospace'>Waifu List</h1>
    </Container>
  )
}

export default Header