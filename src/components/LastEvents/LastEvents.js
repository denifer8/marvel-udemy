import React from 'react';
import { Icon, Image, Card, Dimmer, Loader, Button } from 'semantic-ui-react';
import './LastEvents.scss';

export default function LastEvents({lastEventFetch}) {
    const { loading, result } = lastEventFetch;
    
    if (loading || !result) 
        return (
        <Dimmer active inverted>
            <Loader inverted>Loading...</Loader>
        </Dimmer> )
   
    const { results } = result.data;
    console.log(results)
  
    return (

   
         results.map( (event, index) => (
                <Card key={index} className="last-event">
                    <Image src={`${event.thumbnail.path}.${event.thumbnail.extension}`} alt={`${event.title}`} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{event.title}</Card.Header>
                        <Card.Meta>
                            <span>
                                <Icon name="book" />
                                {event.comics.available}Comics
                            </span>
                        </Card.Meta>
                        <Card.Description>{event.description}</Card.Description>
                    </Card.Content>
                    <Card.Content>
                        <Button animated fluid as="a" href={event.urls[0].url} target="_blank" color='black'>
                            <Button.Content visible>Ver evento</Button.Content>
                            <Button.Content hidden>
                                <Icon name='arrowright'/>
                            </Button.Content>
                        </Button>
                    </Card.Content>
                </Card>
                
            ))

        


  )
}
