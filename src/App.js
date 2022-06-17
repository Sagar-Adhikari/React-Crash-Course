import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import AllMeetupsPage from "./components/pages/AllMeetups";
import FavouritePage from "./components/pages/Favourite";
import NewMeetupPage from "./components/pages/NewMeetup";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} exact />
        <Route path="/favourite" element={<FavouritePage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
      </Routes>
    </Layout>
  );
}
export default App;
