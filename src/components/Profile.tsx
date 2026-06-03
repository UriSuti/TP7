import type { Post, User } from '../types'
import { formatCount } from '../data/user'
import { VerifiedIcon } from './Icons'

interface ProfileProps {
    user: User
    posts: Post[]
    onOpenPost: (post: Post) => void
}

export default function Profile({ user, posts, onOpenPost }: ProfileProps) {
    return (
        <section className="profile">
        <header className="profile-header">
            <span className="avatar-ring big">
            <img src={user.avatar} alt={user.name} />
            </span>

            <div className="profile-info">
            <div className="profile-top">
                <h2>
                @{user.username}
                {user.verified && <VerifiedIcon size={18} />}
                </h2>
                <button type="button" className="edit-btn">Editar perfil</button>
            </div>

            <div className="profile-numbers">
                <span><strong>{user.postsCount}</strong> publicaciones</span>
                <span><strong>{formatCount(user.followers)}</strong> seguidores</span>
                <span><strong>{user.following}</strong> seguidos</span>
            </div>

            <p className="profile-bio">
                <strong>{user.name}</strong>
                <br />
                {user.bio}
            </p>
            </div>
        </header>

        <div className="profile-grid">
            {posts.map((post) => (
            <button
                key={post.id}
                type="button"
                className="profile-thumb"
                onClick={() => onOpenPost(post)}
            >
                <img src={post.image} alt={post.caption} loading="lazy" />
            </button>
            ))}
        </div>
        </section>
    )
}