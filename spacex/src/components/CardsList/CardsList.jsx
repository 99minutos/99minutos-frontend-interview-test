import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import Card from "../Card/Card";
import { GET_LAUNCHES } from "../../graphql/Queries";
import style from "./CardsList.module.scss"
import Details from '../Details/Details';


const CardsList = () => {
    const { loading, error, data } = useQuery(GET_LAUNCHES);
    const [info, setInfo] = useState(null)
    const [color, setColor] = useState(false);



    const handleClick = (data, id) => {
        setInfo(data)
        setColor(id)
    }

    if (loading) return <p className={style.loading}>Loading</p>;
    if (error) return <p>Error :(</p>;

    return (
        < div className={style.ctnCardDetails}>
            <div className={style.ctnCards}>
                <h2 className={style.title}>Last Lauches</h2>
                {
                    data.launchesPast.map(data => <Card key={data.id} color={color} data={data} handleClick={handleClick} />)
                }
            </div>
            <Details info={info} />
        </div>
    )
};

export default CardsList;
