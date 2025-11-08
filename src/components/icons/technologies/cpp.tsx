export const CppIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>C++</title>
      {/* C-shaped arc */}
      <path d="M16.5 6.5A7 7 0 1 0 16.5 17.5" />

      {/* First plus */}
      <path d="M18.25 7.75h1.5" />
      <path d="M19 7.0v1.5" />

      {/* Second plus */}
      <path d="M18.25 11.25h1.5" />
      <path d="M19 10.5v1.5" />
    </svg>
  );
};
