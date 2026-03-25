import { RefObject, useId, useImperativeHandle, useState } from "react";

import { normalizeAngle } from "../../lib/normalizeAngle";
import { getSmallestAngleDelta } from "../../lib/getSmallestAngleDelta";
import { getCircular } from "../../lib/getCircular";

import { Functions } from "./Functions";
import { ModeTypes } from "./ModeTypes";
import { Pentatonic } from "./Pentatonic";
import { Modes } from "./Modes";
import { MajorChordScaleDegrees } from "./MajorChordScaleDegrees";
import { MajorChords } from "./MajorChords";
import { MinorChords } from "./MinorChords";
import { MinorDiatonicTriangleChordsScaleDegree } from "./MinorDiatonicTriangleChordsScaleDegree";
import { DiminishedChords } from "./DiminishedChords";
import { DiminishedChordScaleDegree } from "./DiminishedChordScaleDegree";
import { DiatonicTriangleOutline } from "./DiatonicTriangleOutline";
import { DoubleDominant } from "./DoubleDominant";
import { SecondaryDominant } from "./SecondaryDominant";
import { Tonic, TONIC_ANGLES, TONICS } from "./tonics";

export type CircleOfFifthsRef = {
  next: () => void;
  prev: () => void;
};

interface CircleOfFifthsProps {
  ref?: RefObject<CircleOfFifthsRef | null>;
  tonic: Tonic;
  onTonicChange: (tonic: Tonic) => void;
  className?: string;
  style?: React.CSSProperties;
}

export const CircleOfFifths = (props: CircleOfFifthsProps) => {
  const { ref, tonic, onTonicChange, className, style } = props;

  const [prevTonic, setPrevTonic] = useState(tonic);
  const [rotation, setRotation] = useState(() => TONIC_ANGLES[tonic]);

  if (prevTonic !== tonic) {
    setPrevTonic(tonic);
    setRotation((prevRotation) => {
      const currentAngle = normalizeAngle(prevRotation);
      const delta = getSmallestAngleDelta(currentAngle, TONIC_ANGLES[tonic]);
      return prevRotation + delta;
    });
  }

  const handleSpin = (direction: "prev" | "next") => {
    const currentTonicIndex = TONICS.indexOf(tonic);
    const newTonic =
      direction === "prev"
        ? getCircular([...TONICS], currentTonicIndex - 1)
        : getCircular([...TONICS], currentTonicIndex + 1);
    onTonicChange(newTonic);
  };

  useImperativeHandle(ref, () => {
    return {
      next: () => {
        handleSpin("next");
      },
      prev: () => {
        handleSpin("prev");
      },
    };
  });

  const clipPathId = useId();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 1024 1024"
      style={style}
      className={className}
    >
      <g clipPath={`url(#${clipPathId})`}>
        <path fill="#fff" d="M0 0h1024v1024H0z" />
        <Functions />
        <ModeTypes />
        <Pentatonic />
        <Modes />
        <MajorChordScaleDegrees />
        <MajorChords
          rotation={rotation}
          tonic={tonic}
          onTonicChange={onTonicChange}
        />
        <MinorChords rotation={rotation} />
        <MinorDiatonicTriangleChordsScaleDegree />
        <DiminishedChords rotation={rotation} />
        <DiminishedChordScaleDegree />

        <circle
          cx="512"
          cy="512"
          r="58"
          fill="#fff"
          stroke="#fff"
          strokeWidth="8"
        />
        <DoubleDominant />
        <SecondaryDominant />
        <DiatonicTriangleOutline />
      </g>
      <defs>
        <clipPath id={clipPathId}>
          <path fill="#fff" d="M0 0h1024v1024H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
