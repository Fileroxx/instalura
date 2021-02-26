import styled from 'styled-components'
import { breakpointsMedia } from '../../../../theme/utilis/breakpointsMedia'
import { css } from 'styled-components'
export const Grid = {
    Container: styled.div`
    width: 100%;
    padding-right: 28px;
    padding-left: 28px;
    margin-right: auto;
    margin-left: auto;
    max-width: initial;

    ${breakpointsMedia({
        xs: css`

        padding-right: 28px;
        padding-left: 28px;
        `,

        sm: css`
        max-width: 576px;
        padding-right: 16px;
        `,

        lg: css`
        max-width: 1160px;
        `,

        xl: css`
        max-width: 1222px;
        `,
    })}

    `,

    Row: styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: -16px;
    margin-right: -16px;

    `,
    
    Col: styled.div`
        padding-right: 16px;
        padding-left: 16px;
        flex-basis: 0;
        flex-grow: 1;
        max-width: 100%;

    ${function({ value }) {
        if(typeof value === 'number'){
        return css`
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: ${(100 * value) / 12}%;
        max-width: ${(100 * value) / 12}%;
        `
        }
        
        return breakpointsMedia({
            xs: value?.xs
              ?  css`
                flex-grow: 0;
                flex-shrink: 0;
                flex-basis: ${(100 * value.xs) / 12}%;
                max-width: ${(100 * value.xs) / 12}%;
                
            `
            :'',

            sm: value?.sm
              ?  css`
                flex-grow: 0;
                flex-shrink: 0;
                flex-basis: ${(100 * value.sm) / 12}%;
                max-width: ${(100 * value.sm) / 12}%;
                
            `
            :'',

            md: value?.md
              ?  css`
                flex-grow: 0;
                flex-shrink: 0;
                flex-basis: ${(100 * value.md) / 12}%;
                max-width: ${(100 * value.md) / 12}%;
                
            `
            :'',

            lg: value?.lg
              ?  css`
                flex-grow: 0;
                flex-shrink: 0;
                flex-basis: ${(100 * value.lg) / 12}%;
                max-width: ${(100 * value.lg) / 12}%;
                
            `
            :'',

            xl: value?.xl
              ?  css`
                flex-grow: 0;
                flex-shrink: 0;
                flex-basis: ${(100 * value.xl) / 12}%;
                max-width: ${(100 * value.xl) / 12}%;
                
            `
            : '',       
        })
    }}


${function({ value }) {
        if(typeof value === 'number'){
        return css`
        margin-left: ${(100 * offset / 12)}%;
        `
        }
      }}
    `,
};