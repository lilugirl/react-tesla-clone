import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
      <Container>
          <Section title="Model S" 
          description="Order Online for Touchless Delivery"
          backgroundImg="ms-main-hero-desktop.jpeg"
          leftBtnText="Custom order"
          rightBtnText="Existing Inventory"
           />
           <Section title="Model Y" 
          description="Order Online for Touchless Delivery"
          backgroundImg="Desktop-ModelY.jpeg"
          leftBtnText="Custom order"
          rightBtnText="Existing Inventory"
           />
           <Section title="Model 3" 
          description="Order Online for Touchless Delivery"
          backgroundImg="homepage-model-3-hero-desktop-cn.jpeg"
          leftBtnText="Custom order"
          rightBtnText="Existing Inventory"
           />
          <Section title="Model X" 
          description="Order Online for Touchless Delivery"
          backgroundImg="mx-homepage-desktop.jpeg"
          leftBtnText="Custom order"
          rightBtnText="Existing Inventory"
           />
           <Section title="Lowest Cost Solar Panels in America" 
          description="Money-back gurantee"
          backgroundImg="Desktop-SolarPanels.jpeg"
          leftBtnText="Order now"
          rightBtnText="Learn more"
           />
            <Section title="Accessories" 
          description=""
          backgroundImg="Desktop-Accessories.jpeg"
          leftBtnText="Shop now"
         
           />
     </Container>
    )
}

export default Home

const Container=styled.div`
  height:100vh
`
