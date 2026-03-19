import { useEffect, useRef, useState } from "react";
import { detect, init } from "../utils/utils";


export default function FaceExpression({ onClick = () => { } }) {

  console.log("FaceExpression mounted");
    const videoRef = useRef(null);
    const landmarkerRef = useRef(null);
    const streamRef = useRef(null);

    const [ expression, setExpression ] = useState("Detecting...");

    // useEffect(() => {
    //     init({ landmarkerRef, videoRef, streamRef });

    //     return () => {
    //         if (landmarkerRef.current) {
    //             landmarkerRef.current.close();
    //         }

    //         if (videoRef.current?.srcObject) {
    //             videoRef.current.srcObject
    //                 .getTracks()
    //                 .forEach((track) => track.stop());
    //         }
    //     };
    // }, []);
    useEffect(() => {
      async function start() {
        await init({ landmarkerRef, videoRef, streamRef });
      }

      start();

      return () => {
        landmarkerRef.current?.close();
        videoRef.current?.srcObject?.getTracks().forEach((t) => t.stop());
      };
    }, []);

    async function handleClick() {
        const expression = detect({ landmarkerRef, videoRef, setExpression })
        console.log(expression)
        onClick(expression)
    }


    return (
      <div style={{ textAlign: "center" }}>
        <video
          ref={videoRef}
          autoPlay
          muted
          style={{ width: "400px", borderRadius: "12px" }}
          playsInline
        />
        <h2>{expression}</h2>
        <button onClick={handleClick}>Detect expression</button>
      </div>
    );
}
