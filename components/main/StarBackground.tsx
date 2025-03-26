'use client'
import { useRef, useState } from "react";
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
//@ts-ignore
import * as random from 'maath/random/dist/maath-random.esm';

export const StarBackground = (props: any) => {
    const ref: any = useRef();
    const [sphere] = useState(() =>
        random.inSphere(new Float32Array(5000), { radius: 1.2 })
    );

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    })

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points
                ref={ref}
                positions={sphere}
                stride={3}
                frustumCulled
                {...props}
            >
                <PointMaterial
                    transparent
                    color='#fff'
                    size={0.002}
                    sizeAttenuation={true}
                    dethWrite={false}
                />
            </Points>
        </group>
    );
};

const StarsCanvas = (() =>  
    <div className="w-full h-auto fixed inset-0 z-[-1]">
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <StarBackground />
            </Canvas>
            {/* Invisible div overlay to capture mouse events */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none', // This prevents mouse events from reaching the canvas
                }}
            />
        </div>
    </div>
);

export default StarsCanvas;
