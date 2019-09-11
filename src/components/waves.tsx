import * as React from 'react';

type WaveProps = {
    waveOpacity: number
    mirrored?: boolean
}

export default function Waves(props : WaveProps) {
    const waveOpacity : string = props.waveOpacity.toString()
return(
    <div className={props.mirrored ? 'waves waves--mirrored' : 'waves'}>
        <svg className="wave wave--1" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
        <path id="ee-background" fill="#222" fill-opacity="0" pointer-events="none" d="M0 0h1920v1080H0z"/>
        <defs>
        <linearGradient id="gradient-1" gradientUnits="userSpaceOnUse" x1="923.32" y1="511.849" x2="923.32" y2="1339.854" gradientTransform="matrix(.4885 -.87256 1.55518 .87068 -679.744 881.577)">
            <stop offset="0" stop-color="#fff" stop-opacity="0.15" />
            <stop offset="1" stop-color="#fff" stop-opacity="0.30" />
        </linearGradient>
        </defs>
        <path d="M1940.615 511.851s-342.089 382.417-980.377 367.12C321.95 863.674 146.734 463.18-142.512 1063.92c-289.246 600.742 2154.048 33.375 2155.439 33.375 1.39 0-72.312-586.836-72.312-585.445z" transform="translate(0 129.326)" fill="url(&quot;#gradient-1&quot;)" fill-opacity={props.waveOpacity} stroke="#000" stroke-width="0" paint-order="stroke"/>
        </svg>

        <svg className="wave wave--2" id="master-artboard" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
        <path id="ee-background" fill="#222" fill-opacity="0" pointer-events="none" d="M0 0h1920v1080H0z"/>
        <defs>
        <linearGradient id="gradient-2" gradientUnits="userSpaceOnUse" x1="926.875" y1="129.433" x2="926.875" y2="1130.671" gradientTransform="matrix(-.08116 -.9967 1.51805 -.12361 296.65 1554.572)">
            <stop offset="0" stop-color="#fff" stop-opacity="0.5" />
            <stop offset="1" stop-color="#fff" stop-opacity="1" />
        </linearGradient>
        </defs>
        <path d="M1943.396 129.434s-397.713 329.574-999.845 389.37c-602.133 59.796-1094.407 552.07-1094.407 552.07l273.95 59.797s1880.098-41.719 1881.489-41.719c1.39 0-58.406-960.908-61.187-959.518z" fill="url(&quot;#gradient-2&quot;)" fill-opacity={props.waveOpacity * 0.6} stroke="#000" stroke-width="0" paint-order="stroke"/>
        </svg>

        <svg className="wave wave--3" id="master-artboard" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
        <path id="ee-background" fill="#222" fill-opacity="0" pointer-events="none" d="M0 0h1920v1080H0z"/>
        <defs>
        <linearGradient id="gradient-0" gradientUnits="objectBoundingBox" x1=".5" x2=".5" y2="1">
            <stop offset="0" stop-color="#fff"/>
            <stop offset="1" stop-color="#ccc"/>
        </linearGradient>
        <linearGradient id="gradient-1" gradientUnits="userSpaceOnUse" x1="923.32" y1="511.849" x2="923.32" y2="1339.854" gradientTransform="matrix(.4885 -.87256 1.55518 .87068 -679.744 881.577)">
            <stop offset="0" stop-color="#fff"/>
            <stop offset="1" stop-color="#fff"/>
        </linearGradient>
        <linearGradient id="gradient-2" gradientUnits="userSpaceOnUse" x1="926.875" y1="129.433" x2="926.875" y2="1130.671" gradientTransform="matrix(-.08116 -.9967 1.51805 -.12361 296.65 1554.572)">
            <stop offset="0" stop-color="#fff"/>
            <stop offset="1" stop-color="#ccc"/>
        </linearGradient>
        <linearGradient id="gradient-3" gradientUnits="userSpaceOnUse" x1="365.702" y1="-101.928" x2="365.702" y2="377.249" gradientTransform="matrix(-.19114 .98156 -2.52118 -.49094 1117.282 -58.98)">
            <stop offset="0" stop-color="#fff" stop-opacity="1" />
            <stop offset="1" stop-color="#fff" stop-opacity="0.5" />
        </linearGradient>
        </defs>
        <path d="M1364.731-42.827S938.858 452.577-180.58 367.403C-1300.018 282.226 8.89-101.928 8.89-101.928l1355.841 59.1z" fill="url(&quot;#gradient-3&quot;)" fill-opacity={props.waveOpacity} stroke="#000" stroke-width="0" paint-order="fill"/>
        </svg>
    </div>
)}