import React from "react";
import { Header, Button, Grid } from "semantic-ui-react";
import Container from "../Container";
import MarvelImage from "../../img/marvel.png";
import './BestCharacters.scss'

export default function BestCharacters() {
  return (
    <Container>
      <div className="best-characters">
        
        <Grid columns={3} divided="vertically">
        <Grid.Row>
          <Grid.Column width={5}>
            <Header as="h1">
              Los mejores personajes de Marvel de los que todo el mundo habla
            </Header>
            <Header as="h3">Disfruta del mejor contenido</Header>
            <Button>Ver todos los personajes</Button>
          </Grid.Column>
          <Grid.Column className="image-container"  width={6} textAlign="right"> 
            <img src={MarvelImage} alt="Marvel App" />
          </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </Container>
  );
}
