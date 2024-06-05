import s from "./style.module.css";
import { FiveStarRating } from "../fiveStarRating/FiveStarRating";

export function TVShowDetail({tvShow}) {
    const rating = tvShow.vote_average / 2

    return <div className={s.container}>
        <div className={s.titre}>{tvShow.name}</div>
        <div className={s.langue}>{tvShow.original_language}</div>
        <div className={s.date}>{tvShow.first_air_date}</div>
        <div className={s.note_container}>
            <FiveStarRating rating={rating} />
        <div className={s.note}> {rating}</div> {/* comme les données en json sont sur /10 on divise par /2 pour k'avoir sur 5 */}
        </div>
        <div className={s.overview}>overview : {tvShow.overview}</div>
    </div>;
}