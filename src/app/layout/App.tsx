import EventDashboard from "@/features/events/dashboard/dashboard/EventDashboard"
import NavBar from "./nav/NavBar"
import { useState } from "react"
function App() {
 const [formOpen, setFormOpen] = useState(false)
  return (
    < >
   
    <NavBar setFormOpen={setFormOpen} />
    <EventDashboard setFormOpen={setFormOpen} formOpen={formOpen} />

    </>
  )
}

export default App
