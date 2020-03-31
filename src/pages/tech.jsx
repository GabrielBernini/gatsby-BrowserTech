import React from 'react'
import Layout from "../components/Layout"

const Tech = () => {
    return(
        <Layout>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12">
                        <h1 className="primary mb-4">Tech Stack</h1>
                    </div>
                </div>
                <div className="row">
                Para o desenvolvimento do projeto optamos em usar o Gatsby, um SSG (Static Site Generator) grátis e de código aberto baseado em React com foco em tornar o desenvolvimento de sites divertido e eficiente. Para tal foi preciso fazer o uso também de: 

                Hypertext Markup Language (HTML): É uma linguagem de marcação utilizada para produção de páginas na web, que permite a criação de documentos que podem ser lidos em praticamente qualquer tipo de computador e transmitidos pela internet.

                Cascading Style Sheet (CSS): É usado para estilizar elementos escritos em uma linguagem de marcação como HTML. Com o CSS é possível alterar a cor do texto, fonte e espaçamento. É possível também criar tabelas, usar variações de layouts, ajustar imagens para suas respectivas telas e assim por diante.

                Bootstrap:  é um framework Front End utilizados por milhares de desenvolvedores, a partir dele muitas etapas dos desenvolvimentos web se tornam mais rápidas e dinâmicas, pois já trazem consigo diversos elementos prontos e estilizados.
                SASS: é uma linguagem de extensão ao CSS que dá um controle mais profissional e dinâmico para suas folhas de estilo, utilizado como um framework para compor o design de uma página.
                </div>
            </div>
        </Layout>
    )
}

export default Tech