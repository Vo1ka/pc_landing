export function Glow({
    className = "",
    color = "rgba(124,58,237,0.25)",
    size = 500,
}: { className?: string; color?: string; size?: number }) {
    return (
        <div
            className={`pointer-events-none absolute blur-3xl ${className}`}
            style={{
                width: size,
                height: size,
                background: `radial-gradient(circle at 50% 50%, ${color}, transparent 60%)`,
            }}
            aria-hidden
        />
    );
}