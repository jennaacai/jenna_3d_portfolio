import React, { useEffect, useRef, useState } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import birdScene from '../assets/3d/cute_ufo.glb';
import { useFrame } from '@react-three/fiber';

const Bird = () => {
    const { scene, animations } = useGLTF(birdScene);
    const birdRef = useRef();
    const { actions } = useAnimations(animations, birdRef);
    const [movingRight, setMovingRight] = useState(true);

    useEffect(() => {
        if (birdRef.current) {
            birdRef.current.traverse((child) => {
                if (child.isMesh) {
                    child.renderOrder = 1;
                }
            });
        }

        const animationName = 'Take 001';
        if (actions[animationName]) {
            actions[animationName].play();
        } 
    }, [actions]);


    useFrame(({ clock, camera }) => {
        // Update the Y position to simulate bird-like motion using a sine wave
        birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

        // Check if the bird reached a certain endpoint relative to the camera
        if (birdRef.current.position.x > camera.position.x + 10) {
        // Change direction to backward and rotate the bird 180 degrees on the y-axis
        birdRef.current.rotation.y = Math.PI;
        } else if (birdRef.current.position.x < camera.position.x - 10) {
        // Change direction to forward and reset the bird's rotation
        birdRef.current.rotation.y = 0;
        }

        // Update the X and Z positions based on the direction
        if (birdRef.current.rotation.y === 0) {
        // Moving forward
        birdRef.current.position.x += 0.01;
        birdRef.current.position.z -= 0.01;
        } else {
        // Moving backward
        birdRef.current.position.x -= 0.01;
        birdRef.current.position.z += 0.01;
        }
    });


    return (
        <primitive
            object={scene}
            ref={birdRef}
            position={[-12, 5, -5]}
            rotation={[0, 0, 0]}
            scale={[30, 30, 30]}
        />
    );
};

export default Bird;