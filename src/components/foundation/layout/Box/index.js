import styled  from 'styled-components';
import { propToStyle } from '../../../../theme/utilis/propToStyle';
import { theme } from '../../../../theme/index';

export const Box = styled.div`
    ${propToStyle('flex')}
    ${propToStyle('display')}
    ${propToStyle('flexDirection')}
    ${propToStyle('justifyContent')}
    ${propToStyle('flexWrap')}
    ${propToStyle('backgroundColor')}
    ${propToStyle('backgroundImage')}
    ${propToStyle('backgroundRepeat')}
    ${propToStyle('backgroundPosition')}
   
    ${propToStyle('boxShadow')}
    ${propToStyle('padding')}

    ${propToStyle('width')}
    ${propToStyle('listStyle')}
    ${propToStyle('margin')}
    ${propToStyle('marginLeft')}
    ${propToStyle('marginTop')}
    ${propToStyle('marginBottom')}
    ${propToStyle('marginRight')}
    ${({ theme, borderRadiusTheme }) => borderRadiusTheme && `border-radius: ${theme.borderRadius}`};
`;