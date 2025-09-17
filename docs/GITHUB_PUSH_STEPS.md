# Cómo subir el proyecto a GitHub (paso a paso)

1. Crea un nuevo repositorio en https://github.com/ (no inicialices con README ni .gitignore).
2. En tu máquina local (donde tienes este proyecto), abre terminal y sitúate en la carpeta del proyecto.
3. Comprueba el estado del repo local: `git status`
4. Añade el remote (reemplaza USERNAME y REPO con tus datos):
   ```bash
   git remote add origin https://github.com/USERNAME/REPO.git
   ```
5. Empuja la rama `main` con el historial incluido:
   ```bash
   git branch -M main
   git push -u origin main
   ```
6. Si prefieres crear el repo desde la terminal usando GitHub CLI (`gh`):
   ```bash
   gh repo create USERNAME/REPO --public --source=. --remote=origin --push
   ```
7. Para habilitar GitHub Pages (si quieres publicar la web como página estática):
   - Ve a la configuración del repo -> Pages -> Selecciona la rama `main` y la carpeta `/` o `/docs`.
   - Guarda y en unos minutos tu sitio estará disponible en `https://USERNAME.github.io/REPO/`.

---
Si quieres, te doy los comandos listos con `USERNAME` reemplazado por tu usuario. También puedo ayudarte a crear el README final para la entrega o a configurar Actions para compilar SCSS automáticamente.
