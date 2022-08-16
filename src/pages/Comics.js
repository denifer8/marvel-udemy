import React, { useState } from 'react';
import {Grid, Header } from 'semantic-ui-react';
import Container from '../components/Container'
import ListComics from '../components/ListComics/ListComics';
import useFetch from '../hooks/useFetch';


export default function Comics() {
  const [renderComics, setRenderComics] = useState(10);
  const listComics = useFetch(`${process.env.REACT_APP_URL_BASE}comics?ts=1&apikey=${process.env.REACT_APP_API_KEY_MARVEL}&hash=${process.env.REACT_APP_HASH_IP}&orderBy=title&limit=${renderComics}`);

  return (
    <div className='comic-page'>
      <div id="slide-comics-image"/>
        <Grid>
          <Grid.Column>
            <Container bg="light">
              <Header as="h2">Los mejores Comics</Header>
              <ListComics listComics={listComics}/>
            </Container>
          </Grid.Column>
        </Grid>
    </div>
  )
}
