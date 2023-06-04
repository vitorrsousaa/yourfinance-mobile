# 💭 Desenvolvendo no yourFinance

Ao trabalhar neste projeto, siga as seguintes etapas para criar e nomear suas branches:

Caso você tenha alguma dúvida para realizar o clone desse repositório, acesse este **[Link](https://help.github.com/pt/github/creating-cloning-and-archiving-repositories/cloning-a-repository)**

1. Atualize sua branch local develop com as últimas alterações da branch remota:

```bash
git checkout develop
git pull origin develop
```

2. Crie uma nova branch para o recurso ou correção de bug que você vai trabalhar. Utilize um nome descritivo que indique claramente o objetivo da branch:

A branch deverá ser criada dependendo do que você irá trabalhar, podendo ser uma feature ou bugfix.

```bash
git checkout -b feature/nome-da-feature
# ou
git checkout -b bugfix/nome-do-bug
```

3. Implemente suas alterações na branch recém-criada.

4. Faça commits das suas alterações localmente.

Os commits também vão seguir o mesmo padrão da criação das branchs. Caso você tenha alguma correção o prefixo do commit irá inicializar com `fix`. Caso tenha sido implementado alguma nova feature, o prefixo do commit será `feature`.

```bash
git add .
git commit -m "Mensagem descritiva das alterações"
```

5. Sincronize sua branch local com a branch remota:

```bash
git pull origin develop
```

Resolva quaisquer conflitos que possam surgir.

E antes de solicitar a abertura do Pull Request, faça a implementação das suas mudanças no CHANGELOG.md

6. Envie sua branch para o repositório remoto:

```bash
git push origin feature/nome-da-feature
```

7. Abra um Pull Request (PR) no GitHub para revisão das suas alterações.

Ao realizar a abertura de um Pull request, você deverá preencher o template para abertura do Pull Request. E aguardar a finalização do workflow existente.

Caso tenha algum erro no workflow, o erro deve ser corrigido antes da abertura do Pull request.
