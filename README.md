# Painel de uso · Professor Tutor

Dashboard público de agregados dos jogos e guia, com exportação CSV.

## Situação

A coleta dos jogos aguarda acesso de colaboração ao repositório neilasalem/horizontes. O guia também depende da instalação do tracker. Dados começam após a instalação; não há recuperação de histórico.

O FlipHTML5 é exibido como fonte separada, com preenchimento manual das estatísticas para o relatório aberto e exportação, sem armazenamento compartilhado.

## Instalação futura

Para o guia, adicionar o conteúdo de tracker.js ao script existente. Para os jogos, seguir a instalação abaixo com o patch. O tracker usa identificador aleatório por abertura, sem nomes, respostas ou conteúdo das rubricas. Conta tempo com foco e visibilidade. Impressões representam cliques no botão printPage, inclusive cancelamentos.

GitHub Pages: publicar main, pasta raiz.

## Tempo e acertos por atividade

O painel contém detalhes por jogo e número de desafio: iniciados, respondidos, tentativas, respostas corretas, erros, percentual de acertos, percentual de acertos na primeira tentativa, tempo médio até acertar e tempo ativo total. Registros são anônimos e agregados. O guia e o FlipHTML5 não têm respostas automáticas e não recebem métricas de acerto.

O arquivo integracao-jogos.patch é uma alteração preparada a partir dos arquivos públicos em 05/10/2026. Antes de aplicar, verificar se o repositório mudou. Copiar tracker.js para tutor-tracker.js na raiz de horizontes e aplicar os quatro ajustes do patch, preservando o restante do jogo. Não inferir acertos por pontos ou som. O patch chama TutorActivity.begin no início de cada desafio e TutorActivity.answer após a guarda que impede responder novamente um desafio resolvido. O tempo deixa de contar após a resposta correta.

Percentual de acertos = corretas / tentativas. Primeira tentativa = primeiras respostas corretas / desafios com pelo menos uma resposta; inclui desafios abandonados após erro. Tempo médio até acertar exclui desafios não resolvidos. Reenvios não duplicam resultados e reinícios do jogo criam novas ocorrências.
