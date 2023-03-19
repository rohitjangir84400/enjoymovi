import TvTabcontent from "./tvtabsection";
import Meta from "./meta";
import Enjoy from "./enjoysection";
import Joinsection from "./join";


export default function TvList({ latesttvshow, topratedtv, populartv }) {
  return (
    <div>
      <Meta title="Tv_List" />
      <Enjoy/>
      <TvTabcontent prop1={latesttvshow} prop2={topratedtv} prop3={populartv}/>
      <Joinsection/>
    </div>
  );
}
