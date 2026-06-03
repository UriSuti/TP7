import { SearchIcon, SettingsIcon, CameraIcon, SendIcon, PlusIcon } from './Icons'

export default function Topbar() {
    return (
        <header className="topbar">
        <div className="search-box">
            <SearchIcon size={18} />
            <input type="text" placeholder="Username, hashtag and story search" />
        </div>

        <div className="topbar-actions">
            <button type="button" className="icon-btn" aria-label="Configuración">
            <SettingsIcon size={22} />
            </button>
            <button type="button" className="icon-btn" aria-label="Cámara">
            <CameraIcon size={22} />
            </button>
            <button type="button" className="icon-btn" aria-label="Mensajes">
            <SendIcon size={22} />
            </button>
            <button type="button" className="new-post-btn">
            <PlusIcon size={18} />
            New Post
            </button>
        </div>
        </header>
    )
}