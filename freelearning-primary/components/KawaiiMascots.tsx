// Inline SVG kawaii mascot characters — one per level.
// Style: clean ink-outline, minimal fills, like the hand-drawn logos in the reference.
// Each character is ~120×120px viewBox so it scales cleanly.

export function NekoMascot({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <ellipse cx="60" cy="80" rx="30" ry="26" fill="white" stroke="#1A1A1A" strokeWidth="3"/>
      {/* Head */}
      <circle cx="60" cy="48" r="28" fill="white" stroke="#1A1A1A" strokeWidth="3"/>
      {/* Ears */}
      <polygon points="36,26 28,8 48,22" fill="white" stroke="#1A1A1A" strokeWidth="2.5" strokeLinejoin="round"/>
      <polygon points="84,26 92,8 72,22" fill="white" stroke="#1A1A1A" strokeWidth="2.5" strokeLinejoin="round"/>
      {/* Inner ears */}
      <polygon points="37,23 32,14 44,22" fill="#FFB7C5"/>
      <polygon points="83,23 88,14 76,22" fill="#FFB7C5"/>
      {/* Eyes */}
      <ellipse cx="50" cy="46" rx="6" ry="7" fill="#1A1A1A"/>
      <ellipse cx="70" cy="46" rx="6" ry="7" fill="#1A1A1A"/>
      <circle cx="52" cy="44" r="2" fill="white"/>
      <circle cx="72" cy="44" r="2" fill="white"/>
      {/* Nose */}
      <ellipse cx="60" cy="54" rx="3" ry="2" fill="#FFB7C5"/>
      {/* Mouth */}
      <path d="M56 57 Q60 61 64 57" stroke="#1A1A1A" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      {/* Whiskers */}
      <line x1="33" y1="53" x2="52" y2="55" stroke="#1A1A1A" strokeWidth="1.2"/>
      <line x1="33" y1="57" x2="52" y2="57" stroke="#1A1A1A" strokeWidth="1.2"/>
      <line x1="87" y1="53" x2="68" y2="55" stroke="#1A1A1A" strokeWidth="1.2"/>
      <line x1="87" y1="57" x2="68" y2="57" stroke="#1A1A1A" strokeWidth="1.2"/>
      {/* Book */}
      <rect x="36" y="88" width="48" height="10" rx="2" fill="#FFB7C5" stroke="#1A1A1A" strokeWidth="2"/>
      <line x1="60" y1="88" x2="60" y2="98" stroke="#1A1A1A" strokeWidth="1.5"/>
    </svg>
  );
}

export function UsagiMascot({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Long ears */}
      <ellipse cx="44" cy="18" rx="10" ry="22" fill="white" stroke="#1A1A1A" strokeWidth="2.5"/>
      <ellipse cx="76" cy="18" rx="10" ry="22" fill="white" stroke="#1A1A1A" strokeWidth="2.5"/>
      <ellipse cx="44" cy="18" rx="5" ry="17" fill="#C5D9FF"/>
      <ellipse cx="76" cy="18" rx="5" ry="17" fill="#C5D9FF"/>
      {/* Head */}
      <circle cx="60" cy="56" r="28" fill="white" stroke="#1A1A1A" strokeWidth="3"/>
      {/* Body */}
      <ellipse cx="60" cy="90" rx="24" ry="20" fill="white" stroke="#1A1A1A" strokeWidth="2.5"/>
      {/* Eyes — happy crescent */}
      <path d="M47 53 Q53 47 57 53" fill="#1A1A1A"/>
      <path d="M63 53 Q69 47 73 53" fill="#1A1A1A"/>
      {/* Nose */}
      <ellipse cx="60" cy="60" rx="3" ry="2" fill="#FFB7C5"/>
      {/* Mouth */}
      <path d="M55 63 Q60 68 65 63" stroke="#1A1A1A" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      {/* Blush */}
      <ellipse cx="46" cy="62" rx="6" ry="4" fill="#FFD0DC" opacity="0.6"/>
      <ellipse cx="74" cy="62" rx="6" ry="4" fill="#FFD0DC" opacity="0.6"/>
      {/* Star */}
      <text x="85" y="35" fontSize="14" fill="#1A1A1A">★</text>
    </svg>
  );
}

