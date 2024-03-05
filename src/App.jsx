import {Canvas} from '@react-three/fiber'
import {OrthographicCamera, Stars} from '@react-three/drei'

import Watch from './modelComps/Watch';
import {useRef, useState} from 'react';

import gsap from "gsap";

function App() {

  const ref = useRef()
  const tl = useRef()
  tl.current = gsap.timeline();

  const coord = useRef([0, -10, -150])
  const rotation = useRef([0.3, 0, 0])

  const [goSomewhere, setGoSomewhere] = useState(false)
  const [element, setElement] = useState('')

  const volcanoClick = () => {
    setElement("Fire")
    setGoSomewhere(true)
    tl.current.to(
      ref.current.position,
      {
        duration: 4,
        y: -40,
        x: 100,
        ease: "slow(0.1,0.7,false)"
      },
      0
    )
  }

  const earthClick = () => {
    setElement("Earth")
    setGoSomewhere(true)
    tl.current.to(
      ref.current.position,
      {
        duration: 4,
        y: -40,
        x: -100,
        ease: "slow(0.1,0.7,false)"
      },
      0
    )
  }

  const windClick = () => {
    setElement("Air")
    setGoSomewhere(true)
    tl.current.to(
      ref.current.position,
      {
        duration: 4,
        y: 15,
        x: +90,
        ease: "slow(0.1,0.7,false)"
      },
      0
    )
  }

  const waterClick = () => {
    setElement("Water")
    setGoSomewhere(true)
    tl.current.to(
      ref.current.position,
      {
        duration: 4,
        y: 15,
        x: -90,
        ease: "slow(0.1,0.7,false)"
      },
      0
    )
  }

  return (
    <>
      {/* y,z */}
      <div>
        {!goSomewhere &&
          <div
            className={"absolute text-white z-10 grid grid-cols-2 *:transition-all *:duration-1000 *:rounded-md gap-2"}>
            <div onClick={() => volcanoClick()}
                 className={"flex place-items-center justify-center text-5xl font-bold cursor-pointer opacity-0 hover:opacity-100"}>Fire
            </div>
            <div onClick={() => earthClick()}
                 className={"flex place-items-center justify-center text-5xl font-bold cursor-pointer opacity-0 hover:opacity-100"}>Earth
            </div>
            <div onClick={() => windClick()}
                 className={"flex place-items-center justify-center text-5xl font-bold cursor-pointer opacity-0 hover:opacity-100"}>Air
            </div>
            <div onClick={() => waterClick()}
                 className={"flex place-items-center justify-center text-5xl font-bold cursor-pointer opacity-0 hover:opacity-100"}>Water
            </div>
          </div>
        }
        {/*TODO button color depend on element*/}
        {/*TODO return button*/}
        <div
          className={` ${goSomewhere ? "bg-black bg-opacity-50 z-10" : "opacity-0 z-0"} absolute text-white flex flex-col justify-center place-items-center transition-all duration-1000 *:rounded-md gap-2 text-5xl`}>
          {element} <span className={`text-lg font-bold ${element === 'Air' ? "bg-green-900" : element === 'Earth' ? "bg-amber-950" : "bg-black"} p-2 bg-opacity-50 cursor-pointer mt-4`}>Entrer</span> <span className={"text-lg font-bold bg-black p-2 bg-opacity-50 cursor-pointer"}>Sortir</span>
        </div>

        <Canvas>
        {/* <color attach='background' args={['lightblue']} /> */}
          {/*<OrbitControls/>*/}
          <ambientLight intensity={2}/>
          {/* <ScrollControls pages={2} damping={0.25}> */}
          {/* <Float floatIntensity={2} speed={2}> */}
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1}/>

          <OrthographicCamera ref={ref} position={coord.current} rotation={rotation.current}>
            <Watch/>
          </OrthographicCamera>
          {/* </Float> */}
          {/* </ScrollControls> */}
        </Canvas>
      </div>
    </>
  )
}

export default App
