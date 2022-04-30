import { useEffect } from "react";
import {useParams} from "react-router-dom";

function Detail () {
const {jmt} = useParams();
useEffect (() => {
fetch(``)
}, []) ;

    return <h1>
        안녕
    </h1>;
};

export default Detail;