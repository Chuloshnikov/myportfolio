import styled from "styled-components";


export const TitleColor = styled.h2`
color: ${({theme}) => theme.colors.accentColor};
`;

export const ExperienceContainer = styled.div`
    margin: 5rem 5rem;
    background: ${({theme}) => theme.colors. pageBackground};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 1rem;
    gap: 0.5rem;
    border-radius: 1rem;
    border: 3px solid ${({theme}) => theme.colors.accentHoverColor};

    @media screen and (max-width:${({theme}) => theme.layout.loptop}){
        grid-template-columns: repeat(2, 1fr);
        margin: 5rem 2.5rem;
    }

    @media screen and (max-width:${({theme}) => theme.layout.tablet}){
        grid-template-columns: repeat(1, 1fr);
        margin: 2.5rem 2.5rem;
        max-height: 400px;
        overflow: scroll;
    }

    @media screen and (max-width:${({theme}) => theme.layout.mobile}){
        grid-template-columns: repeat(1, 1fr);
        margin: 2.5rem 1rem;
    }
    
`;

export const ExperienceItem = styled.div`
background-color: ${({theme}) => theme.colors.accentHoverColor};
border-radius: 1rem;
display: flex;
flex-direction: column;
align-items: center;
padding: 2rem 0.2rem;
gap: 0.1rem;
align-self: center;
transition: all .4s ease 0s;
cursor: pointer;


&:hover {
    -webkit-box-shadow: -1px 2px 31px 19px ${({theme}) => theme.colors.accentColor};
-moz-box-shadow: -1px 2px 31px 19px ${({theme}) => theme.colors.accentColor};
box-shadow: -1px 2px 31px 19px ${({theme}) => theme.colors.accentColor};
}

div {
    display: flex;
    align-items: center;
}

p {
    font-size: 2rem;
}

svg {
    font-size: 3rem;
    margin: 0 auto;
}

@media screen and (max-width:${({theme}) => theme.layout.loptop}){
    p {
    font-size: 1.5rem;
    }

    svg {
    font-size: 2.5rem;
    }

    }

    @media screen and (max-width:${({theme}) => theme.layout.tablet}){
        padding: 1.5rem 0.2rem;
    }

    @media screen and (max-width:${({theme}) => theme.layout.mobile}){
        

        p {
    font-size: 1rem;
    }

    svg {
    font-size: 1.5rem;
    }

    }


`;