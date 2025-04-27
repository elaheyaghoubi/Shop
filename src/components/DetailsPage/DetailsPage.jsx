import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {fetchDetails} from "../../features/getDetailsSlice.js";
import {ClipLoader} from "react-spinners";
import Loading from "../shared/Loading.jsx";
import DetailCard from "./DetailCard.jsx";

function DetailsPage() {
    const {id} = useParams();
    const {loading, error, details} = useSelector((state) => state.details);
    const dispatch = useDispatch();

    useEffect(() => {
        id ? dispatch(fetchDetails(id)) : null;
    }, [id, dispatch]);

    return (
        <div>
            <Loading loading={loading}/>
            <div>
                {details ? (<DetailCard data={details}/>) : null}
            </div>
        </div>
    );
}

export default DetailsPage;
