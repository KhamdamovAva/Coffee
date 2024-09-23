import React from 'react'
import './style.scss'

import headerImg from '../../assets/img/header.png'
function Header() {
  return (
    <>
      <header className='header'>
        <div className="container">
          <div className="wrapper">
            <div className="wrapper__descr">
              <h1 className='wrapper__descr-title'>Encontre o café perfeito para qualquer hora do dia</h1>
              <p className='wrapper__descr-subtitle'>Com o Coffe Delivery você recebe seu café onde estiver, a qualquer hora</p>
              <div className="wrapper__blocks">
                <div className="wrapper__blocks-content">
                  <svg className='content__svg' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M223.9,65.4l-12.2,66.9A24,24,0,0,1,188.1,152H72.1l4.4,24H184a24,24,0,1,1-24,24,23.6,23.6,0,0,1,1.4-8H102.6a23.6,23.6,0,0,1,1.4,8,24,24,0,1,1-42.2-15.6L34.1,32H16a8,8,0,0,1,0-16H34.1A16,16,0,0,1,49.8,29.1L54.7,56H216a7.9,7.9,0,0,1,6.1,2.9A7.7,7.7,0,0,1,223.9,65.4Z"></path></svg>
                  <p className='wrapper__blocks-content--text'>Compra simples e segura</p>
                </div>
                <div className="wrapper__blocks-content">
                  <svg className='content__svg content__svg-yellow' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M229.9,70.8h0a.1.1,0,0,1-.1-.1,16.2,16.2,0,0,0-6-5.9l-88-49.5a16,16,0,0,0-15.6,0l-88,49.5a16.2,16.2,0,0,0-6,5.9.1.1,0,0,1-.1.1v.2A15,15,0,0,0,24,78.7v98.6a16.1,16.1,0,0,0,8.2,14l88,49.5a16.5,16.5,0,0,0,7.2,2h1.4a15.7,15.7,0,0,0,7-2l88-49.5a16.1,16.1,0,0,0,8.2-14V78.7A15.6,15.6,0,0,0,229.9,70.8ZM128,29.2,207.7,74,177.1,91.4,96.4,46.9Zm.9,89.6L48.4,74,80,56.2l80.8,44.5Zm7.2,103.5.8-89.6L169,114.4v38.1a8,8,0,0,0,16,0V105.3l31-17.6v89.6Z"></path></svg>
                  <p className='wrapper__blocks-content--text'>Embalagem mantém o café intacto</p>
                </div><div className="wrapper__blocks-content">
                  <svg className='content__svg content__svg-dark' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M104,16h48a8,8,0,0,0,0-16H104a8,8,0,0,0,0,16Z"></path><path d="M128,32a96,96,0,1,0,96,96A96.2,96.2,0,0,0,128,32Zm45.3,62.1-39.6,39.6a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4l39.6-39.6a8.1,8.1,0,1,1,11.4,11.4Z"></path></svg>
                  <p className='wrapper__blocks-content--text'>Entrega rápida e rastreada</p>
                </div><div className="wrapper__blocks-content">
                  <svg className='content__svg content__svg-purple' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M80,56V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0Zm40,8a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,120,64Zm32,0a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,152,64Zm96,56v8a40,40,0,0,1-37.5,39.9,98,98,0,0,1-27,40.1H208a8,8,0,0,1,0,16H32a8,8,0,0,1,0-16H56.5A96.4,96.4,0,0,1,24,136V88a8,8,0,0,1,8-8H208A40,40,0,0,1,248,120Zm-16,0a24,24,0,0,0-16-22.6V136a92.9,92.9,0,0,1-1.2,15A24,24,0,0,0,232,128Z"></path></svg>
                  <p className='wrapper__blocks-content--text'>O café chega fresquinho até você</p>
                </div>
              </div>
            </div>
            <div className="wrapper__picture">
              <img src={headerImg} alt="Coffee picture" />
            </div>
          </div>
        </div>
      </header>

    </>
  )
}

export default Header
