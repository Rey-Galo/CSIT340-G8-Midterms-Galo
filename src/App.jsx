import Sidebar from "./components/sidebar";
import Docs from "./components/Docs";
import Guide from "./components/Guide";
import Feedback from "./components/Feedback";

function App() {
 
  return (
    <div className="grid min-h-screen grid-cols-[24rem_1fr] grid-rows-[auto_auto_1fr] bg-[#EDE9E6] text-[#5C4F4A]">
      <Sidebar />
      <Docs />
      <Guide />
      <Feedback />
    </div>
  );
}

export default App;
