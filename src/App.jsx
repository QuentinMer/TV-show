import "./global.css";
import s from "./style.module.css";
import { TVShowAPI } from "./api/tv-show";
import { useEffect, useState } from "react";
import { BACKDROP_BASE_URL } from "./config";
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
import { Logo } from "./components/logo/Logo";
import logo from "./assets/img/logoDonCarlitos.png"
import { TvShowList } from "./components/tvShowList/TvShowList";
import { SearchBar } from "./components/searchBar/SearchBar";


export function App() {

    const [currentTVShow, setCurrentTVShow] = useState();
    const [recommentationList, setRecommendationList] = useState([]);

    async function fetchPopulars() {
        try {

            const populars = await TVShowAPI.fetchPopulars();
            if (populars.length > 0) {
                setCurrentTVShow(populars[0]);
            }
        } catch (error) {
            alert("Erreur durant la recherche");
        }
    }
    async function fetchRecommendations(TvShowId) {
        try {
            const recommendations = await TVShowAPI.fetchRecommendations(TvShowId);
            if (recommendations.length > 0) {
                setRecommendationList(recommendations.slice(0, 15));
            }
        } catch (error) {
            alert("Erreur durant la recherche");
        }
    }


useEffect(() => {
    fetchPopulars();
}, []);

useEffect(() => {
    if (currentTVShow) {
        fetchRecommendations(currentTVShow.id);
    }
}, [currentTVShow]);

async function searchTVShow(tvShowName) {
    try {
    const searchResponse = await TVShowAPI.fetchByTitle(tvShowName);
    if (searchResponse.length > 0) {
        setCurrentTVShow(searchResponse[0]);
    }
    
    }catch (error) {
        alert("Erreur durant la recherche");
    }
}

return (
    <div className={s.main_container}
        style={{
            background: currentTVShow
                ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
                : "black"
        }}>
        <div className={s.header}>
            <div className="row">
                <div className="col-4">
                    <Logo
                        image={logo}
                        title="Series Watch" />
                </div>
                <div className="col-sm-12 col-md-4">
                    <SearchBar onSubmit={searchTVShow} />
                </div>
            </div>
        </div>
        <div className={s.tv_show_detail}>
            {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
        </div>
        <div className={s.recommended_shows}>
            {recommentationList && recommentationList.length > 0 && (
                <TvShowList
                    onClickItem={setCurrentTVShow}
                    tvShowList={recommentationList} />
            )}
        </div>
    </div>
)
}