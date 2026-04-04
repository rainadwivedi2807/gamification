interface TooltipProps {
  text: string;
  isVisible: boolean;
  toolPosition?: 'top' | 'bottom' | 'left' | 'right';
}

const POSITION_MAP = {
    top: {
      tooltip: 'bottom-full left-1/2 -translate-x-1/2 mb-3 animate-in fade-in slide-in-from-bottom-2',
      arrow: '-bottom-1 left-1/2 -translate-x-1/2'
    },
    bottom: {
      tooltip: 'top-full left-1/2 -translate-x-1/2 mt-3 animate-in fade-in slide-in-from-top-2',
      arrow: '-top-1 left-1/2 -translate-x-1/2'
    },
    left: {
      tooltip: 'right-full top-1/2 -translate-y-1/2 mr-3 animate-in fade-in slide-in-from-right-2',
      arrow: '-right-1 top-1/2 -translate-y-1/2'
    },
    right: {
      tooltip: 'left-full top-1/2 -translate-y-1/2 ml-3 animate-in fade-in slide-in-from-left-2',
      arrow: '-left-1 top-1/2 -translate-y-1/2'
    }
  };

const Tooltip = ({ text, isVisible, toolPosition = 'top' }: TooltipProps) => {
  if (!isVisible) return null;

  

  const { tooltip: tooltipClasses, arrow: arrowClasses } = POSITION_MAP[toolPosition];

  return (
    <div className={`absolute px-4 py-2 bg-[#1A1A1A] text-white text-[12px] rounded-lg whitespace-nowrap shadow-xl z-[60] flex items-center justify-center font-medium duration-200 ${tooltipClasses}`}>
      <div className={`absolute w-2 h-2 bg-[#1A1A1A] rotate-45 ${arrowClasses}`} />
      {text}
    </div>
  );
};

export default Tooltip;
