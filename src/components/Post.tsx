import { useState } from 'react'
import type { Post as PostType } from '../types'
import { formatCount } from '../data/user'
import { HeartIcon, CommentIcon, SendIcon } from './Icons'

interface PostProps {
    post: PostType
    onOpen: (post: PostType) => void
}

export default function Post({ post, onOpen }: PostProps) {
    const [liked, setLiked] = useState(false)

    const toggleLike = (e: React.MouseEvent) => {
        e.stopPropagation()
        setLiked((prev) => !prev)
    }

    return (
        <article className="post" onClick={() => onOpen(post)}>
        <div className="post-image">
            <img src={post.image} alt={post.caption} loading="lazy" />
        </div>

        <div className="post-footer">
            <div className="post-user">
            <img className="post-avatar" src={post.avatar} alt={post.username} />
            <span>@{post.username}</span>
            </div>

            <div className="post-actions" onClick={(e) => e.stopPropagation()}>
            <button
                type="button"
                className={`act ${liked ? 'liked' : ''}`}
                onClick={toggleLike}
                aria-label="Me gusta"
            >
                <HeartIcon size={20} filled={liked} />
            </button>
            <button type="button" className="act" onClick={() => onOpen(post)} aria-label="Comentar">
                <CommentIcon size={20} />
            </button>
            <button type="button" className="act" aria-label="Compartir">
                <SendIcon size={20} />
            </button>
            </div>
        </div>

        <span className="post-likes">{formatCount(post.likes + (liked ? 1 : 0))} Me gusta</span>
        </article>
    )
}