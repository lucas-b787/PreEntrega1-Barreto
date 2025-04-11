# DE TUTO

Este es un proyecto de e-commerce desarrollado con React, Firebase y Vite. Permite a los usuarios explorar productos, agregarlos al carrito y realizar compras. [Enlace del demo.](https://pre-entrega1-barreto.vercel.app/)

## Características

- **Navegación**: Implementada con `react-router-dom` para manejar rutas dinámicas.
- **Carrito de compras**: Los usuarios pueden agregar, eliminar y vaciar productos del carrito.
- **Firebase**: Se utiliza Firestore para almacenar y consultar productos.
- **Notificaciones**: Uso de `react-hot-toast` para mostrar mensajes de éxito o error.
- **Estilos**: Estilizado con SCSS y fuentes personalizadas de Google Fonts.

## Estructura del Proyecto

```
.env
.gitignore
eslint.config.js
index.html
package.json
README.md
vite.config.js
public/
  img/
    shopping-cart.svg
src/
  App.css
  App.jsx
  firebaseConfig.js
  index.scss
  main.jsx
  assets/
    react.svg
  components/
    Cart.jsx
    CartContext.jsx
    CartWidget.jsx
    Detail.jsx
    FormBuy.jsx
    InputCart.jsx
    Item.jsx
    ItemDetailContainer.jsx
    ItemListContainer.jsx
    NavBar.jsx
```

## Instalación

1. Clona este repositorio.
2. Instala las dependencias con:

   ```bash
   npm install
   ```

3. Configura las variables de entorno en el archivo `.env`:

   ```env
   VITE_apiKey=TU_API_KEY
   VITE_authDomain=TU_AUTH_DOMAIN
   VITE_projectId=TU_PROJECT_ID
   VITE_storageBucket=TU_STORAGE_BUCKET
   VITE_messagingSenderId=TU_MESSAGING_SENDER_ID
   VITE_appId=TU_APP_ID
   ```

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Genera una versión optimizada para producción.
- `npm run preview`: Previsualiza la versión de producción.
- `npm run lint`: Ejecuta ESLint para analizar el código.

## Dependencias Principales

- **React**: ^19.0.0
- **React Router DOM**: ^7.3.0
- **Firebase**: ^11.6.0
- **React Hot Toast**: ^2.5.2
- **Sass**: ^1.85.0

## Desarrollo

Este proyecto utiliza Vite como herramienta de construcción y desarrollo. Los estilos están escritos en SCSS y se encuentran en el archivo `src/index.scss`. La lógica del carrito de compras está centralizada en el contexto `CartContext`.

## Licencia

Este proyecto no especifica una licencia. Si deseas agregar una, puedes incluirla aquí.

```

Puedes personalizar este archivo según tus necesidades. ¡Espero que te sea útil!
```
