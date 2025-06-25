import React, { useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

type ModelProps = JSX.IntrinsicElements['group'];

export function Model(props: ModelProps) {
  const { scene, animations } = useGLTF('/models/RobotExpressive.glb');
  const { actions, names } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions && names.length > 0) {
      actions[names[0]]?.reset().fadeIn(0.5).play();
    }
  }, [actions, names]);

  return <primitive object={scene} {...props} />;
}

useGLTF.preload('/models/RobotExpressive.glb');
