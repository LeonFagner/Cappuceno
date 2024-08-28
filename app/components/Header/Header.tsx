"use client";

import { Saira_Stencil_One } from 'next/font/google';
import React from 'react';
import styled from "styled-components";
import { PrimaryInput, PrimaryInputSearchIcon } from '../Primary-input';
import { CartControl } from '../CartControl';

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
  height: 70px;
  color: black;
  padding: 34px 160px;

  > div{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
  }
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
        <CartControl/>
        
      </div>
    </MyHeader>
  );
}
