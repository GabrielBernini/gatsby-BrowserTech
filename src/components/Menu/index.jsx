import React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Menu = () => {
    const {logo} = useStaticQuery(graphql`
    query {
        logo: file(relativePath: { eq: "logopi.jpeg" }) {
          childImageSharp {
            fixed(width: 35, height: 35) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `)
    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <Link className="navbar-brand" to="">
            <Img fixed={logo.childImageSharp.fixed} alt="Logo"/>
        </Link>
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link to="" activeStyle={{ color: "red" }} className="nav-link" activeClassName="active">Blog</Link>
            </li>
            <li className="nav-item">
                <Link to="/projetos" activeStyle={{ color: "red" }} className="nav-link" activeClassName="active">Projetos Pessoais</Link>
            </li>
            <li className="nav-item">
                <Link to="/tech" activeStyle={{ color: "red" }} className="nav-link" activeClassName="active">Tech Stack</Link>
            </li>
            <li className="nav-item">
                <Link to="/somos" activeStyle={{ color: "red" }} className="nav-link" activeClassName="active">Quem Somos</Link>
            </li>
        </ul>
    </nav>
    )
}

export default Menu