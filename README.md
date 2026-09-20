# NutriCiclos — Clínica de Nutrição

Site institucional da **NutriCiclos**, clínica de nutrição da nutricionista **Osana Melo (CRN-10 6463)**.

> Nutrição em cada ciclo da vida.

**No ar:** [nutriciclos.com.br](https://nutriciclos.com.br) · [nutriciclos.netlify.app](https://nutriciclos.netlify.app)

---

## Sobre o projeto

É um site estático: HTML, CSS e JavaScript puros, sem framework e sem servidor. Um pequeno script (`src/build.mjs`) monta as páginas a partir de um só arquivo de conteúdo e gera a pasta `dist/`, que é o que vai para a hospedagem.

### Páginas

| Página | Endereço | Conteúdo |
|---|---|---|
| Início | `/` | Abertura, proposta, roda dos ciclos da vida, citação, serviços, como funciona |
| Sobre nós | `/sobre/` | História, missão, visão, princípios e as fases da vida |
| A Nutricionista | `/nutricionista/` | Apresentação da Osana Melo e seu compromisso |
| Serviços | `/servicos/` | Os seis serviços em detalhe |
| Contato | `/contato/` | WhatsApp, e-mail e formulário que monta a mensagem |
| 404 | qualquer endereço inexistente | Página de "não encontrado" |

### Recursos

- **Animações ao rolar a página**, feitas com [GSAP](https://gsap.com) + ScrollTrigger + SplitText e rolagem suave com [Lenis](https://lenis.darkroom.engineering).
- **Adaptado para celular**, com menu próprio e animações ajustadas para telas pequenas.
- **Acessível:** respeita a opção "reduzir movimento" do sistema e continua funcionando mesmo se o JavaScript falhar.
- **SEO:** título e descrição por página, H1 único, URL canônica, Open Graph para compartilhamento no WhatsApp e nas redes, dados estruturados (Schema.org), `sitemap.xml` e `robots.txt`.
- **Sem dependências externas em produção:** fontes (Fraunces e Manrope) e bibliotecas ficam dentro do projeto.
- **Formulário de contato sem servidor:** ele monta a mensagem e abre o WhatsApp ou o e-mail já preenchidos. Nenhum dado fica guardado no site.

---

## Estrutura

```
├── src/
│   ├── build.mjs            ← conteúdo de todas as páginas + script que gera o site
│   ├── assets/
│   │   ├── css/style.css    ← todo o visual (cores, fontes, layout)
│   │   ├── js/main.js       ← animações e interações
│   │   ├── js/vendor/       ← GSAP, ScrollTrigger, SplitText, Lenis
│   │   ├── fonts/           ← Fraunces e Manrope (woff2)
│   │   └── img/             ← logos, emblema 3D, imagem de compartilhamento
│   └── public/              ← favicons, manifest, _headers e _redirects do Netlify
├── dist/                    ← site pronto (gerado; não versionado)
├── netlify.toml             ← configuração de publicação no Netlify
└── package.json
```

---

## Como editar

Os **textos** ficam em `src/build.mjs`:

- **Contato e dados gerais** estão no bloco `SITE`, no topo do arquivo: e-mail, WhatsApp, CRN e domínio.
- **Fases da vida** estão em `PHASES`.
- **Serviços** estão em `SERVICES`.
- **"Como funciona"** está em `STEPS`.
- **Cada página** está em um bloco `pages.push({ ... })`, com título, descrição para o Google e conteúdo.

As **cores** ficam em `src/assets/css/style.css`, no bloco `:root` no início do arquivo:

| Variável | Cor | Uso |
|---|---|---|
| `--copper` | `#b4633a` | Cobre da marca, destaques |
| `--brown` | `#7a3e10` | Títulos principais |
| `--cream` | `#faf5ee` | Fundo |
| `--ink` | `#2a1a10` | Texto |

### Foto da nutricionista

Salve a foto como `src/assets/img/osana.jpg`, de preferência na vertical (proporção 4:5). O build encontra o arquivo sozinho e troca o cartão com o emblema pela foto.

---

## Como rodar e gerar o site

É preciso ter o [Node.js](https://nodejs.org) 18 ou mais novo.

```bash
npm install        # instala o esbuild (usado para compactar CSS e JS)
npm run build      # gera o site em dist/
npm run preview    # abre o site localmente para conferir
```

---

## Publicação (Netlify)

**Opção 1: automática pelo GitHub (recomendada).**
No Netlify, vá em *Project configuration → Build & deploy → Link repository* e conecte este repositório. O `netlify.toml` já informa o comando de build e a pasta a publicar. A partir daí, cada alteração enviada ao GitHub atualiza o site sozinha.

**Opção 2: manual.**
Rode `npm run build` e arraste a pasta `dist/` para a área *"Drag and drop your project folder here"*, na página de deploys do projeto no Netlify.

### Domínio

O domínio `nutriciclos.com.br` aponta para o Netlify com estes registros no DNS (Registro.br):

| Tipo | Nome | Valor |
|---|---|---|
| A | @ | `75.2.60.5` |
| CNAME | www | `nutriciclos.netlify.app` |

O certificado HTTPS é emitido automaticamente pelo Netlify.

---

## Créditos

- Conteúdo: **Osana Melo**, Nutricionista, CRN-10 6463
- Tipografia: [Fraunces](https://fonts.google.com/specimen/Fraunces) e [Manrope](https://fonts.google.com/specimen/Manrope), ambas sob a SIL Open Font License
- Animações: [GSAP](https://gsap.com) (licença padrão, de uso gratuito) e [Lenis](https://github.com/darkroomengineering/lenis) (MIT)

© NutriCiclos — Clínica de Nutrição. Todos os direitos reservados.
