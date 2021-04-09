import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import Link from '../Link';
import { TextStyleVariantsMap } from '../../foundation/Text';
import { breakpointsMedia } from '../../../theme/utilis/breakpointsMedia';
import { propToStyle} from '../../../theme/utilis/propToStyle'

const ButtonGhost = css`
color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
background: transparent;

`;

const ButtonDefault = css`
    color: white;
    background-color: ${function(props) {
        const variant = props.variant;
        return  get(props.theme, `colors.${props.variant}.color`)
    }};
    color: ${function(props) {
        return get(props.theme, `colors.${props.variant}.contrastText`)
    }};
`;

const ButtonWrapper = styled.button`

    border: 0;
    cursor: pointer;
    padding: 12px 25px;
    font-weight: bold;
    opacity: 1;
    border-radius: 8px;

    ${TextStyleVariantsMap.smallestException}

    color: white;
    background-color: #D73853;
    ${function(props) { 
     // console.log('<Button />', props.variant, props.theme, get(props.theme, `colors.${props.variant}.color`));
        if(props.ghost) {
           
            return ButtonGhost;
        }
            return ButtonDefault;
    }};
    transition: opacity ${({ theme }) => theme.transition};
    border-radius: ${({ theme }) => theme.borderRadius};
    &:hover
    , &:focus {
        opacity: .5;
    }

    ${breakpointsMedia({
        xs: css`
        /*All Devices*/
        ${TextStyleVariantsMap.smallestException}
        `,
        md: css`
        /*From md breakpoint*/
        ${TextStyleVariantsMap.paragraph1}
        `,
        lg: css`
        
            
        `,
    })}

    &:disabled {
        cursor: not-allowed;
        opacity: .2;
    }

    ${({ fullWidth }) => fullWidth && css`
        width: 100%;
    `};

    ${propToStyle('margin')}
    ${propToStyle('display')}

`;

export function Button({href, children, ...props}) {
    const hasHref = Boolean(href);
    const tag = hasHref ? Link : 'button';

    return (
        <ButtonWrapper
            as={tag}
            href={href}
            {...props}
        >
            {children}
        </ButtonWrapper>
    );
}

Button.defaultProps = {
    href: undefined,
};

Button.propTypes = {
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
};