import React from 'react'
import './style.scss'


import DsnGrid from "../DsnGrid";
import type {DsnGridProps} from "../DsnGrid";
import {dsnCN} from "../../hooks/helper";

const ServicesDetails = [
    {
        title: "Rentals",
        description: "RED NEBULA carries RED, CANON, SONY AND FUJI GEAR. Need gear? Visit our rentals.",
    },
    {
        title: "Corporate production",
        description: "Demonstrating product features with engaging visuals. Highlighting benefits through crisp detailed shots. Showcasing craftsmanship in clean studio environments.",
    },
    {
        title: "Commercial advertising",
        description: "Creating ads that capture audience attention. Boosting products through strong visual storytelling. Driving engagement with dynamic promotional content. Enhancing brand visibility using cinematic creativity. Crafting messages optimized for digital distribution.",
    },
    {
        title: "Animated graphics",
        description: "Visualizing concepts through dynamic animated sequences. Enhancing messages with clean motion graphics. Transforming ideas into engaging visual animations. Simplifying information using clear animated storytelling. Adding impact through polished digital effects.",
    },
    {
        title: "Live streaming",
        description: "Broadcasting events with stable professional setups. Delivering streams optimized for viewer experience. Ensuring reliability through multi-camera live solutions. Supporting events with real-time technical management. Enhancing reach using high-quality broadcast systems.",
    },
    {
        title: "Music entertainment",
        description: "Broadcasting events with stable professional setups. Delivering streams optimized for viewer experience. Ensuring reliability through multi-camera live solutions. Supporting events with real-time technical management. Enhancing reach using high-quality broadcast systems.",
    },
]

const ServiceTow = ({className, ...restProps}: DsnGridProps) => {
    return (
        <DsnGrid className={dsnCN('dsn-services service-tow', className)} {...restProps}>
            {ServicesDetails.map(
                (item, index) =>
                    <div className='service-item' key={index}>
                        <div className="line-before mb-20"/>
                        <h4 className='title-block'>{item.title}</h4>
                        <p className='mt-15 dsn-auto'>{item.description}</p>
                    </div>
            )}

        </DsnGrid>
    );
};


export default ServiceTow