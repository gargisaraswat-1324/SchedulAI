
import { useState } from "react";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock,
  Download,
  Filter,
} from "lucide-react";

type ClassSession = {
  day: string;
  time: string;
  start: number;
  duration: number;
  subject: string;
  faculty: string;
  room: string;
  section: string;
  shift: string;
  color: string;
};

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const timeSlots = [
  { label: "08:00 AM", start: 8 },
  { label: "09:00 AM", start: 9 },
  { label: "10:00 AM", start: 10 },
  { label: "11:00 AM", start: 11 },
  { label: "12:00 PM", start: 12 },
  { label: "01:00 PM", start: 13 },
  { label: "02:00 PM", start: 14 },
  { label: "03:00 PM", start: 15 },
];

const initialSessions: ClassSession[] = [
  {
    day: "Monday",
    time: "08:00 AM",
    start: 8,
    duration: 1,
    subject: "Data Structures",
    faculty: "Dr. Sharma",
    room: "A-101",
    section: "CSE-A",
    shift: "Shift 1",
    color: "bg-indigo-50 border-indigo-200 text-indigo-800",
  },
  {
    day: "Monday",
    time: "10:00 AM",
    start: 10,
    duration: 1,
    subject: "Database Systems",
    faculty: "Prof. Verma",
    room: "CS-Lab-1",
    section: "CSE-B",
    shift: "Shift 2",
    color: "bg-sky-50 border-sky-200 text-sky-800",
  },
  {
    day: "Tuesday",
    time: "09:00 AM",
    start: 9,
    duration: 1,
    subject: "Operating Systems",
    faculty: "Dr. Singh",
    room: "B-204",
    section: "CSE-A",
    shift: "Shift 1",
    color: "bg-violet-50 border-violet-200 text-violet-800",
  },
  {
    day: "Tuesday",
    time: "11:00 AM",
    start: 11,
    duration: 1,
    subject: "Computer Networks",
    faculty: "Prof. Mehta",
    room: "A-102",
    section: "CSE-B",
    shift: "Shift 2",
    color: "bg-emerald-50 border-emerald-200 text-emerald-800",
  },
  {
    day: "Wednesday",
    time: "08:00 AM",
    start: 8,
    duration: 1,
    subject: "Database Systems",
    faculty: "Prof. Verma",
    room: "A-101",
    section: "CSE-A",
    shift: "Shift 1",
    color: "bg-sky-50 border-sky-200 text-sky-800",
  },
  {
    day: "Wednesday",
    time: "01:00 PM",
    start: 13,
    duration: 1,
    subject: "Data Structures",
    faculty: "Dr. Sharma",
    room: "CS-Lab-1",
    section: "CSE-B",
    shift: "Shift 2",
    color: "bg-indigo-50 border-indigo-200 text-indigo-800",
  },
  {
    day: "Thursday",
    time: "10:00 AM",
    start: 10,
    duration: 1,
    subject: "Operating Systems",
    faculty: "Dr. Singh",
    room: "A-102",
    section: "CSE-A",
    shift: "Shift 1",
    color: "bg-violet-50 border-violet-200 text-violet-800",
  },
  {
    day: "Thursday",
    time: "02:00 PM",
    start: 14,
    duration: 1,
    subject: "Computer Networks",
    faculty: "Prof. Mehta",
    room: "B-204",
    section: "CSE-B",
    shift: "Shift 2",
    color: "bg-emerald-50 border-emerald-200 text-emerald-800",
  },
  {
    day: "Friday",
    time: "09:00 AM",
    start: 9,
    duration: 1,
    subject: "Data Structures",
    faculty: "Dr. Sharma",
    room: "A-101",
    section: "CSE-A",
    shift: "Shift 1",
    color: "bg-indigo-50 border-indigo-200 text-indigo-800",
  },
  {
    day: "Friday",
    time: "12:00 PM",
    start: 12,
    duration: 1,
    subject: "Database Systems",
    faculty: "Prof. Verma",
    room: "CS-Lab-1",
    section: "CSE-B",
    shift: "Shift 2",
    color: "bg-sky-50 border-sky-200 text-sky-800",
  },
];

