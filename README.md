# 🧵 Refugo de Tecidos

App para registrar o peso do refugo de tecidos, com lista por dia, gráfico diário, variação mensal, filtro por tipo de tecido, exportação para Excel e backup. Roda offline no celular Android.

## Como gerar o APK com o GitHub

1. Crie uma conta em https://github.com (se ainda não tiver).
2. Clique em **New repository**, dê um nome (ex.: `refugo-tecidos`) e crie. Pode ser privado.
3. Envie **todo o conteúdo desta pasta** para o repositório (incluindo a pasta oculta `.github`):
   - **Pelo site:** em *Add file → Upload files*, arraste os arquivos e pastas. Atenção: o upload pelo navegador às vezes ignora pastas ocultas como `.github`; se isso acontecer, use o jeito abaixo.
   - **Pelo terminal:**
     ```bash
     git init
     git add .
     git commit -m "primeira versão"
     git branch -M main
     git remote add origin https://github.com/SEU_USUARIO/refugo-tecidos.git
     git push -u origin main
     ```
4. Abra a aba **Actions** do repositório. O job **Gerar APK** começa sozinho (leva uns 5 a 10 minutos). Se não começar, clique em *Gerar APK → Run workflow*.
5. Quando ficar verde ✅, baixe o APK de um destes lugares:
   - **Releases** (lado direito da página inicial do repositório) → **APK mais recente** → `refugo-tecidos.apk`. É o jeito mais fácil pelo celular.
   - Ou na execução do job, em **Artifacts** → `refugo-tecidos-apk` (vem dentro de um .zip).

## Instalando no celular

1. Abra o `refugo-tecidos.apk` baixado.
2. Se o Android pedir, permita **instalar apps desta fonte** (Chrome ou Arquivos).
3. Toque em **Instalar**. Se o Play Protect avisar que o app não é conhecido, escolha *Instalar mesmo assim* — é normal para apps fora da Play Store.

## Atualizando o app

Altere o `www/index.html`, envie ao GitHub (commit/push) e um novo APK é gerado. Instale por cima do antigo: como todos os builds usam a mesma chave de assinatura (`signing/debug.keystore`), **os dados são mantidos**.

## Seus dados

- Ficam só no aparelho (IndexedDB). Desinstalar o app ou limpar os dados do app apaga tudo.
- Use a aba **💾 Dados → Salvar backup** de tempos em tempos e guarde o arquivo no Drive/WhatsApp. Para voltar, **Restaurar backup**.
- A planilha (CSV) abre direto no Excel/Google Planilhas.
- Os registros da versão anterior do app web continuam funcionando; eles aparecem como tipo "Sem tipo" e podem ser editados (✏️) para receber um tipo.

## O que mudou nesta versão

- **Corrigido:** à noite (depois das 21h no Brasil) a data sugerida e o mês atual saíam um dia adiantados, por usar horário UTC.
- **Corrigido:** a variação mensal mostrava 0% ou +100% em meses sem base de comparação. Agora o primeiro mês e os meses sem registro aparecem como "—". Na tabela, aumento de refugo fica em vermelho e queda em verde.
- Editar registro (✏️), além de apagar.
- Tipo de tecido em cada pesagem (com opção de criar novos) e filtro por tipo na lista e nos gráficos.
- Resumo do mês (total, média por dia, maior dia) e setas para trocar de mês/ano.
- Exportar CSV, salvar e restaurar backup.
- Visual ajustado para celular (barra de status, botão voltar do Android, gráficos com altura fixa).
- Gráficos funcionam offline (Chart.js vai dentro do app).

## Testar no computador

Depois de `npm install` e `npm run copiar-chart`, abra `www/index.html` no navegador. Sem isso, o app usa o Chart.js pela internet (CDN).

## Personalizar

- **Nome do app / identificador:** `capacitor.config.json` (`appName` e `appId`). Mudar o `appId` faz o Android tratar como outro app.
- **Ícone:** por padrão usa o ícone do Capacitor. Para trocar, a opção mais simples é colocar um `icon.png` (1024×1024) em `assets/` e rodar `npx @capacitor/assets generate --android` no workflow, antes de compilar.
- **Tipos de tecido iniciais:** lista `TIPOS_PADRAO` no começo do script do `www/index.html`.

## Sobre a assinatura

O APK é assinado com a chave de depuração incluída em `signing/`. Isso serve bem para uso próprio e instalação direta. Para publicar na Google Play seria necessário criar uma chave de lançamento própria e guardá-la nos *Secrets* do GitHub.
