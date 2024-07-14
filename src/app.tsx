import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"


import { CreateTripPage } from "./pages/create-trip";
import { TripDetailsOPage } from "./pages/trip-deetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTripPage />,
  },
  {
    path: "/trips/:tripId",
    element: <TripDetailsOPage />,
  },
]);


export function App() {

  return (  
    <RouterProvider router={router} />
  )
}