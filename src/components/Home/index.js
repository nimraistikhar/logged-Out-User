import React from 'react'
import Footer from '../Footer'
import Nav from '../Navbar/Navbar'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HomeContainer = styled.div`
    height: 80vh;
    position: relative;
`

const Container = styled.div`
    text-align: center;
    position: absolute;
    top: 43%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;

    h1 {
        font-size: 3.5rem;
        font-weight: 600;
        @media (max-width: 310px) {
            font-size: 3rem;
        }
        @media (max-width: 266px) {
            font-size: 2.5rem;
        }
    }

    p {
        font-size: 1.2rem;
        font-weight: 500;
        color: #949494;
        margin-bottom: 1rem;

        @media(max-width: 904px) {
            font-size: 1.15rem;
        }
        @media(max-width: 867px) {
            font-size: 1rem;
        }
        @media (max-width: 324px) {
            width: 80%;
            margin: 0 auto;
            margin-bottom: 1.5rem;
        }
    }

    .btn {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        width: 30%;

        @media (max-width: 1182px) {
            width: 40%;
        }
        @media (max-width: 886px) {
            width: 50%;
        }
        @media (max-width: 717px) {
            width: 60%;
        }
        @media (max-width: 600px) {
            width: 70%;
        }
        @media (max-width: 518px) {
            width: 80%;
        }
        @media (max-width: 448px) {
            width: 90%;
        }
        @media (max-width: 399px) {
            width: 95%;
        }
        @media (max-width: 359px) {
            font-size: .9rem;
        }
        a {
            text-decoration: none;
            font-size: 1rem;
            font-weight: 500;
            padding: .6rem 1.8rem;
            margin-right: .5rem;
            margin-left: .5rem;
            border-radius: 5px;
            @media (max-width: 350px) {
                font-size: .9rem;
            }
            @media (max-width: 330px) {
                font-size: .8rem;
            }
            @media (max-width: 310px) {
                padding: .4rem 1rem;
            }
        }

        .sub-art {
            font-weight: 600;
        }
    }
`

const Home = () => {
    return (
        <div>
            <Nav />
            <HomeContainer>
                <Container>
                    <h1>7Cerebrum</h1>
                    <p>Submit your music/art and be a part of our journey.</p>
                    <div className="btn">
                        <Link className="sub-art" to="#">SubmitArt</Link>
                        <Link className="music" to="#">Submit Music</Link>
                    </div>
                </Container>
            </HomeContainer>
            <Footer />
        </div>
    )
}

export default Home
