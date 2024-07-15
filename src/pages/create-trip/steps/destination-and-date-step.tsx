import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react";
import { Button } from "../../../components/button";
import { useState } from "react";
import { DateRange, DayPicker} from "react-day-picker";

import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean;
  closeGuestsInput: () => void;
  openGuestsInput: () => void;
  setDestination: (destination: string)=>void;
  destination: string;
  setEventDatasAndDates: (dates: DateRange | undefined)=>void;
  eventStartAndDates: DateRange | undefined
}

export function DestinationAndDateStep({
  isGuestsInputOpen,
  closeGuestsInput,
  openGuestsInput,
  setDestination,
  destination,
  setEventDatasAndDates,
  eventStartAndDates,
}: DestinationAndDateStepProps) {
  const [isDayPickerOpen, setIsDayPickerOpen] = useState(false);

  const displayedDate =
    eventStartAndDates && eventStartAndDates.from && eventStartAndDates.to
      ? eventStartAndDates.from.getMonth() == eventStartAndDates.to.getMonth()
        ? format(eventStartAndDates.from, "d")
            .concat(" até ")
            .concat(format(eventStartAndDates.to, "d 'de' LLL"))
        : format(eventStartAndDates.from, "d 'de' LLL")
            .concat(" até ")
            .concat(format(eventStartAndDates.to, "d 'de' LLL"))
      : null;

  function openDayPicker() {
    setIsDayPickerOpen(true);
  }

  function closeDayPicker() {
    setIsDayPickerOpen(false);
  }

  return (
    <div className="h-16 bg-zinc-900 shadow-shape px-4 rounded-xl flex items-center gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input
          disabled={isGuestsInputOpen}
          type="text"
          name=""
          id=""
          placeholder="Para onde você vai?"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          onChange={(event)=>setDestination(event.target.value)}
          value={destination}
        />
      </div>

      <button
        onClick={openDayPicker}
        className="flex items-center gap-2 text-left"
        disabled={isGuestsInputOpen}
      >
        <Calendar className="size-5 text-zinc-400" />
        <span className="text-lg text-zinc-400 min-w-40 ">
          {displayedDate || "Quando?"}
        </span>
      </button>

      {isDayPickerOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="bg-zinc-900 rounded-xl py-5 px-6 shadow-shape space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selecione a data</h2>
                <button type="button" onClick={closeDayPicker}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
            </div>

            <DayPicker
              mode="range"
              selected={eventStartAndDates}
              onSelect={setEventDatasAndDates}
              locale={ptBR}
              classNames={{
                day_selected: "bg-lime-300 text-zinc-950 hover:bg-lime-400",
              }}
            />
          </div>
        </div>
      )}

      <div className="w-px h-6 bg-zinc-800" />

      {isGuestsInputOpen ? (
        <Button variant="secundary" onClick={closeGuestsInput}>
          Alterar local/data
          <Settings2 className="size-5 " />
        </Button>
      ) : (
        <Button onClick={openGuestsInput}>
          Continuar
          <ArrowRight className="size-5 " />
        </Button>
      )}
    </div>
  );
}
