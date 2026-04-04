import { useState, useEffect, useMemo } from 'react';
import { useTooltip } from '../hooks/useTooltip';
import Button from './Button';
import Dropdown, { type Option } from './Dropdown';
import Tooltip from './Tooltip';
import DatePicker from './DatePicker';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const rewardEvents: Option[] = [
  { 
    label: 'Cross $X in sales', 
    value: 'sales_x',
    config: {
      type: 'currency',
      template: (val) => `Cross $${val} in sales`
    }
  },
  { 
    label: 'Posts X times every Y period', 
    value: 'posts_x',
    config: {
      type: 'posts_period',
      placeholder: 'eg: 4',
      secondaryPlaceholder: 'Select duration',
      secondaryOptions: [
        { label: '14 days', value: '14_days' },
        { label: '1 month', value: '1_month' },
        { label: '2 months', value: '2_months' },
        { label: '3 months', value: '3_months' },
        { label: '1 year', value: '1_year' },
      ],
      template: (val, period) => `Posts ${val} times every ${period}`
    }
  },
  { label: 'Is Onboarded', value: 'onboarded' },
];

const Modal = ({ isOpen, onClose }: ModalProps) => {
  const [event, setEvent] = useState('');
  const [reward, setReward] = useState('');
  const [isTimeBound, setIsTimeBound] = useState(false);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [endDate, setEndDate] = useState<Date>();
  const [showSuccess, setShowSuccess] = useState(false);
  const { isVisible } = useTooltip();

  const rewardTypes: Option[] = useMemo(() => [
    { 
      label: 'Flat $X bonus', 
      value: 'flat_bonus',
      config: {
        type: 'currency',
        template: (val) => `Flat $${val} bonus`
      }
    },
    { 
      label: 'Upgrade to Y% commission', 
      value: 'commission_y',
      disabled: event === 'onboarded',
      config: {
        type: 'percentage',
        template: (val) => `Upgrade to ${val}% commission`
      }
    },
  ], [event]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // If user selected onboarded but previously selected commission, reset reward
  useEffect(() => {
    if (event === 'onboarded' && reward === 'commission_y') {
      setReward('');
    }
  }, [event, reward]);

  if (!isOpen) return null;

  const isFormValid = event !== '' && reward !== '' && (!isTimeBound || endDate !== undefined);

  const handleCreateReward = () => {
    if (!isFormValid) return;
    
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      resetForm();
      onClose();
    }, 1500);
  };

  const resetForm = () => {
    setEvent('');
    setReward('');
    setIsTimeBound(false);
    setEndDate(undefined);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <div className={`fixed inset-0 z-50 flex ${isDatePickerOpen ? 'items-start pt-12' : 'items-center'} justify-center p-4 overflow-y-auto`}>
      <div className="fixed inset-0 bg-[#0000002B] backdrop-blur-[10px]" />
      
      {showSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none animate-in fade-in duration-300">
          <div className="bg-[#1A1A1A] text-white p-3 rounded-lg flex items-center gap-2 shadow-2xl">
            <div className="w-8 h-8 bg-[#22C55E] rounded-full flex items-center justify-center">
             <img src="./sucess-icon.png" alt="Success" width={26} height={26} />
            </div>
            <span className="text-[18px] font-medium pr-2">Reward Created!</span>
          </div>
        </div>
      )}

      <div className="relative bg-white rounded-[16px] shadow-2xl w-full max-w-lg mb-8 animate-in fade-in zoom-in duration-200">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[20px] font-[500] text-[#303030]">Create your reward system</h2>
            <Button onClick={handleClose} className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer p-0 min-w-0 bg-transparent border-none">
              <img src="/close-icon.svg" alt="Close" className="w-5 h-5" />
            </Button>
          </div>

          <div className="space-y-6">
            <Dropdown
              label="Reward event"
              isRequired
              options={rewardEvents}
              value={event}
              onChange={setEvent}
              placeholder="Select an event"
            />

            <Dropdown
              label="Reward with"
              isRequired
              options={rewardTypes}
              value={reward}
              onChange={setReward}
              placeholder="Select a reward"
            />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[14px] font-medium text-gray-900">Make the reward time bound</p>
                  <p className="text-[12px] text-[#616161]">Choose an end date to stop this reward automatically.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={isTimeBound}
                    onChange={(e) => setIsTimeBound(e.target.checked)}
                  />
                  <div className="w-[26.32px] h-[16px] bg-[#E0E0E0] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-[10.32px] rtl:peer-checked:after:-translate-x-[10.32px] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-[12px] after:w-[12px] after:transition-all peer-checked:bg-[#c026d3]"></div>
                </label>
              </div>

              {isTimeBound && (
                <div className="animate-in fade-in slide-in-from-top-2 duration-200">
                  <DatePicker 
                    selectedDate={endDate}
                    onSelect={setEndDate}
                    onToggle={setIsDatePickerOpen}
                    placeholder="Select End Date"
                    min={new Date(new Date().setDate(new Date().getDate() + 1))}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-4 mt-10 relative">
            <Button 
              onClick={handleClose}
              text="Cancel"
              className="flex-1 px-4 py-2.5 border border-gray-200 text-[#303030] rounded-lg text-[16px] cursor-pointer hover:bg-gray-50 transition-colors bg-white font-normal"
            />
            <div className="flex-1 relative">
              <Button 
                onClick={handleCreateReward}
                text="Create Reward"
                className={`w-full px-4 py-2.5 rounded-lg text-white font-medium text-[16px] transition-colors cursor-pointer ${isFormValid ? 'bg-[#c026d3]' : 'bg-[#F68DF6]'}`}
              />
              <Tooltip 
                text="Choose a reward trigger and a reward to continue" 
                isVisible={!isFormValid && isVisible} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
