import React from 'react';
import styled, { css } from 'styled-components';

export const TextStyleVariantMap = {

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
    ${(props) => TextStyleVariantMap[props.variant]}
`;


export default function Text({tag, variant, children}) {
 return(
    <TextBase
        as={tag}
        variant={variant}
    >
        {children}
    </TextBase>
 );
}

Text.propTypes = {
    tag: PropTypes.string.isRequired,
    variant: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
}

Text.defaultProps = {
    tag: 'span',
    variant: 'paragraph1',
}

// p
 // h1, h2... h6
  // span