// Our shield with a check. The whole brand in one little mark.
export default function Logo() {
  return (
    <span className="logo">
      <svg className="logo-mark" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M16 2.5 4 7.5v8.2c0 7.3 5.1 11.6 12 13.8 6.9-2.2 12-6.5 12-13.8V7.5L16 2.5Z"
          fill="#2563eb"
        />
        <path
          d="m10.5 16.2 3.6 3.6 7.2-7.4"
          stroke="#fff"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Vouch
    </span>
  )
}
