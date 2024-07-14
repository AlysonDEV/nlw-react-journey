import { CircleCheck } from "lucide-react";

export function Activityes() {
  return (
    <div className="space-y-8 ">
      <div className="space-y-2.5">
        <div className="flex gap-2 items-baseline">
          <span className="text-xl text-zinc-300 font-semibold">Dia 17</span>
          <span className="text-xs text-zinc-500">Sábado</span>
        </div>

        <p className="text-sm text-zinc-500">
          Nenhuma atividade cadastrada nessa data.
        </p>
      </div>

      <div className="space-y-2.5">
        <div className="flex gap-2 items-baseline">
          <span className="text-xl text-zinc-300 font-semibold">Dia 18</span>
          <span className="text-xs text-zinc-500">Domingo</span>
        </div>

        <div className="space-y-2 5">
          <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
            <CircleCheck className="text-lime-300 size-5" />
            <span className="text-sm text-zinc-100 flex-1">
              Academia em grupo
            </span>
            <span className="text-xs text-zinc-400">10:00h</span>
          </div>

          <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
            <CircleCheck className="text-lime-300 size-5" />
            <span className="text-sm text-zinc-100 flex-1">
              Academia em grupo
            </span>
            <span className="text-xs text-zinc-400">10:00h</span>
          </div>
        </div>
      </div>
    </div>
  );
}
