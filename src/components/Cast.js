// import { useParams } from "react-router-dom";

const { useParams } = require("react-router-dom");

export const Cast = () => {
    const { moviesId } = useParams();
    // useEffect(() => {
    // HTTP запрос
    // }, [])

    return <div>cast: {moviesId}</div>

};