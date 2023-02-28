import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { data } from "../helpers/data"
import CharaCard from './CharaCard'
import Form from "react-bootstrap/Form"
const CardContainer = () => {
    const [search, setSearch] = useState("")
  return (
    <>
        <Form.Control 
        placeholder="Search Waifu..." 
        type="search" 
        className='w-50 m-auto'
        onChange={(e) => setSearch(e.target.value)}/>
        <Container className='card-container p-5'>
            <Row className='g-5 justify-content-center'>
                {data.filter((chara)=> chara.name.toLowerCase().includes(search.trim().toLowerCase())).map((chara, i)=>{
                    return(
                        <Col md={6} lg={4} xl={3} key={i}>
                            <CharaCard {...chara}/>
                        </Col>
                    );
                    })}
            </Row>
        </Container>
    </>
  )
}

export default CardContainer