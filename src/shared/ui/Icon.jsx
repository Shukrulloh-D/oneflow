// Simple inline SVG icons. Usage: <Icon name="globe" size={20} />
const ICONS = {
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3.2 3 3.2 15 0 18M12 3c-3.2 3-3.2 15 0 18" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  'chevron-down': <path d="M5 9l7 7 7-7" />,
  'chevron-left': <path d="M15 5l-7 7 7 7" />,
  'chevron-right': <path d="M9 5l7 7-7 7" />,
  play: <path d="M8 5v14l11-7z" fill="currentColor" stroke="none" />,
  'check-circle': (
    <>
      <circle cx="12" cy="12" r="10" fill="currentColor" stroke="none" />
      <path d="M7.5 12.5l3 3 6-6.5" stroke="#fff" />
    </>
  ),
  // tab icons
  create: <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />,
  collaborate: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
    </>
  ),
  sign: <path d="M6 6l12 12M18 6L6 18" strokeWidth="2.6" />,
  manage: <circle cx="12" cy="12" r="8" strokeDasharray="1 3.2" strokeWidth="2.6" />,
  analyze: <path d="M12 4v16M4 12h16" strokeWidth="2.6" />,
  integrate: <path d="M4 4l6 6M20 4l-6 6M4 20l6-6M20 20l-6-6" strokeWidth="2.4" />,
  // round feature icons
  friction: (
    <>
      <circle cx="8" cy="17" r="2.6" />
      <circle cx="16" cy="17" r="2.6" />
      <path d="M8 14.4V6M16 14.4V6M5 6h14" />
    </>
  ),
  data: (
    <>
      <path d="M4 20l10-10" />
      <path d="M15 3v4M13 5h4M19 10v3M17.5 11.5h3" />
    </>
  ),
  control: (
    <>
      <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6z" />
      <path d="M5 21l5-5" />
    </>
  ),
}

export function Icon({ name, size = 24, className }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  )
}
