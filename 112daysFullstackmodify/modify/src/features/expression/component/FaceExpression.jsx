import { useEffect, useRef, useState } from "react";
import { FaceLandmarker, FilesetResolver } from "@mediapipe/tasks-vision";

export default function FaceExpression() {
  const videoRef = useRef(null);
  const [expression, setExpression] = useState("Detecting...");

  let faceLandmarker;
  let runningMode = "VIDEO";

  useEffect(() => {
    const setup = async () => {
      const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm",
      );

      faceLandmarker = await FaceLandmarker.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath:
            "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",
          delegate: "GPU",
        },
        outputFaceBlendshapes: true,
        runningMode,
        numFaces: 1,
      });

      startCamera();
    };

    setup();
  }, []);

  const startCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoRef.current.srcObject = stream;

    videoRef.current.addEventListener("loadeddata", predict);
  };

  const predict = () => {
    const video = videoRef.current;

    const results = faceLandmarker.detectForVideo(video, Date.now());

    if (results.faceBlendshapes.length > 0) {
      const blendShapes = results.faceBlendshapes[0].categories;

      const smile =
        blendShapes.find((c) => c.categoryName === "mouthSmileLeft")?.score ||
        0;
      const blink =
        blendShapes.find((c) => c.categoryName === "eyeBlinkLeft")?.score || 0;
      const mouthOpen =
        blendShapes.find((c) => c.categoryName === "jawOpen")?.score || 0;

      if (smile > 0.5) {
        setExpression("😊 Smiling");
      } else if (blink > 0.5) {
        setExpression("😉 Blinking");
      } else if (mouthOpen > 0.5) {
        setExpression("😮 Mouth Open");
      } else {
        setExpression("😐 Neutral");
      }
    }

    requestAnimationFrame(predict);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Face Expression Detector</h2>

      <video
        ref={videoRef}
        autoPlay
        playsInline
        width="500"
        style={{ borderRadius: "10px" }}
      />

      <h3>{expression}</h3>
      <button onClick={predict}>Detect expression</button>
    </div>
  );
}
