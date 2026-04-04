import { useState, useRef, useEffect } from 'react';
import Button from './Button';

export interface Option {
  label: string;
  value: string;
  disabled?: boolean;
  config?: {
    type: 'currency' | 'percentage' | 'posts_period';
    placeholder?: string;
    secondaryPlaceholder?: string;
    secondaryOptions?: { label: string; value: string }[];
    template: (value: string, secondaryValue?: string) => string;
  };
}

interface DropdownProps {
  options: Option[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  isRequired?: boolean;
  className?: string;
  error?: string;
}

const Dropdown = ({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  label,
  isRequired = false,
  className = '',
  error,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tempValue, setTempValue] = useState('');
  const [tempSecondaryValue, setTempSecondaryValue] = useState('');
  const [configOpen, setConfigOpen] = useState<string | null>(null);
  const [isSecondaryOpen, setIsSecondaryOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleOptionClick = (option: Option) => {
    if (option.disabled) return;
    if (option.config) {
      setTempValue('');
      setTempSecondaryValue('');
      setIsSecondaryOpen(false);
      setConfigOpen(option.value);
    } else {
      onChange(option.value);
      setIsOpen(false);
      setConfigOpen(null);
    }
  };

  const handleSaveConfig = () => {
    if (configOpen) {
      onChange(configOpen);
      setIsOpen(false);
      setConfigOpen(null);
    }
  };

  const handleCancelConfig = () => {
    setConfigOpen(null);
  };

  const getDisplayLabel = () => {
    const configuringOption = options.find(o => o.value === configOpen);
    
    if (configuringOption?.config) {
      if (tempValue) {
        if (configuringOption.config.type === 'posts_period') {
          const secondaryLabel = configuringOption.config.secondaryOptions?.find(o => o.value === tempSecondaryValue)?.label || '';
          return configuringOption.config.template(tempValue, secondaryLabel);
        }
        return configuringOption.config.template(tempValue);
      }
      return configuringOption.label;
    }

    if (selectedOption?.config && tempValue) {
      if (selectedOption.config.type === 'posts_period') {
        const secondaryLabel = selectedOption.config.secondaryOptions?.find(o => o.value === tempSecondaryValue)?.label || '';
        return selectedOption.config.template(tempValue, secondaryLabel);
      }
      return selectedOption.config.template(tempValue);
    }

    return selectedOption ? selectedOption.label : placeholder;
  };

  return (
    <div className={`flex flex-col gap-1 ${className}`} ref={dropdownRef}>
      {label && (
        <label className="text-[14px] text-[#616161]">
          {label} {isRequired && <span className="text-red-500">*</span>}
        </label>
      )}
      
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full flex items-center justify-between bg-white border rounded-lg px-4 py-2 text-[14px] cursor-pointer
            ${isOpen ? 'border-[#c026d3]' : 'border-gray-200 hover:border-gray-300'}
            ${error ? 'border-red-500' : ''}
          `}
        >
          <span className={(value || tempValue) ? 'text-gray-900' : 'text-gray-400'}>
            {getDisplayLabel()}
          </span>
          <img 
            src="/chevron-down.svg" 
            alt="" 
            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-0.5 bg-white border border-gray-100 rounded-[12px] shadow-xl z-50 py-0.5 animate-in fade-in zoom-in duration-100 pointer-events-auto min-w-[280px]">
            {options.map((option) => {
              const matchesSelected = option.value === value;
              const matchesConfig = configOpen === option.value;
              const isActive = configOpen ? matchesConfig : matchesSelected;

              return (
                <div key={option.value} className={`flex flex-col ${matchesConfig ? 'bg-[#FFF5FF]' : ''}`}>
                  {option.value && (
                      <button
                        type="button"
                        onClick={() => handleOptionClick(option)}
                        className={`w-full flex items-center justify-between px-4 py-2 text-[14px] text-left transition-colors
                          ${isActive
                            ? 'text-[#C530C5]' 
                            : 'text-gray-700 hover:bg-gray-50'}
                          ${matchesConfig ? 'bg-[#FFF5FF]' : matchesSelected && !configOpen ? 'bg-[#FFF5FF]' : ''}
                          ${option.disabled ? 'opacity-40 grayscale cursor-not-allowed text-gray-400' : 'cursor-pointer'}
                        `}
                        disabled={option.disabled}
                      >
                      <span className={isActive ? 'font-medium' : ''}>{option.label}</span>
                      {isActive && (
                        <img src="/check-icon.svg" alt="" className="w-4 h-4" />
                      )}
                    </button>
                  )}

                  {matchesConfig && option.config && (
                    <div className="px-4 py-1.5 space-y-2">
                      <div className="flex gap-2">
                        <div className="relative flex-1 items-center flex">
                          {option.config.type === 'currency' && (
                            <span className="absolute left-3 text-[16px] text-gray-500">$</span>
                          )}
                          <input
                            type="text"
                            value={tempValue}
                            onChange={(e) => setTempValue(e.target.value)}
                            placeholder={option.config.placeholder || "e.g. 100"}
                            autoFocus
                            className={`w-full bg-white border border-[#c026d3] rounded-[8px] pr-3 py-2 text-[16px] focus:outline-none placeholder:text-gray-300
                              ${option.config.type === 'currency' ? 'pl-8' : 'pl-3'}
                            `}
                            onClick={(e) => e.stopPropagation()}
                          />
                          {option.config.type === 'percentage' && (
                            <span className="absolute right-3 text-[16px] text-gray-500">%</span>
                          )}
                        </div>

                        {option.config.type === 'posts_period' && (
                          <div className="relative flex-1">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setIsSecondaryOpen(!isSecondaryOpen);
                              }}
                              className="w-full flex items-center justify-between bg-white border border-gray-200 rounded-[8px] px-3 py-2 text-[14px] text-gray-700 cursor-pointer hover:border-gray-300"
                            >
                              <span className={tempSecondaryValue ? 'text-gray-900' : 'text-gray-400'}>
                                {option.config.secondaryOptions?.find(o => o.value === tempSecondaryValue)?.label || option.config.secondaryPlaceholder || 'Select'}
                              </span>
                              <img src="/chevron-down.svg" alt="" className={`w-3 h-3 transition-transform ${isSecondaryOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isSecondaryOpen && (
                              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-100 rounded-[8px] shadow-lg z-[60] py-1">
                                {option.config.secondaryOptions?.map((secOpt) => (
                                  <button
                                    key={secOpt.value}
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setTempSecondaryValue(secOpt.value);
                                      setIsSecondaryOpen(false);
                                    }}
                                    className="w-full px-3 py-1.5 text-[14px] text-left text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
                                  >
                                    {secOpt.label}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {configOpen && (
              <div className="px-4 py-2 bg-white flex gap-2">
                <Button
                  onClick={handleCancelConfig}
                  className="flex-1 px-4 py-2 rounded-[10px] border border-gray-100 bg-white text-[#303030] text-[16px] cursor-pointer"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSaveConfig}
                  className="flex-1 px-4 py-2 rounded-[10px] bg-[#E976E9] text-white font-medium text-[16px] cursor-pointer shadow-sm"
                >
                  Save
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
      {error && <span className="text-[12px] text-red-500">{error}</span>}
    </div>
  );
};

export default Dropdown;
