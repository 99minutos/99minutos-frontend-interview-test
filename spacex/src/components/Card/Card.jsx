import React from 'react';
import style from './Card.module.scss';
import { FaRocket } from 'react-icons/fa';

const Card = ({ color, data, handleClick }) => {

    const { id, mission_name, launch_date_local, launch_site } = data

    return (
        <>
            <div className={color !== id ? style.ctnCard : style.ctnCardBlack} onClick={() => handleClick(data, id)}>
                <FaRocket className={style.icon} />
                <div>
                    <p className={style.name}>{mission_name}</p>
                    <p className={style.siteName}>{launch_site.site_name_long}</p>
                    <p className={style.date}>{launch_date_local.slice(0, 10)}</p>
                </div>
            </div>
        </>
    )
}

export default Card;