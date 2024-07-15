import { CircleCheck } from "lucide-react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

interface ActivitiesProps {
  date: string
  activities: {
    id: string
    title: string
    occurs_at: string
  }[]
}

export function Activityes() {
  const { tripId } = useParams();
  const [activities, setActivities] = useState<ActivitiesProps[]>([]);

  useEffect(() => {
    api.get(`/trips/${tripId}/activities`).then((response) => {
      setActivities(response.data.activities);
    });
  }, [tripId]);

  
  return (
    <div className="space-y-8 ">
      {
        activities.map((category, index)=>{
          return (
            <div key={index} className="space-y-2.5">
              <div className="flex gap-2 items-baseline">
                <span className="text-xl text-zinc-300 font-semibold">Dia {format(category.date, 'd')}</span>
                <span className="text-xs text-zinc-500">{format(category.date, 'EEEE', {locale: ptBR})}</span>
              </div>

              {
                category.activities.length > 0 ? 
                  (
                    <div className="space-y-2 5">
                      {
                        category.activities.map(activity=>{
                          return (
                            <div key={activity.id} className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                              <CircleCheck className="text-lime-300 size-5" />
                              <span className="text-sm text-zinc-100 flex-1">
                                {activity.title}
                              </span>
                              <span className="text-xs text-zinc-400">{format(activity.occurs_at, 'HH:mm')}h</span>
                            </div>
                          )
                        })
                      }
                      
                    </div>
                  )
                :
                  (
                    <p className="text-sm text-zinc-500">
                      Nenhuma atividade cadastrada nessa data.
                    </p>
                  )
              }

              
            </div>
          )
        })
      }
    </div>
  );
}
