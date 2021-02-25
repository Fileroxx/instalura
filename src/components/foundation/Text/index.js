import React from 'react';
import PropTypes from 'prop-types'
import { breakpointsMedia } from '../../../theme/utilis/breakpointsMedia'
import styled, { css } from 'styled-components';
import {propToStyle} from '../../../theme/utilis/propToStyle'

export const TextStyleVariantsMap = {

     paragraph1: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.paragraph1.lineHeight};
    `,

    smallestException: css`
    font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.smallestException.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.smallestException.lineHeight};
           
    `,

}

const TextBase = styled.span`
    ${(props) => TextStyleVariantsMap[props.variant]}
    
    ${propToStyle('textAlign')}
    ${propToStyle('marginBottom')}
    ${propToStyle('margin')}

   /* ${function (props) {
        return propToStyle('textAlign', props)
    }}

    ${function(props) {
        return {
            textAlign: props.textAlign,
        }
    }} */
`;


export default function Text({tag, variant, children, ...props}) {
 return(
    <TextBase
        as={tag}
        variant={variant}
        {...props}
        //style
        //classnames
        // e por aí vai
    >
        {children}
    </TextBase>
 );
}


Text.defaultProps = {
    tag: 'span',
    variant: 'paragraph1',
}

// p
 // h1, h2... h6
  // span