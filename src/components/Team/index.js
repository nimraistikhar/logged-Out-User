import React from 'react'
import styled from 'styled-components'
import Footer from '../Footer'
import Nav from '../Navbar/Navbar'

const TeamContainer = styled.div`
    height: 95vh;
    position: relative;
`

const TeamContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    h1 {
        /* color: #212121; */
        font-size: 2.2rem;
    }

    p {
        color: #949494;
        font-size: 1.1rem;
    }
`

const Team = () => {
    return (
        <div>
            <TeamContainer>
                <Nav />
                <TeamContent>
                    <h1>Team</h1>
                    <p>These are the people that makes everything run seamlessly.</p>
                </TeamContent>
            </TeamContainer>
            <Footer />
        </div>
    )
}

export default Team
