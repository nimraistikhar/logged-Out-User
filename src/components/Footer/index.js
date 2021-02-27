import React from 'react'
import {
    FooterContainer, 
    Social
} from './FooterElement'

const Footer = () => {
    return (
        <FooterContainer>
                <Social className="li" to="/">Terms</Social>
                <Social className="li" to="/">You Tube</Social>
                <Social className="li" to="/">Twitter</Social>
                <Social className="li" to="/">Instagram</Social>
                <Social className="li" to="/">Discord</Social>
        </FooterContainer>
    )
}

export default Footer
