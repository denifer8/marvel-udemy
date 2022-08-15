import { Card , Header } from 'semantic-ui-react';
import './ListLastEvents.scss';
import React from 'react'
import Container from '../Container';
import useFetch from '../../hooks/useFetch';
import LastEvents from '../LastEvents';

export default function ListLastEvents() {

    const lastEventFetch = useFetch(`${process.env.REACT_APP_URL_BASE}events?ts=1&apikey=${process.env.REACT_APP_API_KEY_MARVEL}&hash=${process.env.REACT_APP_HASH_IP}&orderBy=startDate&limit=5`);



 //console.log("URLFETCH:  ", urlFetch);
  return (
    <div className='conainer-list-last-event'>
       <Header size='large'>Últimos eventos</Header>    

       <Container bg='light'>
            <Card.Group itemsPerRow={5}>

                <LastEvents lastEventFetch={lastEventFetch} />


            </Card.Group>
       </Container>
    </div>
  )
}
