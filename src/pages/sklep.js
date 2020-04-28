import React from "react"
import styled from "styled-components"

import MainLayout from "../components/MainLayout"
import SEO from "../components/atoms/seo"

const Section = styled.section`
  margin: 0 auto;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ShopPage = ({ data }) => (
  <MainLayout>
    <SEO title="Sklep" />
    <Section>
      <h1>Strona w trakcie budowy</h1>
    </Section>
  </MainLayout>
)

export default ShopPage
