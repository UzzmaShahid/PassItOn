import Birthday1 from "./Birthdays/birthday1";
import Birthday2 from "./Birthdays/Birthday2";
import Eid1 from "./Eid/Eid1";
import Eid2 from "./Eid/Eid2";
import Eid3 from "./Eid/Eid3";
import Eid4 from "./Eid/Eid4";

const templates = [
  { id: "eid-1",  occasion: "eid",      name: "Eid Classic",    component: Eid1 },
  { id: "eid-2",  occasion: "eid",      name: "Crescent Night", component: Eid2 },
  { id: "eid-3",  occasion: "eid",      name: "Golden Eid",     component: Eid3 },
  { id: "eid-4",  occasion: "eid",      name: "Eid Serene",     component: Eid4 },
  { id: "bday-1", occasion: "birthday", name: "NewsPaper", component: Birthday1 },
  { id: "bday-2", occasion: "birthday", name: "Crimson",  component: Birthday2 },
]

export default templates