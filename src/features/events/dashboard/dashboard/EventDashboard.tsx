
import {SimpleGrid, Box } from "@chakra-ui/react"
import EventList from "./EventList"
import EventForm from "./form/EventForm"
import { sampleData } from "@/app/layout/api/sampleData"
import { useState, useEffect } from "react"
type Props = {
  formOpen: boolean
  setFormOpen: (value: boolean) => void
}
export default function EventDashboard({formOpen, setFormOpen}: Props) {
  const [events, setEvents] = useState<AppEvent[]>([])
  
  useEffect(() =>{
    setEvents(sampleData);
  },[]);

  return (
    <SimpleGrid p="10px" columns={2} w='100%' gap={2} minChildWidth="250px">
        {/* first column */}
        <Box>
            <EventList events={events} />
        </Box>
        {/* second column */}
        <Box>
            {formOpen && 
            <EventForm setFormOpen={setFormOpen} />}
        </Box>
    </SimpleGrid>
  )
}
