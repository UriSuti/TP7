import type { User, View } from '../types'
import { formatCount } from '../data/user'
import {
    HeartIcon, HomeIcon, ExploreIcon, ReelsIcon, TvIcon, BellIcon, VerifiedIcon,
} from './Icons'

interface SidebarProps {
    user: User
    activeView: View
    onNavigate: (view: View) => void
}

const navItems = [
    { key: 'home', label: 'Home', Icon: HomeIcon },
    { key: 'explore', label: 'Explore', Icon: ExploreIcon },
    { key: 'reels', label: 'Reels', Icon: ReelsIcon },
    { key: 'igtv', label: 'IGTV', Icon: TvIcon },
    { key: 'notification', label: 'Notification', Icon: BellIcon },
] as const

export default function Sidebar({ user, activeView, onNavigate }: SidebarProps) {
  return (
  <aside className="sidebar">
      <h1 className="logo">Instagram</h1>

      <button
        type="button"
        className={`profile-card ${activeView === 'profile' ? 'active' : ''}`}
        onClick={() => onNavigate('profile')}
      >
        <span className="avatar-ring">
          <img src={user.avatar} alt={user.name} />
        </span>
        <span className="profile-name">
          {user.name}
          {user.verified && <VerifiedIcon size={16} />}
        </span>
        <span className="profile-username">@{user.username}</span>

        <span className="profile-stats">
          <span className="stat-pill">
            <ExploreIcon size={18} /> {formatCount(user.followers)}
          </span>
          <span className="stat-pill">
            <HeartIcon size={18} filled /> {formatCount(user.likes)}
          </span>
        </span>
      </button>

      <nav className="nav">
        {navItems.map(({ key, label, Icon }) => {
          const isActive = key === 'home' && activeView === 'home'
          return (
            <button
              key={key}
              type="button"
              className={`nav-item ${isActive ? 'active' : ''}`}
              onClick={() => key === 'home' && onNavigate('home')}
            >
              <Icon size={24} />
              <span>{label}</span>
            </button>
          )
        })}
      </nav>
    </aside>
  )
}