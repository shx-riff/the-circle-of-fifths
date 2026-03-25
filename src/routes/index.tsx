import { useRef, useState } from "react";

import { createFileRoute } from "@tanstack/react-router";
import { useThrottledCallback } from "@tanstack/react-pacer";

import { useArrows } from "../lib/useArrows";

import {
  CircleOfFifths,
  CircleOfFifthsRef,
  Tonic,
} from "../ui/circle-of-fifths";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const ref = useRef<CircleOfFifthsRef>(null);

  const [tonic, setTonic] = useState<Tonic>("C");

  useArrows({
    onLeft: useThrottledCallback(() => ref.current?.prev(), {
      wait: 500,
      trailing: false,
    }),
    onRight: useThrottledCallback(() => ref.current?.next(), {
      wait: 500,
      trailing: false,
    }),
  });

  return (
    <div className="h-screen flex justify-center items-center">
      <CircleOfFifths
        ref={ref}
        className="h-full"
        tonic={tonic}
        onTonicChange={setTonic}
      />
    </div>
  );
}
