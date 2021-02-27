import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
    text-align: center;
    margin-bottom: 1rem;
`

export const FooterContent = styled.div`
    
`

export const Social = styled(Link)`
    text-decoration: none;
    color: #949494;
    padding: 0 .8rem;
    font-weight: 600;
    font-size: .9rem;
    transition: color 0.3s ease-in;

    @media (max-width: 403px) {
        font-size: .7rem;
    }
    @media (max-width: 343px) {
        font-size: .6rem;
    }

    &:hover {
        color: #212121;
    }
`