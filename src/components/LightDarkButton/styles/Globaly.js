import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.font};
        transition: all .5s linear;
    }

    .sub-art {
        background-color: ${({theme}) => theme.font};
        color: ${({theme}) => theme.body};
        border-color: ${({theme}) => theme.body};
    }
    .music {
        color: ${({theme}) => theme.font};
        border-color: ${({theme}) => theme.font};
        border: 2px solid;
        transition: 0.2s ease-in;
    }
    .music:hover {
        background-color: ${({theme}) => theme.font};
        color: ${({theme}) => theme.body};
        border-color: ${({theme}) => theme.font};
    }

    .google-sign {
        background-color: ${({theme}) => theme.body};
        color: ${({theme}) => theme.font};
        border-color: ${({theme}) => theme.font};
    }
    button:hover {
        background-color: ${({theme}) => theme.font};
        color: ${({theme}) => theme.body};
        border-color: ${({theme}) => theme.body};
        transition: all .5s linear;
    }
    .fas {
        color: ${({theme}) => theme.font};
    }
    input[type=text], textarea {
        background-color: ${({theme}) => theme.body};
    }
    .submit {
        background-color: ${({theme}) => theme.body};
        color: ${({theme}) => theme.sub};
    }
    .submit:hover {
        background-color: ${({theme}) => theme.submitting};
        color: ${({theme}) => theme.body};
    }
    .li:hover {
        color: ${({theme}) => theme.font};
    }
    .li-icon {
        color: ${({theme}) => theme.font};
    }
    .gc {
        color: ${({ theme }) => theme.gcp};
    }
    .gc:hover {
        color: ${({ theme }) => theme.font};
    }
    ul {
        color: ${({theme}) => theme.body};
        transition: .1s ease-in-out;
    }
    .nav-element ul {
        background-color: ${({theme}) => theme.body};
    }
    .nav .menu,
    .nav .close {
        color: ${({theme}) => theme.font};
    }
    .detail a {
        color: ${({theme}) => theme.deta};
    }
    .detail a:hover {
        color: ${({theme}) => theme.deta_hov};
    }
    .active {
        color: ${({theme}) => theme.font};
    }
`

export const lightTheme = {
    body: '#fff',
    font: '#121212',
    sub: '#404040',
    bor: '#3c3c3cb0',
    submitting: '#212121',
    navy: '#9c9c9c',
    deta: '#0a0f0f',
    gcp: '#b0b0b0',
};

export const darkTheme = {
    body: '#121212',
    font: '#fff',
    sub: '#fff',
    bor: '#fff',
    submitting: '#fff',
    navy: '#fff',
    deta: '#fff',
    gcp: '#8f8e8ee5',
}