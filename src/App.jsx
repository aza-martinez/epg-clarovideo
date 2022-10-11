import Epg from "@/components/Epg";
import EdgProvider from "@/components/EdgProvider";
import "./assets/styles/styles.css";

function App() {
  return (
    <EdgProvider>
      <Epg />
    </EdgProvider>
  );
}

export default App;
