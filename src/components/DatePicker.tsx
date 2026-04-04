import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import * as Popover from "@radix-ui/react-popover"
import { Calendar } from "./Calendar"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface DatePickerProps {
  selectedDate?: Date;
  onSelect: (date: Date) => void;
  onToggle?: (isOpen: boolean) => void;
  placeholder?: string;
  className?: string;
  min?: Date;
  max?: Date;
}

const DatePicker = ({ 
  selectedDate, 
  onSelect, 
  onToggle, 
  placeholder = 'Select End Date', 
  className = '', 
  min, 
  max 
}: DatePickerProps) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleToggle = (open: boolean) => {
    setIsOpen(open)
    onToggle?.(open)
  }

  return (
    <div className={cn("w-full", className)}>
      <Popover.Root open={isOpen} onOpenChange={handleToggle}>
        <Popover.Trigger asChild>
          <button
            type="button"
            className={cn(
              "w-full flex items-center gap-3 bg-white border border-[#E976E9] rounded-xl px-4 py-3 text-[15px] transition-all cursor-pointer outline-none hover:border-fuchsia-600 focus:ring-2 focus:ring-fuchsia-100 text-left font-normal",
              !selectedDate && "text-gray-400"
            )}
          >
            <CalendarIcon className="h-4 w-4 text-gray-500" />
            <span className="flex-1 truncate">
              {selectedDate ? format(selectedDate, "PPP") : <span>{placeholder}</span>}
            </span>
          </button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            className="bg-white border border-gray-100 rounded-xl shadow-2xl z-[100] p-0 animate-in fade-in zoom-in duration-100 pointer-events-auto"
            align="start"
            sideOffset={4}
          >
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={(date) => {
                if (date) {
                  onSelect(date)
                  handleToggle(false)
                }
              }}
              disabled={(date) => {
                const day = new Date(date)
                day.setHours(0, 0, 0, 0)
                
                if (min) {
                  const minDate = new Date(min)
                  minDate.setHours(0, 0, 0, 0)
                  if (day < minDate) return true
                }
                
                if (max) {
                  const maxDate = new Date(max)
                  maxDate.setHours(0, 0, 0, 0)
                  if (day > maxDate) return true
                }
                
                return false
              }}
              initialFocus
            />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  )
}

export default DatePicker
