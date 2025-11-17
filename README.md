# Ventas Mc Ban - Panel de Control de Comisiones

Esta es una aplicación web completa y a medida diseñada para la gestión de ventas, comisiones y equipos de una tienda minorista. La aplicación ofrece una interfaz moderna y reactiva con roles de usuario específicos, un panel de control dinámico, gestión de metas y análisis de rendimiento impulsados por IA a través de la API de Gemini.

## ✨ Características Principales

- **Roles de Usuario:** Tres perfiles distintos (Encargado, Vendedor, Cajero) con vistas y permisos personalizados.
- **Dashboard Dinámico:** Visualización de KPIs clave en tiempo real, adaptados a cada rol.
- **Gestión de Ventas:** Los usuarios pueden registrar su progreso diario de ventas de forma individual.
- **Gestión de Metas:** El encargado puede definir metas mensuales para el equipo, que se distribuyen automáticamente entre los miembros según sus horas asignadas.
- **Cálculo de Comisiones:** Un sistema detallado y transparente que calcula las comisiones basadas en el rendimiento individual y del equipo.
- **Asistente con IA (Gemini):**
    - Generación de planes de coaching personalizados para alcanzar objetivos específicos.
    - Creación de informes de rendimiento mensuales detallados.
- **PWA (Progressive Web App):** La aplicación es instalable, funciona sin conexión y ofrece una experiencia nativa.
- **Diseño Moderno y Responsivo:** Interfaz limpia, con modo claro/oscuro y completamente funcional en dispositivos móviles y de escritorio.

## 🚀 Tecnologías Utilizadas

- **Frontend:** React, JavaScript (JSX)
- **Estilos:** Tailwind CSS (a través de CDN)
- **Enrutamiento:** React Router (`HashRouter`)
- **Inteligencia Artificial:** Google Gemini API
- **Transpilación en Navegador:** Babel Standalone

## 🌐 Despliegue en GitHub Pages

¡Buenas noticias! Esta aplicación ha sido configurada para ser desplegada directamente en hosts estáticos como **GitHub Pages** sin necesidad de un paso de compilación.

Sigue estos pasos para desplegar tu propia versión:

1.  **Sube el código a tu repositorio de GitHub.**
    Asegúrate de que todos los archivos de este proyecto estén en tu repositorio.

2.  **Activa GitHub Pages en tu repositorio:**
    - Ve a la pestaña **"Settings"** de tu repositorio.
    - En el menú de la izquierda, selecciona **"Pages"**.
    - En la sección "Build and deployment", bajo "Source", selecciona **"Deploy from a branch"**.
    - Elige la rama que contiene tu código (normalmente `main` o `master`).
    - Selecciona la carpeta `/ (root)` y haz clic en **"Save"**.

3.  **¡Listo!**
    GitHub tomará unos minutos para construir y desplegar tu sitio. La URL será algo como: `https://<tu-usuario>.github.io/<tu-repositorio>/`.

### ¿Por qué `HashRouter`?
Esta aplicación utiliza `HashRouter` de React Router. Esto añade un `#` a la URL (ej. `.../#/dashboard`) y permite que el enrutamiento de la página se maneje completamente en el navegador. Esto es ideal para hosts de sitios estáticos como GitHub Pages, ya que no requiere ninguna configuración especial en el servidor para que las rutas internas de la aplicación funcionen correctamente.