export function KumaMascot({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Ears */}
      <circle cx="36" cy="30" r="14" fill="white" stroke="#1A1A1A" strokeWidth="2.5"/>
      <circle cx="84" cy="30" r="14" fill="white" stroke="#1A1A1A" strokeWidth="2.5"/>
      <circle cx="36" cy="30" r="8" fill="#FFE08A"/>
      <circle cx="84" cy="30" r="8" fill="#FFE08A"/>
      {/* Head */}
      <circle cx="60" cy="58" r="34" fill="white" stroke="#1A1A1A" strokeWidth="3"/>
      {/* Snout */}
      <ellipse cx="60" cy="68" rx="14" ry="10" fill="#FFE08A" stroke="#1A1A1A" strokeWidth="2"/>
      {/* Eyes */}
      <circle cx="48" cy="52" r="7" fill="#1A1A1A"/>
      <circle cx="72" cy="52" r="7" fill="#1A1A1A"/>
      <circle cx="50" cy="50" r="2.5" fill="white"/>
      <circle cx="74" cy="50" r="2.5" fill="white"/>
      {/* Nose */}
      <ellipse cx="60" cy="64" rx="4" ry="3" fill="#1A1A1A"/>
      {/* Mouth */}
      <path d="M55 68 Q60 73 65 68" stroke="#1A1A1A" strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* Graduation cap */}
      <rect x="34" y="26" width="52" height="7" rx="2" fill="#1A1A1A"/>
      <rect x="56" y="18" width="8" height="9" fill="#1A1A1A"/>
      <line x1="82" y1="27" x2="86" y2="38" stroke="#1A1A1A" strokeWidth="2"/>
      <circle cx="86" cy="40" r="3" fill="#FFE08A" stroke="#1A1A1A" strokeWidth="1.5"/>
    </svg>
  );
}

export function KitsuneMascot({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Pointed ears */}
      <polygon points="32,42 22,12 52,36" fill="white" stroke="#1A1A1A" strokeWidth="2.5" strokeLinejoin="round"/>
      <polygon points="88,42 98,12 68,36" fill="white" stroke="#1A1A1A" strokeWidth="2.5" strokeLinejoin="round"/>
      <polygon points="34,40 26,18 48,36" fill="#B5F0C8"/>
      <polygon points="86,40 94,18 72,36" fill="#B5F0C8"/>
      {/* Head */}
      <ellipse cx="60" cy="62" rx="32" ry="28" fill="white" stroke="#1A1A1A" strokeWidth="3"/>
      {/* Fox snout (pointed) */}
      <ellipse cx="60" cy="74" rx="12" ry="8" fill="#FFF0D0" stroke="#1A1A1A" strokeWidth="1.8"/>
      {/* Eyes — sly */}
      <path d="M42 56 Q49 50 56 56" stroke="#1A1A1A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M64 56 Q71 50 78 56" stroke="#1A1A1A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <ellipse cx="49" cy="56" rx="4" ry="5" fill="#1A1A1A"/>
      <ellipse cx="71" cy="56" rx="4" ry="5" fill="#1A1A1A"/>
      <circle cx="50.5" cy="54.5" r="1.5" fill="white"/>
      <circle cx="72.5" cy="54.5" r="1.5" fill="white"/>
      {/* Nose */}
      <polygon points="60,69 57,73 63,73" fill="#1A1A1A"/>
      {/* Smile */}
      <path d="M54 75 Q60 80 66 75" stroke="#1A1A1A" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      {/* Blush */}
      <ellipse cx="44" cy="68" rx="7" ry="4" fill="#FFD0A8" opacity="0.5"/>
      <ellipse cx="76" cy="68" rx="7" ry="4" fill="#FFD0A8" opacity="0.5"/>
      {/* Pencil */}
      <rect x="90" y="55" width="6" height="32" rx="2" fill="#FFE08A" stroke="#1A1A1A" strokeWidth="1.5" transform="rotate(15 90 55)"/>
      <polygon points="90,87 96,87 93,95" fill="#1A1A1A" transform="rotate(15 90 55)"/>
    </svg>
  );
}

