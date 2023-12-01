import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import GalleryCard3 from '../components/gallery-card3'
import Question from '../components/question'
import './cardapio.css'

const Cardapio = (props) => {
  return (
    <div className="cardapio-container">
      <Helmet>
        <title>Cardapio - Gourmet cafe</title>
        <meta property="og:title" content="Cardapio - Gourmet cafe" />
      </Helmet>
      <div className="cardapio-header">
        <header data-thq="thq-navbar" className="cardapio-navbar-interactive">
          <Link to="/" className="cardapio-logo">
            CAFÉ GOURMET
          </Link>
          <div data-thq="thq-navbar-nav" className="cardapio-desktop-menu">
            <nav className="cardapio-links">
              <Link to="/registro">Registro de Usuário</Link>
              <Link to="/cardapio" className="cardapio-nav2">
                Catálogo de Produtos
              </Link>
              <span className="cardapio-nav3">Pedidos Online</span>
              <span className="cardapio-nav4">Personalização de Pedidos</span>
              <Link to="/pagamento" className="cardapio-nav5">
                Pagamentos 
              </Link>
            </nav>
            <div className="cardapio-buttons">
              <Link to="/registro" className="cardapio-login button">
                Login
              </Link>
              <Link to="/registro" className="cardapio-register button">
                Register
              </Link>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="cardapio-burger-menu">
            <svg viewBox="0 0 1024 1024" className="cardapio-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="cardapio-mobile-menu">
            <div className="cardapio-nav">
              <div className="cardapio-top">
                <span className="cardapio-logo1">CAFÉ GOURMET</span>
                <div data-thq="thq-close-menu" className="cardapio-close-menu">
                  <svg viewBox="0 0 1024 1024" className="cardapio-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="cardapio-links1">
                <span className="cardapio-nav11">Registro de Usuário</span>
                <span className="cardapio-nav21">Catálogo de Produtos</span>
                <span className="cardapio-nav31">Pedidos Online</span>
                <span className="cardapio-nav41">
                  Personalização de Pedidos
                </span>
                <span className="cardapio-nav51">Pagamentos Seguros</span>
              </nav>
              <div className="cardapio-buttons1">
                <button className="cardapio-login1 button">Login</button>
                <button className="cardapio-register1 button">Register</button>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="cardapio-icon04"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="cardapio-icon06"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="cardapio-icon08"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="cardapio-hero">
        <div className="cardapio-hero1">
          <div className="cardapio-container1">
            <h1 className="cardapio-hero-heading heading1">
              Cardápio de produtos do Café Gourmet 
            </h1>
            <div className="cardapio-btn-group"></div>
          </div>
        </div>
      </div>
      <div className="cardapio-details">
        <div className="cardapio-details1">
          <div className="cardapio-container2">
            <span className="cardapio-text sectionTitle">
              <span>Details</span>
              <br></br>
            </span>
            <h2 className="cardapio-details-heading heading2">
              Personalize seu café perfeito
            </h2>
            <span className="cardapio-details-sub-heading">
              Escolha o tipo de grão, intensidade, temperatura e muito mais
            </span>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTM0OTYyMXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
            className="cardapio-details-image"
          />
        </div>
      </div>
      <div className="cardapio-features">
        <div className="cardapio-features-container"></div>
      </div>
      <div className="cardapio-pricing"></div>
      <div className="cardapio-gallery">
        <div className="cardapio-gallery1">
          <h1 className="cardapio-gallery-heading heading2">
            Produtos Gourmet
          </h1>
          <span className="cardapio-gallery-sub-heading">
            Explore nossa seleção de bebidas e alimentos gourmet
          </span>
          <div className="cardapio-container3">
            <span className="cardapio-text03">Café Simples</span>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1522992319-0365e5f11656?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTM0OTYxOHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName48"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1570109635237-4653cebfb9bb?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTM0OTYxOHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName52"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1615486780246-76e6bb33e8b5?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTM0OTYxOHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName50"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1620131810504-79cc8cb61a70?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTM0OTYxOHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName51"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTM0OTYxOHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName49"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTM0OTYxOHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName53"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTM0OTYxOHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName54"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1566939937483-6eabe6f79e15?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTM0OTYxOHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName55"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1507914464562-6ff4ac29692f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTM0OTYxOHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName56"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1566304092989-5b82e58ff842?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTM0OTYxOHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName57"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1512568400610-62da28bc8a13?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTM0OTYxOHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName58"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1489596790670-72a2171a2421?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTM0OTYxOHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName59"
            ></GalleryCard3>
          </div>
        </div>
      </div>
      <div className="cardapio-banner">
        <div className="cardapio-banner1">
          <h1 className="cardapio-banner-heading heading2">
            Descubra nossa seleção exclusiva de produtos
          </h1>
          <span className="cardapio-banner-sub-heading">
            Explore nosso catálogo de bebidas, alimentos e acompanhamentos
          </span>
          <button className="cardapio-banner-button button">
            Ver catálogo completo
          </button>
        </div>
      </div>
      <div className="cardapio-faq">
        <div className="cardapio-faq-container">
          <div className="cardapio-faq1">
            <div className="cardapio-container4">
              <span className="cardapio-text04 sectionTitle">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="cardapio-text07 heading2">Common questions</h2>
              <span className="cardapio-text08">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="cardapio-container5">
              <Question
                Answer="Para se registrar no aplicativo, basta clicar no botão de registro e preencher as informações solicitadas, como nome, endereço de e-mail e senha."
                Question="Como faço para me registrar no aplicativo?"
              ></Question>
              <Question
                Answer="O aplicativo oferece diferentes opções de pagamento, incluindo cartão de crédito, débito, carteiras digitais e pagamento na entrega."
                Question="Quais são as opções de pagamento disponíveis?"
              ></Question>
              <Question
                Answer="Sim, o aplicativo permite que você personalize seu pedido de acordo com suas preferências. Você pode escolher o tipo de grão de café, intensidade, temperatura, tamanho da xícara, quantidade de açúcar, entre outros."
                Question="Posso personalizar meu pedido de acordo com minhas preferências?"
              ></Question>
              <Question
                Answer="Você pode rastrear seu pedido através do aplicativo. Basta acessar a seção 'Meus Pedidos' e você poderá ver o status do seu pedido em tempo real."
                Question="Como faço para rastrear meu pedido?"
              ></Question>
              <Question
                Answer="Sim, o aplicativo possui um programa de fidelidade. Você acumula pontos com base nos pedidos feitos e pode receber recompensas, como descontos, bebidas gratuitas ou ofertas especiais."
                Question="Existe algum programa de fidelidade disponível?"
              ></Question>
            </div>
          </div>
        </div>
      </div>
      <div className="cardapio-footer">
        <footer className="cardapio-footer1">
          <div className="cardapio-container6">
            <span className="cardapio-logo2">CAFÉ GOURMET</span>
            <nav className="cardapio-nav1 cardapio-nav1">
              <span className="cardapio-nav12">Registro de Usuário</span>
              <span className="cardapio-nav22">Catálogo de Produtos</span>
              <span className="cardapio-nav32">Pedidos Online</span>
              <span className="cardapio-nav42">Personalização de Pedidos</span>
              <span className="cardapio-nav52">Pagamentos Seguros</span>
            </nav>
          </div>
          <div className="cardapio-separator"></div>
          <div className="cardapio-container7">
            <span className="cardapio-text25">
              © 2023 myCompany, All Rights Reserved.
            </span>
            <div className="cardapio-icon-group1">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="cardapio-icon10"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="cardapio-icon12"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="cardapio-icon14"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Cardapio
