import React, { useState } from "react";
import style from "./Details.module.scss";
import imgFondo from './imgFondo.png';
import CarouselImgs from "../CarouselImgs/CarouselImgs";
import { AiFillYoutube } from 'react-icons/ai';
import { FaHandPointLeft, FaRegSadTear } from 'react-icons/fa';
import { MdArticle } from 'react-icons/md';
import Modal from 'react-bootstrap/Modal';


const Details = ({ info }) => {
    const [show, setShow] = useState(false);

    return (
        <div className={style.ctnDetails}>
            {
                info !== null ? (
                    <>
                        {
                            info?.links?.flickr_images.length !== 0 ? (
                                <div className={style.ctnImg}>
                                    <img className={style.imgDetail} src={info?.links?.flickr_images[0]} alt="First slide" />
                                    <p className={style.seeMore} onClick={() => setShow(true)}>See more</p>
                                </div>
                            ) : (
                                <div className={style.ctnImg}>
                                    <img className={style.imgError} src={imgFondo} alt="upss" />
                                    <p className={style.textImgError}><FaRegSadTear className={style.iconSad} />Sorry, image not found</p>
                                </div>
                            )
                        }
                        <p className={style.titleName}>{info?.mission_name} </p>
                        {
                            info.details !== null ? (
                                <p className={style.text} >{info?.details}  </p>
                            ) : (
                                <p className={style.textError}> <FaRegSadTear className={style.iconSad} />Sorry, details not found</p>
                            )
                        }

                        <div className={style.ctnBtn}>
                            {
                                info?.links?.article_link !== null ? (
                                    <button className={style.btn}>< MdArticle className={style.icon} /><a className={style.ref} href={info?.links?.article_link} target="_blank" rel="noreferrer">See article</a></button>
                                ) : (
                                    null
                                )
                            }
                            <button className={style.btn}><AiFillYoutube className={style.icon} /><a className={style.ref} href={info?.links?.video_link} target="_blank" rel="noreferrer">Watch video</a></button>
                        </div>
                    </>

                ) : (
                    <p className={style.titleSelect}> <FaHandPointLeft className={style.iconSelect} />Select mission</p>
                )
            }

            <Modal
                show={show}
                size="xl"
                centered
                onHide={() => setShow(false)}
            >
                <CarouselImgs imgs={info?.links?.flickr_images} />
            </Modal>
        </div >
    )
}

export default Details;