export default function TimetablePage() {
  const [sessions] = useState(initialSessions);
  const [section, setSection] = useState("All Sections");
  const [shift, setShift] = useState("All Shifts");
  const [weekOffset, setWeekOffset] = useState(0);

  const filteredSessions = sessions.filter((session) => {
    const sectionMatches =
      section === "All Sections" || session.section === section;
    const shiftMatches = shift === "All Shifts" || session.shift === shift;

    return sectionMatches && shiftMatches;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-medium text-indigo-600">
            ACADEMIC PLANNING
          </p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
            Timetable
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            View and manage your weekly academic schedule.
          </p>
        </div>

        <button
          onClick={() => window.print()}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"
        >
          <Download size={17} />
          Print timetable
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <SummaryCard
          label="Scheduled classes"
          value={filteredSessions.length.toString()}
          detail="For the selected filters"
          icon={<CalendarDays size={20} />}
        />
        <SummaryCard
          label="Working days"
          value="5"
          detail="Monday to Friday"
          icon={<Clock size={20} />}
        />
        <SummaryCard
          label="Academic shifts"
          value="2"
          detail="Morning and day shifts"
          icon={<Filter size={20} />}
        />
      </div>

      <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col gap-4 border-b border-slate-100 p-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-semibold text-slate-900">
              Weekly schedule
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Sample schedule · {weekOffset === 0 ? "Current view" : weekOffset > 0 ? `${weekOffset} week(s) ahead` : `${Math.abs(weekOffset)} week(s) back`}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <select
              value={section}
              onChange={(event) => setSection(event.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-indigo-400"
            >
              <option>All Sections</option>
              <option>CSE-A</option>
              <option>CSE-B</option>
            </select>

            <select
              value={shift}
              onChange={(event) => setShift(event.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-indigo-400"
            >
              <option>All Shifts</option>
              <option>Shift 1</option>
              <option>Shift 2</option>
            </select>

            <div className="flex items-center gap-1 rounded-xl border border-slate-200 p-1">
              <button
                onClick={() => setWeekOffset((value) => value - 1)}
                aria-label="Previous week"
                className="rounded-lg p-2 hover:bg-slate-100"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => setWeekOffset(0)}
                className="rounded-lg px-2 py-1.5 text-xs font-semibold hover:bg-slate-100"
              >
                Today
              </button>
              <button
                onClick={() => setWeekOffset((value) => value + 1)}
                aria-label="Next week"
                className="rounded-lg p-2 hover:bg-slate-100"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[850px]">
            <div className="grid grid-cols-[90px_repeat(5,minmax(0,1fr))] border-b border-slate-100 bg-slate-50">
              <div className="p-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                Time
              </div>
              {days.map((day) => (
                <div
                  key={day}
                  className="border-l border-slate-100 p-4 text-center text-sm font-semibold text-slate-700"
                >
                  {day}
                </div>
              ))}
            </div>

            {timeSlots.map((slot) => (
              <div
                key={slot.start}
                className="grid min-h-[105px] grid-cols-[90px_repeat(5,minmax(0,1fr))] border-b border-slate-100 last:border-b-0"
              >
                <div className="p-3 text-xs font-medium text-slate-500">
                  {slot.label}
                </div>

                {days.map((day) => {
                  const classSession = filteredSessions.find(
                    (session) =>
                      session.day === day && session.start === slot.start
                  );

                  return (
                    <div
                      key={day}
                      className="border-l border-slate-100 p-1.5"
                    >
                      {classSession && (
                        <article
                          className={`h-full rounded-xl border p-2.5 ${classSession.color}`}
                        >
                          <p className="text-xs font-bold leading-5">
                            {classSession.subject}
                          </p>
                          <p className="mt-1 text-[11px] opacity-80">
                            {classSession.faculty}
                          </p>
                          <p className="mt-1 text-[11px] font-medium">
                            {classSession.room} · {classSession.section}
                          </p>
                        </article>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-slate-100 px-5 py-4 text-xs text-slate-500">
          <span className="font-semibold text-slate-700">Legend</span>
          <span className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-indigo-400" />
            Data Structures
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-sky-400" />
            Database Systems
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-violet-400" />
            Operating Systems
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            Computer Networks
          </span>
        </div>
      </section>

      <p className="text-center text-xs text-slate-400">
        SchedulAI · Sample timetable data for demonstration
      </p>
    </div>
  );
}

function SummaryCard({
  label,
  value,
  detail,
  icon,
}: {
  label: string;
  value: string;
  detail: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{label}</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">{value}</p>
        </div>
        <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600">
          {icon}
        </div>
      </div>
      <p className="mt-3 text-xs text-slate-500">{detail}</p>
    </div>
  );
}
