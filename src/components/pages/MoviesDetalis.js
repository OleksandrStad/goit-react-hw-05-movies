import { Link, Outlet, useParams } from "react-router-dom";


const MoviesDetalis = () => {
    const { moviesId } = useParams();


    // useEffect(() => {
    // HTTP запрос
    // }, [])

    return (<>

        <h1> MoviesDetalis: {moviesId} </h1>
        <ul>
            <li>
                <Link to="cast">актеры</Link>
            </li>
            <li>
                <Link to="reviews">Обзоры</Link>
            </li>
        </ul>
        <Outlet />

    </>)
};


export default MoviesDetalis;