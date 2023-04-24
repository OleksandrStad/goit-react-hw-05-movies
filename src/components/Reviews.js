const { useParams } = require("react-router-dom");

export const Reviews = () => {
    const { moviesId } = useParams();
    // useEffect(() => {
    // HTTP запрос
    // }, [])

    return <div>reviews: {moviesId}</div>

};