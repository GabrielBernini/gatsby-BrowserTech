import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import * as Styled from './styled'

const Footer = () => {
    const {
        site: {
          siteMetadata: {
            copyright,
            description
          }
        }
      } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          copyright
          description
        }
      }
    }
  `)
    return (
        <div className="bg-dark">
            <div className="container">
                <div className="row text-white py-4 mt-5">
                    <div className="col-6">
                        {description}
                    </div>
                    <div className="col-6 d-flex justify-content-center align-items-center">
                        {copyright}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer