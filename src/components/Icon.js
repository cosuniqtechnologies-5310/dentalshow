const paths = {
  calendar: (
    <>
      <rect x="3" y="4.5" width="18" height="16.5" rx="3" />
      <path d="M3 9.5h18M8 3v3M16 3v3" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  ticket: (
    <>
      <path d="M3 9a2 2 0 0 0 0 6v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3a2 2 0 0 1 0-6V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1z" />
      <path d="M14 5v14" strokeDasharray="2 2.5" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowUpRight: <path d="M7 17 17 7M8 7h9v9" />,
  mic: (
    <>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
      <path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.2a6.5 6.5 0 0 1 3.5 5.8" />
    </>
  ),
  handshake: (
    <>
      <path d="M3 11l4-4 4 1 3-2 3 2 4 3" />
      <path d="M3 11l5 5a2 2 0 0 0 3 0l1-1a2 2 0 0 0 3 0l1-1a2 2 0 0 0 3 0l2-2" />
    </>
  ),
  sparkle: (
    <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z" />
  ),
  flask: (
    <>
      <path d="M9 3h6M10 3v6L5 19a1.5 1.5 0 0 0 1.4 2h11.2a1.5 1.5 0 0 0 1.4-2l-5-10V3" />
      <path d="M7.5 15h9" />
    </>
  ),
  store: (
    <>
      <path d="M4 9l1.5-5h13L20 9" />
      <path d="M4 9a2.7 2.7 0 0 0 5.3 0 2.7 2.7 0 0 0 5.4 0A2.7 2.7 0 0 0 20 9" />
      <path d="M5 11.5V20h14v-8.5M10 20v-5h4v5" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  phone: (
    <path d="M5 4h3.5l1.6 4.2-2.2 1.4a11 11 0 0 0 6.5 6.5l1.4-2.2L20 15.5V19a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z" />
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  chevronLeft: <path d="m15 5-7 7 7 7" />,
  chevronRight: <path d="m9 5 7 7-7 7" />,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  expand: <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />,
  star: (
    <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" />
  ),
  facebook: <path d="M14 8h3V4h-3.5A4.5 4.5 0 0 0 9 8.5V11H6v4h3v6h4v-6h3l1-4h-4V8.8c0-.5.3-.8 1-.8z" />,
  twitter: <path d="M4 4l6.8 9.3L4.3 20H6l5.6-5.9L16 20h4l-7.2-9.8L19 4h-1.7l-5.1 5.4L8.2 4z" />,
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r=".6" />
    </>
  ),
  linkedin: (
    <>
      <path d="M6.5 9.5v8M6.5 6.2v.1M11 17.5v-8M11 12.5a3 3 0 0 1 6 0v5" />
    </>
  ),
  youtube: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="m10.5 9.5 4 2.5-4 2.5z" />
    </>
  ),
  tooth: (
    <path d="M7.2 3.5c-2.2 0-4 1.8-4 4.4 0 1.9.8 3.1 1.4 4.5.7 1.7.7 3.7 1.2 5.5.4 1.5 1 2.6 2 2.6s1.4-1.5 1.7-3c.2-1.2.6-2.2 1.5-2.2s1.3 1 1.5 2.2c.3 1.5.7 3 1.7 3s1.6-1.1 2-2.6c.5-1.8.5-3.8 1.2-5.5.6-1.4 1.4-2.6 1.4-4.5 0-2.6-1.8-4.4-4-4.4-1.6 0-2.2.8-3.6.8S8.8 3.5 7.2 3.5z" />
  ),
  implant: (
    <>
      <path d="M7 4h10M8 7h8M9 10h6M10 13h4M11 16h2M12 18v3" />
      <path d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" />
    </>
  ),
  aligner: (
    <>
      <path d="M3 13c1.5-4 5-7 9-7s7.5 3 9 7" />
      <path d="M5 16c2-2.5 4.5-4 7-4s5 1.5 7 4" />
      <circle cx="12" cy="6" r="1.5" />
    </>
  ),
  cpu: (
    <>
      <rect x="5.5" y="5.5" width="13" height="13" rx="2.5" />
      <rect x="9" y="9" width="6" height="6" rx="1" />
      <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3s8 3 8 9c0 6-6 9-8 10-2-1-8-4-8-10 0-6 8-9 8-9z" />
      <path d="M12 8v8M8 12h8" />
    </>
  ),
  cloud: (
    <path d="M17.5 19H6.5a4.5 4.5 0 0 1-.5-8.97 6 6 0 0 1 11.5-1.53A4.5 4.5 0 0 1 17.5 19z" />
  ),
  scan: (
    <>
      <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" />
      <line x1="7" y1="12" x2="17" y2="12" />
    </>
  ),
  crown: (
    <path d="M4 18h16M5 15l2-9 5 4 5-4 2 9z" />
  ),
  cube: (
    <>
      <path d="M21 8.5l-9-5-9 5 9 5 9-5z" />
      <path d="M3 8.5v7l9 5v-7" />
      <path d="M21 8.5v7l-9 5" />
    </>
  ),
};

export default function Icon({ name, size = 20, className = "", strokeWidth = 1.7, ...rest }) {
  const content = paths[name];
  if (!content) return null;
  return (
    <svg
      className={`icon ${className}`.trim()}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {content}
    </svg>
  );
}
