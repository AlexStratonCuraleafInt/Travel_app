import { fetchAdventures, fetchCruises } from "./lib/api_call";
import Header from "./components/Header";
import AdventuresList from "./components/AdventuresList";
import CruisesList from "./components/CruisesList";

export default async function Home() {
  const getAllAdventures = await fetchAdventures();
  const getAllCruises = await fetchCruises();

  return (
    <div>
      <Header />
      <AdventuresList allAdventures={getAllAdventures} />
      <CruisesList allCruises={getAllCruises} />
    </div>
  );
}
