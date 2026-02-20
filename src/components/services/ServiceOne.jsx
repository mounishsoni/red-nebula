import React from 'react'
import './style.scss'


import DsnGrid from "../DsnGrid";
import type {DsnGridProps} from "../DsnGrid";
import {dsnCN} from "../../hooks/helper";
import LazyImg from "../LazyImg";

const ServicesDetails = [
    {
        icon: 'assets/img/services/1.svg',
        title: "Rentals",
        description: "RED NEBULA carries RED, CANON, SONY AND FUJI GEAR. Need gear? Visit our rentals.",
    },
    {
        icon: 'assets/img/services/1.png',
        title: "Corporate production",
        description: "Demonstrating product features with engaging visuals. Highlighting benefits through crisp detailed shots. Showcasing craftsmanship in clean studio environments.",
    },
    {
        icon: 'assets/img/services/2.png',
        title: "Commercial advertising",
        description: "Creating ads that capture audience attention. Boosting products through strong visual storytelling. Driving engagement with dynamic promotional content. Enhancing brand visibility using cinematic creativity. Crafting messages optimized for digital distribution.",
    },
    {
        icon: 'assets/img/services/3.png',
        title: "Animated graphics",
        description: "Visualizing concepts through dynamic animated sequences. Enhancing messages with clean motion graphics. Transforming ideas into engaging visual animations. Simplifying information using clear animated storytelling. Adding impact through polished digital effects.",
    },
    {
        icon: 'assets/img/services/5.svg',
        title: "Live streaming",
        description: "Broadcasting events with stable professional setups. Delivering streams optimized for viewer experience. Ensuring reliability through multi-camera live solutions. Supporting events with real-time technical management. Enhancing reach using high-quality broadcast systems.",
    },
    {
        icon: 'assets/img/services/6.svg',
        title: "Music entertainment",
        description: "Broadcasting events with stable professional setups. Delivering streams optimized for viewer experience. Ensuring reliability through multi-camera live solutions. Supporting events with real-time technical management. Enhancing reach using high-quality broadcast systems.",
    },
]

const ServiceOne = ({className, ...restProps}: DsnGridProps) => {
    return (
        <DsnGrid className={dsnCN('dsn-services service-one', className)} {...restProps}>
            {ServicesDetails.map(
                (item, index) =>
                    <div className='service-item' key={index}>
                            <span className='icon mb-20'>
                                <LazyImg src={item.icon} alt={item.title}/>
                            </span>
                        <h4 className='title-block mb-20'>{item.title.toUpperCase()}</h4>
                        <p className='mt-15 dsn-auto'>{item.description}</p>
                    </div>
            )}

        </DsnGrid>
    );
};


export default ServiceOne