import React from 'react'
import Footer from '../Footer'
import Nav from '../Navbar/Navbar'
import styled from 'styled-components'

const ContactContainer = styled.div`
    height: 95vh;
    position: relative;
`

const ContactContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 50%;

    @media (max-width: 1100px) {
        width: 60%;
    }
    @media (max-width: 870px) {
        width: 70%;
    }
    @media (max-width: 766px) {
        width: 80%;
    }
    @media (max-width: 600px) {
        width: 90%;
    }

    h1 {
        font-size: 2rem;
        letter-spacing: -1px;
        text-align: center;

        @media (max-width: 550px) {
            text-align: start;
        }
     }

    p {
        font-size: 1.05rem;
        color: #808080ad;
        margin-bottom: 1rem;
        font-weight: 500;
        text-align: center;

        @media (max-width: 550px) {
            text-align: start;
            font-size: 1rem;
        }
        @media (max-width: 400px) {
             font-size: .95rem;
         }
    }

    input[type=text]:not(:last-of-type) {
        margin-right: .5rem;

        @media (max-width: 550px) {
            margin-right: 0;
        }
    }

    input[type=text]:not(:first-of-type) {
        margin-left: .5rem;

        @media (max-width: 550px) {
            margin-left: 0;
        }
    }

    input[type=text], textarea {
        width: 100%;
        padding: 12px;
        border: 1px solid #cccccc9a;
        border-radius: 5px;
        margin-bottom: 1rem;
        resize: vertical;
        font-weight: 500;

        @media (max-width: 550px) {
             margin-bottom: .5rem;
         }
    }

    textarea {
        height: 120px;
    }

    input[type=submit] {
        font-size: 1rem;
        padding: 9px 16px;
        border-radius: 5px;
        font-weight: 500;
        letter-spacing: -.5px;
        cursor: pointer;
        transition: hover 0.2s ease-in-out;

        @media (max-width: 550px) {
             margin: 1rem 0;
         }
    }

    .form-part-1 {
        display: flex;
        @media (max-width: 550px) {
            flex-direction: column;
        }
    }


`

const Contact = () => {
    return (
        <div>
             <ContactContainer>
                 <Nav />
                <ContactContent>
                     <h1>Contact Us</h1>
                     <p>Contact us in case you got any query or just hit us up on socials.</p>

   
                     <form action="/action_page.php">
                         <div className="form-part-1">
                             <input type="text" id="fname" name="firstname" placeholder="Full Name" />
                             <input type="text" id="email" name="name" placeholder="Email" />
                         </div>
                         <textarea id="subject" name="subject" placeholder="Message"></textarea>
              
                         <input className="submit" type="submit" value="Send Message" />
                     </form>
                 </ContactContent>
        
             </ContactContainer>
             <Footer />
         </div>
    )
}

export default Contact
