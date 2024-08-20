"use client";

import { Saira_Stencil_One } from 'next/font/google';
import React from 'react';
import styled from "styled-components";
import { PrimaryInput, PrimaryInputSearchIcon } from './Primary-input';

const sairaStencil = Saira_Stencil_One({
    weight: ['400'],
    subsets: ['latin']
})

interface HeaderProps{
    
}
// Definindo um styled-component para o header
const MyHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  color: black;
  padding: 20px 160px;
`;
const Logo = styled.a`
    color: var(--logo-color);
    font-weight: 400;
    font-size: 40px;
    line-height: 150%;
`; 

export default function Header() {
  return (
    <MyHeader>
      <Logo className={sairaStencil.className}>Capputeno</Logo>
      <div>
        <PrimaryInputSearchIcon placeholder='Procurando por algo específico?'/>
        
      </div>
    </MyHeader>
  );
}
