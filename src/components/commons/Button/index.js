import styled, { css } from 'styled-components';
import get from 'lodash/get';

const ButtonGhost = css`
background: transparent;
color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};

`;

const ButtonDefault = css`
    color: white;
    background-color: ${function(props) {
        const variant = props.variant;
        return  get(props.theme, `colors.${props.variant}.color`)
    }};
    color: ${function(props) {
        return  get(props.theme, `colors.${props.variant}.contrastText`)
    }};
`;

export const Button = styled.button`

    border: 0;
    cursor: pointer;
    padding: 12px 25px;
    font-weight: bold;
    opacity: 1;
    border-radius: 8px;
    color: white;
    background-color: #D73853;
    ${function(props) { 
     // console.log('<Button />', props.variant, props.theme, get(props.theme, `colors.${props.variant}.color`));
        if(props.ghost) {
           
            return ButtonGhost;
        }
            return ButtonDefault;
    }}
    transition: opacity ${({ theme }) => theme.transition};
    border-radius: ${({ theme }) => theme.borderRadius};
    &:hover
    , &:focus {
        opacity: .5;
    }

`;