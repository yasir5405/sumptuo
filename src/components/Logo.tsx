const Logo = ({ size }: { size: "xs" | "sm" | "md" | "lg" }) => {
  const configs = {
    xs: { box: 20 },
    sm: { box: 28 },
    md: { box: 52 },
    lg: { box: 80 },
  };

  const c = configs[size];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={c.box}
      height={c.box}
      viewBox="178.48 823.64 48.84 56.4"
      role="img"
      style={{ display: "block", flexShrink: 0 }}
      className="text-black dark:text-white"
    >
      <polygon
        fill="currentColor"
        points="178.48 880.04 195.76 880.04 227.32 848.48 212.29 848.48 178.48 880.04"
      />
      <path
        fill="currentColor"
        d="M227.32,848.48l-10.68-24.84-24.84,24.84h35.52Z"
      />
    </svg>
  );
};

export default Logo;
