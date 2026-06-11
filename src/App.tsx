import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Stories from './components/Stories'
import Feed from './components/Feed'
import Profile from './components/Profile'
import PostModal from './components/PostModal'
import { fetchCatPosts } from './services/catApi'
import { currentUser } from './data/user'
import { stories } from './data/stories'
import type { Post, View } from './types'

export default function App() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [view, setView] = useState<View>('home')
  const [selectedPost, setSelectedPost] = useState<Post | null>(null)

  // La flag `active` evita actualizar el estado si el componente
  // se desmontó antes de que la promesa resuelva (evita memory leaks).
  useEffect(() => {
    let active = true
    fetchCatPosts(15)
      .then((data) => active && setPosts(data))
      .catch(() => active && setError('No se pudieron cargar las publicaciones.'))
      .finally(() => active && setLoading(false))
    return () => {
      active = false
    }
  }, [])

  return (
    <div className="app">
      <Sidebar user={currentUser} activeView={view} onNavigate={setView} />

      <main className="main">
        <Topbar />

        <div className="content">
          {view === 'home' ? (
            <>
              <Stories stories={stories} />
              <Feed
                posts={posts}
                loading={loading}
                error={error}
                onOpenPost={setSelectedPost}
              />
            </>
          ) : (
            <Profile user={currentUser} posts={posts} onOpenPost={setSelectedPost} />
          )}
        </div>
      </main>

      {selectedPost && (
        <PostModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </div>
  )
}