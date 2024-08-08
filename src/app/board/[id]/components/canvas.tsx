'use client'
import React, {useRef, useEffect, useState } from 'react';

// export default function Canvas(){
//     const canvasRef = useRef(null);
//     const [context, setContext] = useState(null);
//     const [drawing, setDrawing] = useState(false);
//     const [currentColor, setCurrentColor] = useState('black');
//     const [lineWidth, setLineWidth] = useState(3);
//     const [drawingAction, setDrawingAction] = useState([]);
//     const [currentPath,setCurrentPath] = useState([])
//     const [currentStyle,setCurrentStyle]= useState({color:'black',lineWidth:3});

//     useEffect(()=>{
//         if(canvasRef.current){
//             const canvas = canvasRef.current;
//             canvas.width = 900;
//             canvas.height = 500;
//             const ctx = canvas.getContext('2d')
//             setContext(ctx);
//             reDrawPerviousData(ctx);
//         }
//     })
// }
