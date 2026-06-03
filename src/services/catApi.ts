import axios from 'axios'
import { usernamesPool, captionsPool } from '../data/stories'
import type { Post } from '../types'

interface CatApiImage {
    id: string
    url: string
    width: number
    height: number
}

const catApi = axios.create({
    baseURL: 'https://api.thecatapi.com/v1',
})

const hashFrom = (str: string): number => {
    let h = 0
    for (let i = 0; i < str.length; i++) {
        h = (h << 5) - h + str.charCodeAt(i)
        h |= 0
    }
    return Math.abs(h)
}

const pick = <T,>(arr: T[], seed: number): T => arr[seed % arr.length]

const toPost = (raw: CatApiImage, index: number): Post => {
    const seed = hashFrom(raw.id)
    const daysAgo = (seed % 30) + 1
    const date = new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000)

    return {
        id: raw.id,
        image: raw.url,
        width: raw.width,
        height: raw.height,
        username: pick(usernamesPool, seed),
        caption: pick(captionsPool, seed + index),
        likes: 500 + (seed % 9500),
        avatar: `https://cataas.com/cat?width=80&height=80&n=av${index}`,
        date: date.toLocaleDateString('es-AR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        }),
    }
}

export const fetchCatPosts = async (limit = 15): Promise<Post[]> => {
    const { data } = await catApi.get<CatApiImage[]>('/images/search', {
        params: { limit, size: 'med', mime_types: 'jpg,png' },
    })
    return data.map((raw, i) => toPost(raw, i))
}

export default catApi