import {
  Html,
  Float,
  Environment,
  useGLTF,
  PresentationControls,
  ContactShadows,
  Text,
} from "@react-three/drei";

export default function Experience() {
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );

  computer.nodes.AppleLogo000.rotation.y = Math.PI;

  return (
    <>
      <Environment preset="studio" />

      <color args={["#328da8"]} attach="background" />

      <PresentationControls
        global
        rotation={[0.13, -0.3, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={"#328da8"}
            rotation={[0.1, Math.PI, 0]}
            position={[0, 0.55, -1.55]}
          />
          <primitive object={computer.scene} position-x={0.5} position-y={-1.2}>
            <Html
              transform
              wrapperClass="htmlScreen"
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              <iframe src="https://majestic-blancmange-0c5b2b.netlify.app/" />
            </Html>
          </primitive>
          {/* <Text
            fontSize={1}
            position={[2, 0.75, 0.75]}
            rotation-y={-1.25}
            maxWidth={2}
            textAlign="center"
            color={"#ff6900"}
          >
            NKA
          </Text> */}
        </Float>
      </PresentationControls>
      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}
