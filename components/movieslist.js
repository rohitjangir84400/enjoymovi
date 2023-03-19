import Joinsection from "./join";
import Meta from "./meta";
import Tabcontent from "./tabsection";

export default function MovieList({ movie, toprated, upcoming }) {
  return (
    <div>
      <Meta title="Movies_List" />
      <Tabcontent prop1={movie} prop2={toprated} prop3={upcoming}/>
      <Joinsection/>
    </div>
  );
}


