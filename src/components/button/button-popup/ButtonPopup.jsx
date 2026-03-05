import React, { useEffect, useRef } from 'react';
import './style.scss';
import "@fancyapps/ui/dist/fancybox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import { dsnCN, generateString } from "../../../hooks/helper";

/**
 * Auto-detects the Fancybox `data-type` from a URL when not explicitly provided.
 *
 * - Vimeo embed/player URLs  → "iframe"
 * - YouTube watch/embed URLs → "video"  (Fancybox handles these natively)
 * - .mp4 / .webm / .ogg     → "video"
 * - Everything else          → undefined (Fancybox default auto-detect)
 */
function detectType(href) {
    if (!href) return undefined;

    // Vimeo player/embed URLs must be loaded as iframe
    if (/vimeo\.com\/(video\/|embed\/|\d+)/.test(href)) return 'iframe';

    // YouTube — Fancybox handles natively as "video"
    if (/youtube\.com|youtu\.be/.test(href)) return 'video';

    // Direct video file extensions
    if (/\.(mp4|webm|ogg|ogv)(\?.*)?$/i.test(href)) return 'video';

    return undefined;
}

function ButtonPopup({ href, className, bgColor, group, type, preload, width, height, ...restProps }) {

    const groupId = useRef(group || generateString(5));

    useEffect(() => {
        NativeFancybox.bind(`[data-fancybox="${groupId.current}"]`);

        return () => {
            NativeFancybox.destroy();
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    if (!href) return null;

    // Use explicitly passed type, or auto-detect from the URL
    const resolvedType = type || detectType(href);
    const dataTypeAttr = resolvedType ? { 'data-type': resolvedType } : {};

    return (
        <a
            className={dsnCN('dsn-btn-popup dsn-auto', `background-${bgColor}`, className)}
            href={href}
            data-fancybox={groupId.current}
            data-preload={preload}
            data-width={width}
            data-height={height}
            {...dataTypeAttr}
        >
            <FontAwesomeIcon {...restProps} />
        </a>
    );
}

ButtonPopup.defaultProps = {
    bgColor: 'main',
    icon: faPlay
}

export default ButtonPopup;