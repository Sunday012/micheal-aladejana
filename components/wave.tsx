/**
 * Curved section divider. `fill` is the colour of the *neighbouring* section,
 * so the wave reads as that section spilling into this one.
 */
export default function Wave({
  position = "bottom",
  fill = "fill-cream-100",
  className = "",
}: {
  position?: "top" | "bottom";
  fill?: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 z-10 ${
        position === "top" ? "top-0" : "bottom-0"
      } ${className}`}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={`block h-[52px] w-full sm:h-[80px] lg:h-[104px] ${fill} ${
          position === "top" ? "" : "rotate-180"
        }`}
      >
        <path d="M0,58 C170,106 330,14 548,30 C752,45 902,116 1118,100 C1272,88 1376,46 1440,18 L1440,0 L0,0 Z" />
      </svg>
    </div>
  );
}
