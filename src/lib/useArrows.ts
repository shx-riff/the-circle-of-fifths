import { useEffectEvent, useEffect } from "react";

type UseArrowsProps = {
  onLeft?: () => void;
  onRight?: () => void;
  onUp?: () => void;
  onDown?: () => void;
};

export const useArrows = (props: UseArrowsProps) => {
  const { onDown, onLeft, onRight, onUp } = props;

  const onUpEvent = useEffectEvent(() => onUp?.());
  const onDownEvent = useEffectEvent(() => onDown?.());
  const onLeftEvent = useEffectEvent(() => onLeft?.());
  const onRightEvent = useEffectEvent(() => onRight?.());

  useEffect(() => {
    const controller = new AbortController();

    window.addEventListener(
      "keydown",
      (e: KeyboardEvent) => {
        switch (e.key) {
          case "ArrowUp":
            return onUpEvent();
          case "ArrowDown":
            return onDownEvent();
          case "ArrowLeft":
            return onLeftEvent();
          case "ArrowRight":
            return onRightEvent();
        }
      },
      { signal: controller.signal },
    );

    return () => {
      controller.abort();
    };
  }, []);
};
