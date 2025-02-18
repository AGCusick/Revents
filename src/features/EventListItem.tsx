import { Card, Stack, Heading, Image, Flex, Text, Button  } from '@chakra-ui/react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faClock, faLocationDot, faUserTie} from '@fortawesome/free-solid-svg-icons'
import EventListAttendee from './events/dashboard/dashboard/EventListAttendee'
import { AppEvent } from '@/app/layout/types/events'

type Props ={
  event: AppEvent
}

export default function EventListItem({event}: Props) {
  return (
    <>
    <Stack>
      <Card.Root size="sm" bgColor='lightGray'>
        <Card.Header>
          <Heading size="md">{event.title}</Heading>
        </Card.Header>
        <Card.Body color="fg.muted">
            <Flex direction='row'>
            <Image style={{marginRight:12}} src={event.hostPhotoURL} ></Image>
          Hosted by {event.hostedBy}
          </Flex>
        </Card.Body>
      </Card.Root>
      <Card.Root>
      <Card.Body>
      <Flex direction='row' textAlign='center' justifyContent='center'>
          <FontAwesomeIcon icon={faClock} style={{marginRight: 5}} />  
          <Text>{event.date}</Text>
          <FontAwesomeIcon icon={faLocationDot} style={{marginRight: 5, marginLeft: 15}}/>
          <Text>{event.venue}</Text>
          </Flex>
          </Card.Body>
          </Card.Root>
          <Card.Root style={{backgroundColor: 'lightgray'}}>
      <Card.Body>
        <Flex direction='row'>
          {event.attendees.map((attendee: any) =>(
            <EventListAttendee key={attendee.id} attendee={attendee} />
          ))}
          </Flex>
          </Card.Body>
          </Card.Root>
          <Card.Root style={{marginBottom: 40}}>
      <Card.Body>
      <Flex flexDirection='row' justifyContent='space-between'>
          {event.description}
          <Button variant='solid' colorPalette='cyan'>View</Button>
          </Flex>
          </Card.Body>
          </Card.Root>
    </Stack>
    </>
  )
}
 