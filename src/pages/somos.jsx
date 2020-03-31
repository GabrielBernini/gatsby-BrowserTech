import React from 'react'
import Layout from '../components/Layout'
import CardV2 from '../components/CardSomos'
import CardSomos from '../components/CardSomos'

import { graphql } from "gatsby"
import Img from "gatsby-image"


const Somos = () => {
  const text = 'Aqui você pode conhcer um pouco mais sobre nós'
  
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-12 py-4">
            <h1>Quem somos</h1>
            <p>{text}</p>
          </div>
        </div>
      </div>


      <div className="container">
        <div className="row">
          <div className="col-4">
            <CardSomos
              titleCard="Brener Lima"
              textCard="Olá me chamo Brener de Lucca Lima Bernardino! 
              Tenho 18 anos, moro em Londrina e atualmente sou estagiário na área de tecnologia da informação, como suporte técnico na empresa Adama Brasil S/A. Onde prestamos suporte técnico para os outros colaboradores da empresa, tanto externos quanto internos, no caso dos externos o suporte é realizado remotamente, e no caso de colaboradores internos o suporte é realizado tanto remotamente quanto presencialmente. Nós também somos responsáveis pela inclusão de usuários em nossos sistemas toda vez que uma pessoa é contratada pela empresa.
              
              Atualmente estou cursando o 3º período de Ciência da Computação na Unifil, uma universidade de Londrina, onde já aprendi diversas técnologias voltadas para a área de desenvolvimento de software, como Java, JavaScript, HTML5, CSS3 e IONIC. Atualmente estamos estudando o framework REACT, que é usado por diversas pessoas no desenvolvimento de sistemas WEB. 
              "
              styleDefault={false}
              backgroundCards="#FFFFFF"
            />
          </div>
          <div className="col-4">
            <CardSomos
              titleCard="Gabriel Bernini"
              textCard="Olá me chamo Gabriel Bernini! 
              Tenho 19 anos, moro em Londrina onde trabalho como auxiliar administrativo na empresa Eletro Londres, atuamos como uma assistência técnica onde prestamos serviços de reparo em eletroportáteis e eletrodomésticos, atendemos diversas lojas como Magazine Luiza, Lojas MM, Moveis Brasília entre outras.
              
              Estou cursando o 2º ano de Ciência da Computação na Unifil, onde aprendi diversos conceitos como HTML 5, Java Script, CSS e IONIC. Atualmente estamos aprendendo sobre o framework REACT."
              styleDefault={false}
              backgroundCards="#FFFFFF"
            />
          </div>
          <div className="col-4">
            <CardSomos
              titleCard="Luan Araujo"
              textCard="Olá me chamo Luan Gonçalves de Araujo! 
              Tenho 23 anos, moro em Londrina e atualmente trabalho na área de tecnologia da informação, como suporte técnico na empresa Uniware - Consultoria em Informática.
              Onde possuímos um software para laboratórios, clínicas e hospitais, chamado Unilab que foi desenvolvido em Delhpi e que atende centenas de clientes no Brasil. 
              Estou cursando o 2º ano de Ciência da Computação na faculdade Unifil, onde já aprendi diversos conceitos e recursos da lógica de programação e das linguagens em si, 
              como Java, JavaScript, CSS, Ionic, HTML e atualmente o framework React Native."
              styleDefault={false}
              backgroundCards="#FFFFFF"
            />
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default Somos