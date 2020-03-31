import styled, {css} from 'styled-components'

export const CardV2Wrapper = styled.div`
  background: ${props => props.background ? props.background : 'blue'};

  ${props =>
        props.primary &&
        css`
          background: #FFFFFF;

        h5 {
          color: #FFFFFF;
        }

        p {
          color: #FFFFFF;
        }
    `
 };
`