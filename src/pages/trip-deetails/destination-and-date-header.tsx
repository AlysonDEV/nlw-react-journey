import { MapPin, Calendar, Settings2 } from "lucide-react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { api } from "../../lib/axios";
import { Button } from "../../components/button";
import { format, getMonth } from "date-fns";

interface TripProps {
  destination: string
  starts_at: string
  ends_at: string
  is_confirmed: boolean
}

export function DestinationAndDateHeader() {

  const {tripId} = useParams()
  const [trip, setTrip] = useState<TripProps | undefined>()
  const [isActiveMonth, setIsActiveMonth ] = useState(true)

  useEffect(()=>{
    api.get(`/trips/${tripId}`).then(response => {
      setTrip(response.data.trip)
      const newStartDate = new Date(response.data.trip.starts_at)
      const newEndDate = new Date(response.data.trip.ends_at)
      setIsActiveMonth( getMonth(newStartDate) == getMonth(newEndDate) )
    })
  }, [tripId])


  const displayedDate = trip
      ? isActiveMonth
        ? format(trip.starts_at, "d")
            .concat(" até ")
            .concat(format(trip.ends_at, "d 'de' LLL"))
        : format(trip.starts_at, "d 'de' LLL")
            .concat(" até ")
            .concat(format(trip.ends_at, "d 'de' LLL"))
      : null;


  return (
    <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
      <div className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <span className="text-zinc-100">{trip?.destination}</span>
      </div>

      <div className="flex items-center gap-5">
        <Calendar className="size-5 text-zinc-400" />
        <span className="text-zinc-100">{displayedDate || 'Em breve'}</span>

        <div className="w-px h-6 bg-zinc-800" />

        <Button variant="secundary">
          Alterar local/data
          <Settings2 className="size-5 " />
        </Button>

      </div>
    </div>

  )
}