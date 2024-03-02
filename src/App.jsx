import { Canvas } from '@react-three/fiber'
import { Float, OrbitControls, ScrollControls } from '@react-three/drei';
import { PerspectiveCamera, OrthographicCamera, Stars, Clouds, Cloud } from '@react-three/drei'

import Watch from './modelComps/Watch';
import { useRef, useState } from 'react';

function App() {

  const coord = useRef([0, -10, -150])
  const rotation = useRef([0.3, 0, 0])

  return (
    <>
      {/* y,z */}
      <div onClick={() => coord.current[3] = -200}>
        <div onClick={() => alert("word")} className={"absolute text-white z-10 grid grid-cols-2 *:transition-all *:duration-1000"}>
          <div className={"hover:bg-white hover:bg-opacity-15 text-opacity-100"}>Volcano</div>
          <div className={"hover:bg-white hover:bg-opacity-15 text-opacity-100"}>Earth</div>
          <div className={"hover:bg-white hover:bg-opacity-15 text-opacity-100"}>Wind</div>
          <div className={"hover:bg-white hover:bg-opacity-15 text-opacity-100"}>Water</div>
        </div>
      <Canvas>
        {/* <color attach='background' args={['lightblue']} /> */}
        <OrbitControls />
        <ambientLight intensity={2} />
        {/* <ScrollControls pages={2} damping={0.25}> */}
        {/* <Float floatIntensity={2} speed={2}> */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

        <OrthographicCamera position={coord.current} rotation={rotation.current}>
          <Watch />
        </OrthographicCamera>
        {/* </Float> */}
        {/* </ScrollControls> */}
      </Canvas>
      </div>
    </>
  )
}

export default App
