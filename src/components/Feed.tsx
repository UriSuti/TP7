import type { Post as PostType } from '../types'
import Post from './Post'

interface FeedProps {
    posts: PostType[]
    loading: boolean
    error: string | null
    onOpenPost: (post: PostType) => void
}

export default function Feed({ posts, loading, error, onOpenPost }: FeedProps) {
    return (
        <section className="feed">
        <h2 className="section-title">TRENDING</h2>

        {loading && <p className="feed-state">Cargando gatos… 🐱</p>}
        {error && <p className="feed-state error">{error}</p>}

        {!loading && !error && (
            <div className="feed-grid">
            {posts.map((post) => (
                <Post key={post.id} post={post} onOpen={onOpenPost} />
            ))}
            </div>
        )}
        </section>
    )
}