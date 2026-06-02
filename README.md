# 🐱 Instagram Cats — Clon web con React + TypeScript

Clon de la interfaz de **Instagram** desarrollado con **React + TypeScript + Vite**.
La aplicación carga imágenes de gatos desde una API externa (**The Cat API**)
mediante **Axios** y las muestra en formato de publicaciones, respetando una
estética de red social moderna con tema oscuro.

---

## 🎨 Diseño de Figma utilizado como referencia

> ⚠️ **Reemplazá este link por el diseño de Figma que usaste de guía:**
> https://www.figma.com/community/file/1004033523744290376

La implementación respeta de la forma más fiel posible el diseño: tema oscuro
azul-violáceo, barra lateral con el logo de Instagram, tarjeta de perfil con
contadores (121K / 900K), menú de navegación (Home, Explore, Reels, IGTV,
Notification), sección **STORIES** y grilla **TRENDING** tipo masonry.

---

## 🔗 Repositorio

> Link al repositorio de GitHub: _(completar al subir el proyecto)_

---

## ▶️ Cómo ejecutar el proyecto

Requisitos: tener **Node.js 18+** instalado.

```bash
# 1. Instalar dependencias
npm install

# 2. Levantar el servidor de desarrollo
npm run dev
```

Abrir el navegador en la URL que muestra la consola (por defecto
`http://localhost:5173`).

Otros comandos disponibles:

```bash
npm run build     # Compila la app para producción
npm run preview   # Previsualiza el build de producción
```

---

## 📁 Organización del proyecto

El proyecto sigue una estructura ordenada que separa **datos**, **servicios**
y **componentes de UI**:

```
src/
├── App.tsx              # Componente raíz: estado global y orquestación de vistas
├── index.css           # Estilos globales (tema oscuro tipo Instagram)
├── types.ts            # Interfaces de TypeScript compartidas
│
├── data/               # Datos locales (no vienen de la API)
│   ├── user.ts         #   → usuario logueado emulado + formateador de números
│   └── stories.ts      #   → historias, comentarios simulados y pools de datos
│
├── services/
│   └── catApi.ts       # Consumo de The Cat API con Axios + armado de publicaciones
│
└── components/         # Componentes reutilizables de la interfaz
    ├── Icons.tsx
    ├── Sidebar.tsx
    ├── Topbar.tsx
    ├── Stories.tsx
    ├── Feed.tsx
    ├── Post.tsx
    ├── PostModal.tsx
    └── Profile.tsx
```

---

## 🧩 Componentes creados y su responsabilidad

| Componente | Responsabilidad |
|------------|-----------------|
| **App** | Componente raíz. Hace la petición a la API, guarda el estado global (publicaciones, vista activa, publicación seleccionada) y decide qué vista renderizar. |
| **Sidebar** | Barra lateral: logo de Instagram, tarjeta de perfil con contadores y menú de navegación. |
| **Topbar** | Barra superior del contenido: buscador, íconos de acción y botón "New Post". |
| **Stories** | Sección STORIES: fila horizontal de historias con anillo degradé. |
| **Feed** | Sección TRENDING: grilla masonry que renderiza dinámicamente todas las publicaciones. |
| **Post** | Una publicación individual del feed. Maneja su propio estado de "like" y abre la vista detallada. |
| **PostModal** | Vista individual ampliada de una publicación (imagen grande, comentarios, etc.). |
| **Profile** | Perfil del usuario emulado: cabecera con datos + grilla de sus publicaciones. |
| **Icons** | Conjunto de íconos SVG reutilizables (corazón, comentario, enviar, etc.). |

---

## ❓ ¿Por qué componentizar de esta manera?

Cada componente tiene **una única responsabilidad** (Single Responsibility
Principle). Esto aporta tres ventajas concretas en el proyecto:

1. **Reutilización**: `Post` se usa tanto en el feed como en la grilla del perfil;
   los `Icons` se usan en casi todos los componentes.
2. **Mantenibilidad**: si hay que tocar el modal, solo se edita `PostModal.tsx`,
   sin riesgo de romper el resto.
