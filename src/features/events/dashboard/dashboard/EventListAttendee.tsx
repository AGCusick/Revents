import { Attendee } from "@/app/layout/types/events"
import { Image } from "@chakra-ui/react"

type Props = {
  attendee: Attendee
}

export default function EventListAttendee({attendee}: Props) {
  return (
    <>
      <Image src={attendee.photoURL} w='35px' h='35px' rounded={50}></Image>      
      </>
  )
}
