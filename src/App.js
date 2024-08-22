import Sidebar from './Components/SideBar/Sidebar.jsx';
import UserProfile from './Components/UserProfile/UserProfile.jsx';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './Components/DashBoard/Dashboard';
import RootLayout from "./Components/RootLayout/Rootlayout";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/userprofile" element={<UserProfile />} />
      <Route path ="/sidebar"  element={<Sidebar/>}/>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
