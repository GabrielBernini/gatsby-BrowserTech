import React from 'react'
import * as Styled from './styled'

const CardSomos = (props) => {
    return (
        <Styled.CardV2Wrapper 
        className="card" 
        background={props.backgroundCards}
        primary={props.styleDefault}
        >
            <div className="card-body">
                <h5 className="card-title">{props.titleCard}</h5>
                <p className="card-text">{props.textCard}</p>
            </div>
        </Styled.CardV2Wrapper>
    )
}

export default CardSomos