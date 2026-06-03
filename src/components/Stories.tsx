import type { Story } from '../types'

interface StoriesProps {
    stories: Story[]
}

export default function Stories({ stories }: StoriesProps) {
    return (
        <section className="stories">
        <h2 className="section-title">STORIES</h2>
        <div className="stories-row">
            {stories.map((story) => (
            <div className="story" key={story.id}>
                <span className="story-ring">
                <img src={story.img} alt={story.username} />
                </span>
                <span className="story-user">@{story.username}</span>
            </div>
            ))}
        </div>
        </section>
    )
}