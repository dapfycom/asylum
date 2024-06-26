/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: gwangju_inmunstory (https://sketchfab.com/gwangju_inmunstory)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/jejungwon-hospital-0a2e305f66154fe2bb7e075e82ed3cf0
Title: Jejungwon Hospital
*/

import { useGLTF } from '@react-three/drei';

import village from '@/assets/3d/volgar_village.glb';

export function Village({ ...props }) {
  const { nodes, materials } = useGLTF(village) as any;

  // const villageRef = useRef();
  // useFrame(({ clock }) => {
  //   villageRef.current.rotation.y = Math.sin(clock.getElapsedTime() / 10);
  // });
  return (
    <group {...props} /* ref={villageRef}  */ dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.Grass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.Mat411}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        material={materials.Material410}
        position={[53.947, 4.547, 32.05]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_9.geometry}
        material={materials.Mat411}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11.geometry}
        material={materials.Material410}
        position={[53.947, 4.547, 32.05]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload(village);
