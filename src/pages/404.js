import React from "react"
import styled from "styled-components"

import MainLayout from "../layouts/MainLayout"
import SEO from "../components/molecules/SEO"

const Section = styled.section`
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const NotFoundPage = () => (
  <MainLayout>
    <SEO title="404: Not found" />
    <Section>
      <h1>Nie znaleziony strony</h1>
      <p>Przepraszamy, wybrana strona nie istnieje.</p>
    </Section>
  </MainLayout>
)

export default NotFoundPage
