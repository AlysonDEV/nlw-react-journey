import { ArrowRight, UserRoundPlus } from "lucide-react";
import { Button } from "../../../components/button";

interface InviteGuestsModalProps {
  emailsToInvite: string[]
  openGuestsModal: () => void
  openConfirmTripModal: () => void

}

export function InviteGuestsStep({
  emailsToInvite,
  openGuestsModal,
  openConfirmTripModal
}:InviteGuestsModalProps){
  return(
    <div className="h-16 bg-zinc-900 shadow-shape px-4 rounded-xl flex items-center gap-3">
      <button type="button" onClick={openGuestsModal} className="flex items-center gap-2 flex-1">
        <UserRoundPlus className="size-5 text-zinc-400" />
        {
          emailsToInvite.length > 0 ? (
            <span className="text-zinc-100 text-lg">
              {emailsToInvite.length} pessoa(s) convidada(s)
            </span> 
            ) : (
              <span className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 text-left">
                Quem estará na viagem?
              </span>
            )
        }
        
      </button>

      <div className="w-px h-6 bg-zinc-800" />

      <Button onClick={openConfirmTripModal}>
        Confirmar viagem
        <ArrowRight className="size-5 " />
      </Button>
    </div>
  )
}