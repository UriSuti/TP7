interface IconProps {
    size?: number
    filled?: boolean
    className?: string
}

const base = (size: number, className?: string) => ({
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
})

export const HeartIcon = ({ size = 22, filled = false, className }: IconProps) => (
    <svg {...base(size, className)} fill={filled ? 'currentColor' : 'none'}>
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
    </svg>
)

export const CommentIcon = ({ size = 22, className }: IconProps) => (
    <svg {...base(size, className)}>
        <path d="M21 11.5a8.4 8.4 0 0 1-11.9 7.6L3 21l1.9-6.1A8.4 8.4 0 1 1 21 11.5z" />
    </svg>
)

export const SendIcon = ({ size = 22, className }: IconProps) => (
    <svg {...base(size, className)}>
        <path d="M22 2 11 13" />
        <path d="M22 2 15 22l-4-9-9-4 20-7z" />
    </svg>
)

export const SearchIcon = ({ size = 18, className }: IconProps) => (
    <svg {...base(size, className)}>
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
    </svg>
)

export const SettingsIcon = ({ size = 22, className }: IconProps) => (
    <svg {...base(size, className)}>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z" />
    </svg>
)

export const CameraIcon = ({ size = 22, className }: IconProps) => (
    <svg {...base(size, className)}>
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
    </svg>
)

export const HomeIcon = ({ size = 24, className }: IconProps) => (
    <svg {...base(size, className)}>
        <path d="M3 9.5 12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z" />
    </svg>
)

export const ExploreIcon = ({ size = 24, className }: IconProps) => (
    <svg {...base(size, className)}>
        <circle cx="12" cy="12" r="9" />
        <path d="m15.5 8.5-2 5-5 2 2-5 5-2z" />
    </svg>
)

export const ReelsIcon = ({ size = 24, className }: IconProps) => (
    <svg {...base(size, className)}>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M3 8h18M8 3l2.5 5M14 3l2.5 5" />
        <path d="m10.5 11 4.5 2.5-4.5 2.5z" fill="currentColor" stroke="none" />
    </svg>
)

export const TvIcon = ({ size = 24, className }: IconProps) => (
    <svg {...base(size, className)}>
        <rect x="2" y="7" width="20" height="13" rx="2" />
        <path d="m7 3 5 4 5-4" />
    </svg>
)

export const BellIcon = ({ size = 24, className }: IconProps) => (
    <svg {...base(size, className)}>
        <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.7 21a2 2 0 0 1-3.4 0" />
    </svg>
)

export const VerifiedIcon = ({ size = 16, className }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
        <path
        fill="#3897f0"
        d="M12 1.5 14.6 4l3.5-.3 1 3.4 3 1.9-1.4 3.2 1.4 3.2-3 1.9-1 3.4-3.5-.3L12 22.5 9.4 20l-3.5.3-1-3.4-3-1.9 1.4-3.2L1.9 8.6l3-1.9 1-3.4L9.4 4z"
        />
        <path fill="#fff" d="m10.6 15.2-2.8-2.8 1.2-1.2 1.6 1.6 3.8-3.8 1.2 1.2z" />
    </svg>
)

export const PlusIcon = ({ size = 18, className }: IconProps) => (
    <svg {...base(size, className)}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v8M8 12h8" />
    </svg>
)