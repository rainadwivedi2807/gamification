import { useState, useCallback } from 'react';

/**
 * A custom hook to manage tooltip state.
 * Returns visibility state and handlers for mouse events.
 */
export const useTooltip = () => {
  const [isVisible, setIsVisible] = useState(false);

  const show = useCallback(() => setIsVisible(true), []);
  const hide = useCallback(() => setIsVisible(false), []);

  return {
    isVisible,
    tooltipHandlers: {
      onMouseEnter: show,
      onMouseLeave: hide,
    },
  };
};

export default useTooltip;