3. **Legibilidad**: `App.tsx` queda como un orquestador limpio que solo coordina
   estado y vistas, en lugar de tener toda la UI escrita a mano.

Además, **ninguna publicación se escribe manualmente en `App.tsx`**: se generan
dinámicamente con `.map()` a partir de los datos de la API.

---

## 🔌 Comunicación entre componentes (props)

La información fluye de padres a hijos mediante props, y los hijos avisan
eventos al padre mediante **callbacks**:

- `App` → `Feed`: le pasa `posts`, `loading`, `error` y la función `onOpenPost`.
- `Feed` → `Post`: le pasa cada `post` y la función `onOpen`.
- `Post` → `App`: cuando se hace click, llama a `onOpen(post)` para avisar qué
  publicación abrir (comunicación hijo → padre).
- `App` → `Sidebar`: le pasa `user`, `activeView` y `onNavigate` para cambiar
  de vista.
- `App` → `Profile` / `PostModal`: les pasa los datos y las funciones de cierre.

---

## 🪝 Hooks utilizados

| Hook | Dónde | Para qué |
|------|-------|----------|
| **useState** | `App` | Guarda la lista de publicaciones, el estado de carga/error, la vista activa (`home` / `profile`) y la publicación seleccionada. |
| **useState** | `Post` y `PostModal` | Maneja el estado del "like" de cada publicación (interacción del usuario). |
| **useEffect** | `App` | Dispara la petición a la API **al cargar la página** y guarda el resultado. |
| **useEffect** | `PostModal` | Registra el listener de la tecla **Escape** para cerrar el modal. |

---

## 🌐 Consumo de API

El archivo `services/catApi.ts` crea una instancia de **Axios** apuntando a
The Cat API. La función `fetchCatPosts()` pide las imágenes dentro de un
`useEffect`, y luego transforma cada imagen cruda en una **publicación** completa
agregándole datos simulados (nombre de usuario, caption, likes, avatar y fecha).

Se traen **15 publicaciones** (la consigna pide un mínimo de 10).

---

## 🖼️ Visualización individual de publicaciones

Se resuelve mediante un **modal** (`PostModal`):

1. Al hacer click en una publicación, `Post` llama a `onOpen(post)`.
2. `App` guarda esa publicación en el estado `selectedPost`.
3. Si `selectedPost` no es `null`, se renderiza el modal por encima de todo.

El modal muestra **más detalle que el feed**: imagen ampliada, nombre de usuario,
caption, cantidad de likes, comentarios simulados, botones de interacción
(like / comentar / compartir) y la fecha del posteo.

---

## 👤 Perfil de usuario emulado

**No hay login ni registro.** Se simula que ya existe un usuario activo: sus
datos están fijos en `data/user.ts`. Se accede al perfil desde la tarjeta de la
barra lateral, que cambia el estado `view` a `'profile'`.

### Datos mostrados en el perfil
- Foto de perfil
- Nombre y nombre de usuario (con badge de verificado)
- Biografía breve
- Cantidad de publicaciones
- Cantidad de seguidores
- Cantidad de seguidos
- Botón visual de "Editar perfil"
- Grilla con las publicaciones del usuario

---

## 🔄 Estados usados para la selección de publicaciones y la vista

| Estado | Tipo | Función |
|--------|------|---------|
| `view` | `'home' \| 'profile'` | Alterna entre el feed principal y el perfil del usuario. |
| `selectedPost` | `Post \| null` | Define qué publicación se muestra en el modal (`null` = modal cerrado). |
| `liked` | `boolean` | Interacción del usuario que modifica el estado en cada publicación. |

---

## ✨ Detalle de estilo requerido por la consigna

Todas las imágenes de las publicaciones **rotan 3° hacia la izquierda**.
Se aplica en `index.css` con:

```css
.post-image img {
  transform: rotate(-3deg) scale(1.12);
}
```

---

## 🛠️ Tecnologías

- React 18
- TypeScript
- Vite
- Axios
- The Cat API / Cataas
- CSS propio (sin frameworks)# TP7
