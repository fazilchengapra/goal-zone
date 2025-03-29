import MainContent from "./MainContent";
import MatchDetails from "./MatchDetails";

export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden w-full">
      <MainContent />
      
      <div className="max-w-[18rem] min-w-full mt-5">
        <MatchDetails />
      </div>
    </div>
  );
}
