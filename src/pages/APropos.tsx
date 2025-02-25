import styled from "styled-components";
import Accordion from "../components/Accordion";

function APropos() {
  return (
    <Container>
      <ImageContainer>
        <Opacity />
        <img src="./src/assets/IMG2.png" alt="décors" />
      </ImageContainer>
      <AccordionContainer>
        <Accordion title="Fiabilité">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </Accordion>
        <Accordion title="Respect">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </Accordion>
        <Accordion title="Service">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </Accordion>
        <Accordion title="Sécurité">
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </Accordion>
      </AccordionContainer>
    </Container>
  );
}

export default APropos;

const Container = styled.div``;

const ImageContainer = styled.div`
  position: relative;
  height: 223px;
  margin: 38px 100px 0px 100px;
  opacity: 1.3;

  @media (max-width: 700px) {
    margin: 20px 20px 0px 20px;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 25px;
  }
`;

const Opacity = styled.div`
  position: absolute;
  posotion: reative;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.3;
  border-radius: 25px;
`;

const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 38px 200px;

  @media (max-width: 700px) {
    margin: 20px 20px;
  }
`;
