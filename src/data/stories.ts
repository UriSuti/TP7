import type { Story, Comment } from '../types'

export const stories: Story[] = Array.from({ length: 8 }, (_, i) => ({
    id: `s${i + 1}`,
    username: 'user_name',
    img: `https://cataas.com/cat?width=120&height=120&n=${i + 1}`,
}))

export const fakeComments: Comment[] = [
    { user: 'martagatuna', text: '¡Qué hermoso! 😻' },
    { user: 'el_michi_feliz', text: 'Necesito uno igual 🐱' },
    { user: 'ph.lucas', text: 'Tremenda foto, los colores 🔥' },
    { user: 'cami.dev', text: 'Adorable 💕' },
    { user: 'juanpi.bsas', text: 'Me re gusta este perfil che' },
]

export const usernamesPool: string[] = [
    'gato_aventurero', 'michi.lover', 'felino_feliz', 'patitas_suaves',
    'ronroneo_diario', 'gatos_de_barrio', 'minino_premium', 'cola_esponjosa',
    'bigotes_finos', 'siesta_gatuna', 'cazador_de_sol', 'pelusa_total',
]

export const captionsPool: string[] = [
    'Domingo de siesta al sol ☀️🐱',
    'Cuando te miran así no podés decir que no 😻',
    'Modo cazador activado 🐾',
    'Nuevo integrante de la familia 💕',
    'Spam de mi michi porque sí',
    'Acá descansando como corresponde',
    'La curiosidad gatuna no tiene límites',
    'Buen día desde la ventana favorita ☕',
    'Pequeño rey de la casa 👑',
    'Esos ojos lo dicen todo ✨',
    'Aterrizando en el sillón otra vez',
    'Compañero de mates 🧉',
]