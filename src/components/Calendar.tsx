import * as React from "react"
import { DayPicker } from "react-day-picker"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import "react-day-picker/style.css"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <div className={cn("p-4 bg-white rounded-2xl shadow-xl border border-gray-100", className)}>
      <DayPicker
        showOutsideDays={showOutsideDays}
        classNames={{
          months: "relative",
          month: "space-y-4",
          month_caption: "flex justify-center pt-2 relative items-center mb-6",
          caption_label: "text-[16px] font-semibold text-[#303030]",
          nav: "absolute w-full flex items-center justify-between z-10 pointer-events-none px-0.5",
          button_previous: "h-9 w-9 bg-white border border-gray-200 p-0 opacity-100 hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center justify-center rounded-xl cursor-pointer pointer-events-auto shadow-sm",
          button_next: "h-9 w-9 bg-white border border-gray-200 p-0 opacity-100 hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center justify-center rounded-xl cursor-pointer pointer-events-auto shadow-sm",
          month_grid: "w-full border-collapse",
          weekdays: "flex mb-4",
          weekday: "text-[#616161] w-9 flex-1 text-center font-medium text-[13px] border-none shadow-none",
          weeks: "space-y-1.5",
          week: "flex w-full mt-1",
          day: cn(
            "h-9 w-9 p-0 font-medium rounded-xl hover:bg-fuchsia-50 hover:text-fuchsia-600 transition-all cursor-pointer flex items-center justify-center mx-auto text-[14px] text-[#303030]"
          ),
          selected: "bg-[#D946EF] text-white hover:bg-[#D946EF] hover:text-white focus:bg-[#D946EF] focus:text-white font-bold shadow-md !opacity-100",
          today: "text-[#D946EF] font-bold border-b-2 border-fuchsia-400",
          outside: "text-[#D0D0D0] opacity-20 pointer-events-none",
          disabled: "text-[#D0D0D0] opacity-20 cursor-not-allowed",
          hidden: "invisible",
          ...classNames,
        }}
        components={{
          Chevron: ({ orientation }) => {
            const Icon = orientation === "left" ? ChevronLeft : ChevronRight
            return <Icon className="h-4 w-4 text-gray-600" />
          },
        }}
        {...props}
      />
      <style>{`
        /* Reset library overrides for v9 */
        .rdp-nav {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: space-between;
          width: 100%;
          pointer-events: none;
        }
        .rdp-weekdays {
          display: flex !important;
          justify-content: space-around !important;
        }
        .rdp-week {
          display: flex !important;
          justify-content: space-around !important;
        }
        /* Custom selected day shape */
        .rdp-day_selected {
          background-color: #D946EF !important;
          color: white !important;
          border-radius: 12px !important;
        }
        /* Fix for today text color specifically for numeric days to avoid heading overlap */
        .rdp-day_today:not(.rdp-weekday) {
          color: #D946EF !important;
          font-weight: 700 !important;
        }
        .rdp-button_previous, .rdp-button_next {
          background-color: white !important;
          border: 1px solid #E5E7EB !important;
          pointer-events: auto !important;
        }
        .rdp-button_previous:hover, .rdp-button_next:hover {
          background-color: #F9FAFB !important;
          border-color: #D1D5DB !important;
        }
      `}</style>
    </div>
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
