import s from "./style.module.css";
import { Search as SearchIcon} from "react-bootstrap-icons";

export function SearchBar({onSubmit}) {

    function submit(e){
if (e.key === "Enter" && e.target.value.trim() !== "" ) {
    onSubmit(e.target.value);
}
    }
    return ( <div className={s.container}>
<SearchIcon size={22}
className={s.icon}/>
<input 
onKeyUp={submit}
type="text" 
placeholder="Search a tv show"
className={s.input}
 />
    </div> );
}