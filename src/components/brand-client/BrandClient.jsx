import React from 'react'

import './style.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import DsnGrid, {DsnGridProps} from "../DsnGrid";
import {dsnCN} from "../../hooks/helper";
import LazyImg from "../LazyImg";

const BrandDetails = [
    // {
    //     src: "/assets/img/clients/nfl.gif",
    //     title: "NFL",
    //     href: "http://www.google.com",
    //     linkText: "www.google.com",
    // },
    {src: "/assets/img/clients/nfl.gif"},
    {src: "/assets/img/clients/mcdonalds.png"},
    {src: "/assets/img/clients/sony-music.png"},
    {src: "/assets/img/clients/basketball.png"},
    {src: "/assets/img/clients/nc.jpg"},
    {src: "/assets/img/clients/espn.jpg"},
    {src: "/assets/img/clients/biscuitville.gif"},
    {src: "/assets/img/clients/bet.png"},
    {src: "/assets/img/clients/bronto.png"},
    {src: "/assets/img/clients/charlotte-hornets.png"},
    {src: "/assets/img/clients/marlboro.png"},
    {src: "/assets/img/clients/fit.png"},
    {src: "/assets/img/clients/fruit-of-the-loom.png"},
    {src: "/assets/img/clients/habitat.jpg"},
    {src: "/assets/img/clients/unc.png"},
    {src: "/assets/img/clients/sunsail.png"},
    {src: "/assets/img/clients/ibm.png"},
    {src: "/assets/img/clients/southwest.png"},
    {src: "/assets/img/clients/neeses.jpg"},
    {src: "/assets/img/clients/haeco.png"},
    {src: "/assets/img/clients/alaska.png"},
    {src: "/assets/img/clients/qvc.png"},
    {src: "/assets/img/clients/d.png"},
    {src: "/assets/img/clients/lincoln.png"},
    {src: "/assets/img/clients/snc.gif"},
    {src: "/assets/img/clients/wwe.png"},
    {src: "/assets/img/clients/delta.png"},
    {src: "/assets/img/clients/hooptee.png"},
    {src: "/assets/img/clients/cone-health.png"},
    {src: "/assets/img/clients/jet-blue.png"},
    {src: "/assets/img/clients/banner-health.png"},
    {src: "/assets/img/clients/hopeless-records.png"},
    {src: "/assets/img/clients/walmart.png"},
    {src: "/assets/img/clients/belk.png"},
    {src: "/assets/img/clients/aerialite.png"},
    {src: "/assets/img/clients/burlington.png"},
]

function BrandClient({className, ...restProps}: DsnGridProps) {

    return (
        <DsnGrid className={dsnCN('wrapper-brand', className)} {...restProps}>
            {BrandDetails.map(
                (item, index) => {
                    return (
                        <div key={index} className="brand-item" style={{ backgroundColor: "#fff" }}>
                            <div className="box-img">
                                <LazyImg src={item.src} alt=""/>
                            </div>
                            {/* <div className="info">
                                <div className="content">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faPlus}/>
                                    </div>

                                    <div className="entry">
                                        <div>
                                            <h5 className='mb-20'>
                                                {item.title}
                                            </h5>
                                            <a href={item.href} target="_blank" rel="noopener noreferrer">
                                                {item.linkText}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    );
                }
            )}
        </DsnGrid>

    )
}

export default BrandClient
