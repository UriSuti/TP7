export interface User {
    name: string
    username: string
    verified: boolean
    avatar: string
    bio: string
    postsCount: number
    followers: number
    following: number
    likes: number
}

export interface Story {
    id: string
    username: string
    img: string
}

export interface Comment {
    user: string
    text: string
}

export interface Post {
    id: string
    image: string
    width?: number
    height?: number
    username: string
    caption: string
    likes: number
    avatar: string
    date: string
}

export type View = 'home' | 'profile'