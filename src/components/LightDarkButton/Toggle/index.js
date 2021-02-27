import React from 'react'
import { IoMdMoon, IoMdSunny } from 'react-icons/io';
import styled from 'styled-components';

const ToggleContainer = styled.div`
    @media(max-width: 880px) {
        font-size: .85rem;
    }
`

const Model = styled.div`
    display: flex;
    cursor: pointer;
    @media (max-width: 768px) {
        padding: .5rem;
    }
    
`

const ModelTheme = styled.div`
    font-size: .95rem;
    font-weight: 600;
    margin: 0 0 0 .8rem;

    @media(max-width: 880px) {
        font-size: .85rem;
    }
    @media (max-width: 768px) {
        font-size: .95rem;
    }
`

const ModelIcon = styled.div`
    font-size: 1.5rem;
    margin: -4px 5px 1px .8rem;

    @media(max-width: 880px) {
        font-size: 1.4rem;
    }
`

export const Toggle = ({ theme, toggleTheme }) => {
    return (
        <ToggleContainer onClick={toggleTheme}>
            <Model>
                <ModelTheme className="li gc">
                    { theme === 'light' ? 'Dark theme' : 'Light theme' }
                </ModelTheme>
                <ModelIcon className="li-icon">
                    { theme === 'light' ? <IoMdMoon /> : <IoMdSunny /> }
                </ModelIcon>
            </Model>
        </ToggleContainer>
    )
}
