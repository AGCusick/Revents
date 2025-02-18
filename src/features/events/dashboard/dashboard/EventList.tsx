import EventListItem from '@/features/EventListItem'
import { AppEvent } from '@/app/layout/types/events'
type Props ={
  events: AppEvent[]
}
export default function EventList(props: Props) {
  return (
    <>
    { props.events.map(event=>(
        <EventListItem key={event.id} event={event}/>

      ))}
   
    </>
  )
}
