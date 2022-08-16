import React, { useState } from 'react'
import ListSeries from '../components/ListSeries/ListSeries';
import {Grid, Header } from 'semantic-ui-react';
import Container from '../components/Container';
import useFetch from '../hooks/useFetch';

export default function Series() {
  const [renderSeries, setRenderSeries] = useState(10);
  const listSeries = useFetch(`${process.env.REACT_APP_URL_BASE}series?ts=1&apikey=${process.env.REACT_APP_API_KEY_MARVEL}&hash=${process.env.REACT_APP_HASH_IP}&orderBy=title&limit=${renderSeries}`);
  

  return (
      <div className='series-page'>
      <div id="slide-series-image"/>
        <Grid>
          <Grid.Column>
            <Container bg="light">
              <Header as="h2">Las mejores Series</Header>
              <ListSeries listSeries={listSeries}/>
            </Container>
          </Grid.Column>
        </Grid>
    </div>
  )
}
