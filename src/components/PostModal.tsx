import { useEffect, useState } from 'react'
import type { Post } from '../types'
import { formatCount } from '../data/user'
import { fakeComments } from '../data/stories'
import { HeartIcon, CommentIcon, SendIcon } from './Icons'

interface PostModalProps {
    post: Post
    onClose: () => void
}

export default function PostModal({ post, onClose }: PostModalProps) {
    const [liked, setLiked] = useState(false)

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [onClose])

    return (
        <div className="modal-backdrop" onClick={onClose}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="modal-close" onClick={onClose} aria-label="Cerrar">
            ×
            </button>

            <div className="modal-image">
                <img src={post.image} alt={post.caption} />
            </div>

            <div className="modal-side">
            <div className="modal-header">
                <img className="post-avatar" src={post.avatar} alt={post.username} />
                <span>@{post.username}</span>
            </div>

            <div className="modal-comments">
                <p className="modal-caption">
                    <strong>@{post.username}</strong> {post.caption}
                </p>
                {fakeComments.map((c, i) => (
                <p className="modal-comment" key={i}>
                    <strong>@{c.user}</strong> {c.text}
                </p>
                ))}
            </div>

            <div className="modal-footer">
                <div className="post-actions">
                <button
                    type="button"
                    className={`act ${liked ? 'liked' : ''}`}
                    onClick={() => setLiked((p) => !p)}
                    aria-label="Me gusta"
                >
                    <HeartIcon size={24} filled={liked} />
                </button>
                <button type="button" className="act" aria-label="Comentar">
                    <CommentIcon size={24} />
                </button>
                <button type="button" className="act" aria-label="Compartir">
                    <SendIcon size={24} />
                </button>
                </div>

                <span className="modal-likes">{formatCount(post.likes + (liked ? 1 : 0))} Me gusta</span>
                <span className="modal-date">{post.date}</span>
            </div>
            </div>
        </div>
        </div>
    )
}