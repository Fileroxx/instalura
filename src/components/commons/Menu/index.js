import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../../../theme/Logo'
import { MenuWrapper } from './styles/MenuWrapper'

export default function Menu() {
  
  
  const links = [
    {
      texto: 'Home',
      url: '/'
    },
    {
      texto: 'Perguntas frequentes',
      url: '/faq'
    },
    {
      texto: 'Sobre',
      url: '/sobre'
    },
  ]


  return (
      <MenuWrapper>
        <MenuWrapper.LeftSide>    
            <Logo /> 
        </MenuWrapper.LeftSide>
          <MenuWrapper.CenterSide>      
              {links.map(function(link) {
                return (
                  <li>
                    <a href={link.url}>
                      {link.texto}
                    </a>
                  </li>
                )
              })}
          </MenuWrapper.CenterSide>
          <MenuWrapper.RightSide>     
           <button>
            Entrar   
          </button> 
          <button>
            Cadastrar 
          </button> 
          </MenuWrapper.RightSide>
      </MenuWrapper>
   )
}