import React from 'react'
import styled from 'styled-components'
import image from '../assets/login.jpg'
const Background = () => {
  return (
    <Container>
        <img src={image} alt='background'/>
    </Container>
  )
}

const Container = styled.div`
height :100vh;
width:100vw;

img{
    height :100vh;
width:100vw;
}


`

export default Background