import React, { useEffect } from 'react'
import { useRef } from 'react'

import planeScene from '../assets/3d/pika.glb';
import { useAnimations, useGLTF } from '@react-three/drei';

const Plane = ({isRotating}) => {
    const ref = useRef();
    const { scene, animations } = useGLTF(planeScene);
    const { actions } = useAnimations(animations, ref);

    useEffect(() => {
        scene.traverse((child) => {
        if (child.isMesh && child.material) {
            child.material.color.set('#c29259')  //ba915f // c29259 //caa06f

            child.material.needsUpdate = true;
        }
        })

        if (isRotating){
            actions['Take 01'].play();
        } else {
            actions['Take 01'].stop();
        }
    }, [actions, isRotating])

    return (
        <mesh position = {[0,-0.2,2.5]} scale ={[0.09,0.09,0.09]} rotation={[0, 1, -0.1]} ref = {ref}>
            <primitive object={scene} />
        </mesh>
    )
}

{/*import planeScene from '../assets/3d/cute_chick.glb';
import { useAnimations, useGLTF } from '@react-three/drei';

const Plane = ({isRotating}) => {
    const ref = useRef();
    const { scene, animations } = useGLTF(planeScene);
    const { actions } = useAnimations(animations, ref);

    useEffect(() => {
        if (isRotating){
            actions['Animation'].play();
        } else {
            actions['Animation'].stop();
        }
    }, [actions, isRotating])

    return (
        <mesh position = {[0,-0.5,2.75]} scale ={[0.2,0.2,0.2]} rotation={[0, -Math.PI / 7, -0.2]} ref = {ref}>
            <primitive object={scene} />
        </mesh>
    )
}
*/}
export default Plane
