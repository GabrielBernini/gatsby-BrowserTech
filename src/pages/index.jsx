import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import CardPostagem from "../components/CardPostagem"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
        <div className="row">
          <div className="col-12 py-4">
            <h1>Notícias</h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
        <div className="col-4">
            <CardPostagem
              titleCard="O Impacto do COVID-19 nas empresas de tecnologia"
              textCard="Veja como o setor da tecnologia está sendo afetado pelo Coronavírus, oque esperar disso e possíveis medidas a serem tomadas para contornar isso."
              styleDefault={false}
              backgroundCards="#FFFFFF"
            />
        </div>
          
        <div className="col-4">
            <CardPostagem
              titleCard="O impacto do aumento do dolar no mundo técnologico"
              textCard="Nesta publicação iremos conversar com um investidor de tecnologia e falar um pouco sobre como o aumento do dolar pode impactar nas empresas de tecnologia."
              styleDefault={false}
              backgroundCards="#FFFFFF"
            />
        </div>

        <div className="col-4">
            <CardPostagem
              titleCard="Processamento de imagem de buraco negro"
              textCard="Veja como foi o processamento da primeira imagem de um buraco negro, como tudo foi feito e quais tecnologias foram utilizadas"
              styleDefault={false}
              backgroundCards="#FFFFFF"
            />
        </div>

        <div className="col-4">
            <CardPostagem
              titleCard="Um pouco sobre BrowserTech"
              textCard="O BrowserBlog foi uma inaciativa da matéria Projeto Interdisciplinar, onde o foco era criar um blog usando um SSG(). Optamos pelo Gatsby como ferramenta para
               desenvolvimento do mesmo. "
              styleDefault={false}
              backgroundCards="#FFFFFF"
            />
        </div>
          
        </div>
      </div>
  </Layout>
)

export default IndexPage