export function ShibaMascot({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Ears — floppy */}
      <ellipse cx="36" cy="34" rx="14" ry="18" fill="white" stroke="#1A1A1A" strokeWidth="2.5" transform="rotate(-15 36 34)"/>
      <ellipse cx="84" cy="34" rx="14" ry="18" fill="white" stroke="#1A1A1A" strokeWidth="2.5" transform="rotate(15 84 34)"/>
      <ellipse cx="36" cy="36" rx="8" ry="12" fill="#FFB598" transform="rotate(-15 36 36)"/>
      <ellipse cx="84" cy="36" rx="8" ry="12" fill="#FFB598" transform="rotate(15 84 36)"/>
      {/* Head */}
      <ellipse cx="60" cy="62" rx="32" ry="30" fill="white" stroke="#1A1A1A" strokeWidth="3"/>
      {/* Muzzle */}
      <ellipse cx="60" cy="72" rx="16" ry="10" fill="#FFF0D0" stroke="#1A1A1A" strokeWidth="2"/>
      {/* Eyes */}
      <ellipse cx="47" cy="55" rx="7" ry="8" fill="#1A1A1A"/>
      <ellipse cx="73" cy="55" rx="7" ry="8" fill="#1A1A1A"/>
      <circle cx="49" cy="53" r="2.5" fill="white"/>
      <circle cx="75" cy="53" r="2.5" fill="white"/>
      {/* Nose */}
      <ellipse cx="60" cy="67" rx="5" ry="3.5" fill="#1A1A1A"/>
      <ellipse cx="59" cy="66" rx="1.5" ry="1" fill="white"/>
      {/* Happy mouth / tongue */}
      <path d="M53 72 Q60 78 67 72" stroke="#1A1A1A" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <ellipse cx="60" cy="77" rx="5" ry="4" fill="#FF8FA0"/>
      {/* Blush */}
      <ellipse cx="40" cy="67" rx="7" ry="4.5" fill="#FFBB98" opacity="0.5"/>
      <ellipse cx="80" cy="67" rx="7" ry="4.5" fill="#FFBB98" opacity="0.5"/>
    </svg>
  );
}

export function TanukiMascot({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Ears */}
      <ellipse cx="40" cy="28" rx="12" ry="15" fill="white" stroke="#1A1A1A" strokeWidth="2.5" transform="rotate(-10 40 28)"/>
      <ellipse cx="80" cy="28" rx="12" ry="15" fill="white" stroke="#1A1A1A" strokeWidth="2.5" transform="rotate(10 80 28)"/>
      <ellipse cx="40" cy="28" rx="6" ry="9" fill="#D4B5FF" transform="rotate(-10 40 28)"/>
      <ellipse cx="80" cy="28" rx="6" ry="9" fill="#D4B5FF" transform="rotate(10 80 28)"/>
      {/* Head */}
      <circle cx="60" cy="62" r="32" fill="white" stroke="#1A1A1A" strokeWidth="3"/>
      {/* Raccoon mask */}
      <ellipse cx="47" cy="56" rx="12" ry="9" fill="#D4B5FF" opacity="0.4"/>
      <ellipse cx="73" cy="56" rx="12" ry="9" fill="#D4B5FF" opacity="0.4"/>
      {/* Eyes — round and smart */}
      <circle cx="47" cy="55" r="8" fill="#1A1A1A"/>
      <circle cx="73" cy="55" r="8" fill="#1A1A1A"/>
      <circle cx="49" cy="53" r="3" fill="white"/>
      <circle cx="75" cy="53" r="3" fill="white"/>
      <circle cx="50" cy="52" r="1.5" fill="#1A1A1A"/>
      <circle cx="76" cy="52" r="1.5" fill="#1A1A1A"/>
      {/* Snout */}
      <ellipse cx="60" cy="69" rx="14" ry="9" fill="#F0E8FF" stroke="#1A1A1A" strokeWidth="2"/>
      {/* Nose */}
      <ellipse cx="60" cy="65" rx="4" ry="3" fill="#1A1A1A"/>
      {/* Wise smile */}
      <path d="M52 72 Q60 77 68 72" stroke="#1A1A1A" strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* PSLE star badge */}
      <circle cx="92" cy="30" r="12" fill="#FFE08A" stroke="#1A1A1A" strokeWidth="2"/>
      <text x="86" y="35" fontSize="12" fontWeight="bold" fill="#1A1A1A">P6</text>
    </svg>
  );
}

// Returns the mascot component for a given level key.
// Uses AI-generated chibi/kawaii portraits at /public/mascots/{p1..p6}.png.
export function MascotFor({ levelKey, size = 80 }: { levelKey: string; size?: number }) {
  const valid = ["p1", "p2", "p3", "p4", "p5", "p6"];
  if (!valid.includes(levelKey)) return null;
  return (
    <img
      src={`/mascots/${levelKey}.png`}
      alt={`${levelKey.toUpperCase()} mascot`}
      width={size}
      height={size}
      className="block"
      style={{ width: size, height: size, objectFit: "contain" }}
    />
  );
}
