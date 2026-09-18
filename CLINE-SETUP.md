# Cline setup for this project

The project is prepared with a root `.clinerules` file so Cline receives repository-safety and editing instructions automatically when this folder is opened.

## One-time VS Code setup
1. Open this project folder in VS Code.
2. Open the Cline extension panel.
3. In Cline settings, sign in or select your preferred supported model/API provider.
4. Do not paste API keys into this repository. Store them only through Cline's provider/settings UI.
5. Start with: `Read .clinerules, inspect this project, and tell me the framework, folder structure, and relevant files. Do not edit anything yet.`

## Safe working prompt
`Follow .clinerules. Analyze the relevant files first, make only the requested change, preserve the existing design and routes, run lint/build, and summarize every modified file. Do not modify Git configuration, remotes, branches, history, or deployment connections.`

Provider authentication is local to your VS Code/Cline installation and cannot be preconfigured safely inside the website ZIP without exposing credentials.
