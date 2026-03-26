#o que eu aprendi

#git

#o que e git?
-Git é um sistema de controle de versão distribuído que permite rastrear mudanças no código, colaborar em equipe e manter histórico de versões.

#diferença entre git e github?
-git -> e um tipo de uma ferramenta de versionamento local
-github -> e uma plnataforma online para armazenar repositorios

#três estados principais de um arquivo no Git?
-Modified: o arquivo foi alterado mais , não esta pronto para receber commit
-Staged: o arquivo foi adicionado, e esta pronto para fazer commit
-Committed: o arquivo fez o commit, esta salvo no historico

#explicação dos camandos do git
-git init: inicia um repositório Git na pasta atual.
-git clone:Copia um repositório remoto para sua máquina.
-git remote: Gerencia conexões com repositórios remotos.
-git status: Mostra o estado atual do projeto.
-git add: Adiciona arquivos à área de estágio
-git add . : Adiciona tudo de uma vez, arquivos novos e modificados
-git commit -m "...": Salva as mudanças no histórico do Git.
-git log: Mostra o histórico de commits.
-git branch: Troca de branch ou restaura arquivos.
-git checkout: Troca de branch ou restaura arquivos.
-git switch: Troca apenas de branch.

#github

-O que é um repositório remoto: é uma cópia do seu projeto que está hospedada em um servidor — normalmente em plataformas como o GitHub.

-O que é um Pull Request (PR) e por que é tão importante: é uma solicitação para mesclar mudanças de uma branch para outra (geralmente para main).

-Para que servem os Issues no GitHub: são usados para gerenciar trabalho e tarefas dentro do projeto.

-Diferença entre Clone e Fork: git clone:copia um repositório para sua máquina, mantém vínculo com o original. Fork:cria uma cópia do repositório na sua conta do GitHub. independente do original

#explicação dos comandos
-git remote add origin: ele conecta seu repositório local a um repositório remoto (ex: GitHub).
-git push: Envia seus commits locais para o repositório remoto.
-O que faz: Atualiza seu repositório local com mudanças do remoto.
-Pull Request (PR) — no GitHub: Solicitação para integrar mudanças de uma branch para outra.
-Merge — no GitHub: Ação de juntar duas branches.

#Markdown

-O que é Markdown e por que é preferido: Markdown é uma linguagem de marcação leve usada para formatar texto de forma simples e legível.
-Como visualizar (renderizar) um arquivo .md no VS Code: metodo mais rapido no visualcode Ctrl + Shift + V, modo alternativo, Clique com o botão direito no arquivo .md , Clique em: Open Preview

#gitflow
-Papel da branch main (ou master): A branch main representa o código em produção.
-Por que existe a branch develop: A branch develop é a linha principal de desenvolvimento.
-Correção de bug crítico em produção (Hotfix): Sistema em produção (main) com erro crítico. Solução no Gitflow: Hotfix branch:Fluxo correto: main → hotfix/correcao → main
↘ develop
