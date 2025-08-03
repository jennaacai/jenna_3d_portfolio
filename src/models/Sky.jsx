import { useGLTF } from '@react-three/drei'
import {useEffect, useRef} from 'react'
import {useFrame} from '@react-three/fiber'
import skyScene from '../assets/3d/northern_lights1.glb'
import * as THREE from 'three';

const Sky = ({ isRotating }) => {
  const sky = useGLTF(skyScene)
  const skyRef = useRef()
  const currentRotation = useRef(0) // store rotation angle

  useFrame((_, delta) => {
    if (isRotating && skyRef.current) {
      currentRotation.current -= 0.1 * delta
      skyRef.current.rotation.y = currentRotation.current
    }
  })

  useEffect(() => {
    if (skyRef.current) {
      // On mount, apply last rotation so it doesn't snap
      skyRef.current.rotation.y = currentRotation.current
    }

    skyRef.current.traverse((child) => {
      if (child.isMesh) {
        child.renderOrder = 0; // render behind others
        child.material.depthWrite = false; // optional, helps with layering
      }
    });

  }, [isRotating])

  return (
    <mesh position={[0, -300, -20]} ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  )
}

export default Sky

{/*
const Sky = ({ isRotating }) => {
  const sky = useGLTF(skyScene)
  const skyRef = useRef()
  const currentRotation = useRef(0) // store rotation angle

  useFrame((_, delta) => {
    if (isRotating && skyRef.current) {
      currentRotation.current -= 0.1 * delta
      skyRef.current.rotation.y = currentRotation.current
    }
  })

  useEffect(() => {
    if (skyRef.current) {
      // On mount, apply last rotation so it doesn't snap
      skyRef.current.rotation.y = currentRotation.current
    }

    skyRef.current.traverse((child) => {
      if (child.isMesh) {
        child.renderOrder = 0; // render behind others
        child.material.depthWrite = false; // optional, helps with layering
      }
    });

  }, [isRotating])

  return (
    <mesh position={[5, -25, 0]} ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  )
}

export default Sky
*/}