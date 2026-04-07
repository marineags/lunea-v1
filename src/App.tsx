
import Accueil from './pages/Accueil'
import Documentation from './pages/Documentation'
import Erreur404 from './pages/Erreur404'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Accueil /> },
  { path: "/documentation", element: <Documentation /> },
  { path: "*", element:<Erreur404 /> },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}


export default App
