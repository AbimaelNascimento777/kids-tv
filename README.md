# Kids TV Segura

App de vídeos infantis curados pelos pais. É um site estático (HTML + JS) que pode ser
instalado na tela inicial do celular.

## Arquivos

| Arquivo | Para que serve |
|---|---|
| `index.html` | O app inteiro (telas, regras e lógica) |
| `manifest.webmanifest` | Nome, ícone e cores quando o app é instalado no celular |
| `sw.js` | Guarda os arquivos no aparelho para abrir rápido e sem internet |
| `icons/` | Ícones do app (SVG e PNG) |

## Como publicar no GitHub Pages (pelo site, sem instalar nada)

1. Entre em https://github.com e crie uma conta (se ainda não tiver).
2. Clique em **New repository**:
   - Nome: `kids-tv` (ou outro de sua preferência)
   - Visibilidade: **Public** (o Pages gratuito exige repositório público)
   - Clique em **Create repository**.
3. Na página do repositório, clique em **uploading an existing file**
   (ou **Add file → Upload files**).
4. Arraste para a página **o conteúdo** desta pasta: `index.html`, `manifest.webmanifest`,
   `sw.js`, `README.md` e a pasta `icons` inteira. Clique em **Commit changes**.
5. Vá em **Settings → Pages**. Em *Branch*, escolha `main` e a pasta `/ (root)` → **Save**.
6. Aguarde 1–2 minutos. O endereço aparece no topo da mesma página, no formato
   `https://SEU-USUARIO.github.io/kids-tv/`.

## Como instalar no celular

- **Android (Chrome):** abra o endereço → menu ⋮ → **Adicionar à tela inicial / Instalar app**.
- **iPhone (Safari):** abra o endereço → botão Compartilhar → **Adicionar à Tela de Início**.

No primeiro acesso à aba **Pais**, o app pede para você **criar o PIN** de 4 dígitos.
Faça isso antes de entregar o celular para a criança.

## Como atualizar depois

1. Altere os arquivos aqui na pasta.
2. Em `sw.js`, aumente a versão: `const CACHE = 'kidstv-v1';` → `'kidstv-v2'`.
   Sem isso o celular pode continuar mostrando a versão antiga.
3. No GitHub, **Add file → Upload files** com os arquivos alterados → **Commit changes**.
4. No celular, feche e abra o app duas vezes para pegar a versão nova.

## Como adicionar vídeos do YouTube

1. No YouTube, abra o vídeo → **Compartilhar** → **Copiar link**.
2. No app, aba **Pais** → digite o PIN → card **Aprovar Vídeo do YouTube**.
3. Cole o link, escolha o pilar (só vale se o canal ainda não existir no app) → **Adicionar Vídeo**.
   O título e o nome do canal vêm sozinhos.
4. Para tirar os vídeos que vieram de exemplo: **Segurança e Dados → Remover vídeos de exemplo**.

Cada canal na lista dos pais tem a opção de pausar, remover o canal inteiro ou remover vídeos um a um.

### Como o player protege a criança

- O vídeo toca pelo player oficial do YouTube em modo sem cookies (`youtube-nocookie.com`),
  sem os controles do YouTube.
- Uma camada do app cobre o vídeo inteiro: a criança só toca nos botões do app e não consegue
  abrir o canal, o logo, links ou as sugestões do YouTube.
- Quando o vídeo acaba, aparece a tela "Muito bem!" por cima das sugestões do YouTube.
- Se o app for para segundo plano, o vídeo pausa.

### Limitações

- **Anúncios:** o YouTube pode mostrar anúncios em alguns vídeos, mesmo dentro do app.
  Isso depende do dono do vídeo e não dá para bloquear. Vídeos marcados como "para crianças" têm regras de anúncio mais restritas.
- **Alguns vídeos não abrem fora do YouTube** (o dono desativou a incorporação). O app avisa na hora de adicionar.
- **Precisa de internet** para assistir. Sem internet, o app abre, mas os vídeos não tocam.
- **Tela cheia:** funciona no Android. No iPhone, o Safari não permite tela cheia neste tipo de player; o botão some.

## Bom saber

- Canais, favoritos, PIN e configurações ficam salvos **só no aparelho** onde foram feitos.
  Limpar os dados do navegador apaga tudo.
- O site é público: quem tiver o link consegue abrir. Não coloque nome, fotos ou dados da criança.
- O PIN protege contra a criança, não contra alguém que saiba mexer em código.
