import type { User } from '../types'

export const currentUser: User = {
    name: 'Uğur Mercan',
    username: 'ugur_mercan0',
    verified: true,
    avatar:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop&crop=faces',
    bio: 'Fotógrafo de gatos 🐱 · Amante del café ☕ · Buenos Aires, Argentina',
    postsCount: 121,
    followers: 121000,
    following: 318,
    likes: 900000,
}

export const formatCount = (n: number): string => {
    if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1)}M`
    if (n >= 1_000) return `${(n / 1_000).toFixed(n % 1_000 === 0 ? 0 : 1)}K`
    return `${n}`
}