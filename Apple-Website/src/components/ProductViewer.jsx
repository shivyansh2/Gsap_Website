import React from 'react'
import useMacbookStore from '../store'
import {Canvas} from "@react-three/fiber"
import MacbookModel14 from './models/Macbook-14.jsx';
import { AmbientLight } from 'three';
import StudioLights from './three/StudioLights.jsx';
import ModelSwitcher from './three/ModelSwitcher.jsx'
import { useMediaQuery } from 'react-responsive';

const ProductViewer = () => {
    const {color,scale, setColor, setScale} = useMacbookStore();

    const isMobile = useMediaQuery({query:'(max-width:1024px)'});

  return (
    <section id="product-viewer">
        <h2>Take a closer look</h2>

        <div className='controls'>
            
            <p className='info'>MackbookPro 17 | Available in 14' & 16'</p>

            <div className='flex-center gap-5 mt-5'>
                <div className='color-control'> 
                    <div 
                    onClick={() => setColor('#adb5bd')}
                    className={clsx('bg-neutral-300',color === '#abd5bd' && 'active')}>

                    </div>
                    <div 
                    onClick={() => setColor('#2e2c2e')}
                    className={clsx('bg-neutral-900',color === '#2e2c2e' && 'active')}>
                        
                    </div>
                </div>

                <div className="size-control">
                    <div 
                    onClick={() => setScale(0.06)}
                    className={clsx(scale === 0.06 ? 'bg-white text-black' :'bg-transparent text-white')}>
                       <p>14"</p> 
                    </div>
                    <div 
                    onClick={() => setScale(0.08)}
                    className={clsx(scale === 0.08 ? 'bg-white text-black' :'bg-transparent text-white')}>
                       <p>16"</p> 
                    </div>
                </div>
            </div>
        </div>

        <p className='text-white text-4xl'>
            Render Canvas
        </p>

        <Canvas id="canvas camera={{position:[0,2,5], fov:50 , near:0.1, far:100">
            <StudioLights />


            <ModelSwitcher scale={isMobile ? scale - 0.03:scale} isMobile={isMobile}/>
        </Canvas> 
    </section>
  )
}

export default ProductViewer
