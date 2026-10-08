# Painel de uso · Professor Tutor

Dashboard público de agregados dos jogos e guia, com exportação CSV.

## Situação

Coleta instalada em 08/10/2026 nos quatro jogos de neilasalem/horizontes e no guia tutor-fracoes-rubrica. Dados começam após a instalação; não há recuperação de histórico. O contador GoatCounter de Neila foi preservado.

O FlipHTML5 é exibido como fonte separada, com preenchimento manual das estatísticas para o relatório aberto e exportação, sem armazenamento compartilhado.

## Integração instalada

No guia, o conteúdo de tracker.js foi acrescentado ao script.js existente. Nos jogos, tutor-tracker.js é carregado antes dos scripts do jogo e os eventos são ligados ao início e à resposta de cada desafio. O tracker usa identificador aleatório por abertura, sem nomes, respostas ou conteúdo das rubricas. Conta tempo com foco e visibilidade. Impressões representam cliques no botão printPage, inclusive cancelamentos.

GitHub Pages: publicar main, pasta raiz.

## Tempo e acertos por atividade

O painel contém detalhes por jogo e número de desafio: iniciados, respondidos, tentativas, respostas corretas, erros, percentual de acertos, percentual de acertos na primeira tentativa, tempo médio até acertar e tempo ativo total. Registros são anônimos e agregados. O guia e o FlipHTML5 não têm respostas automáticas e não recebem métricas de acerto.

O arquivo integracao-jogos.patch é uma preparação histórica de 05/10/2026 e não deve ser reaplicado: a integração já está instalada sobre os arquivos atualizados de Neila. TutorActivity.begin marca cada desafio; TutorActivity.answer registra a resposta após a guarda contra repetição de um desafio resolvido. O tempo deixa de contar após a resposta correta.

Percentual de acertos = corretas / tentativas. Primeira tentativa = primeiras respostas corretas / desafios com pelo menos uma resposta; inclui desafios abandonados após erro. Tempo médio até acertar exclui desafios não resolvidos. Reenvios não duplicam resultados e reinícios do jogo criam novas ocorrências.

