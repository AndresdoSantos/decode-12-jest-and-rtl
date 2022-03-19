# #Decode 12 - RTL e Jest

⚠️ Anotações importantes

**getBy, getAll, query e find**

- `getBy` - retorna um único elemento
- `getAll` - retorna todos os elementos que o satisfaçam
- `query` - esses não falham caso o elemento não seja encontrado, ou seja, se eu quero testar se um elemento está em tela ou não eu posso usá-lo `query` pois caso eu não encontre o elemento eu posso continuar rodando os demais testes
- `find` - é quase igual ao `get` porém ele espera o elemento aparecer em tela.

**fireEvent**

- `fireEvent` - permite disparar ações dentro da interface da aplicação.

**rerender**

- `rerender` - permite renderizar novamente um componente após alterações nas props.

**waitFor**

- `waitFor` - permite esperar que um elemento apareça na tela.

**Testes em classes**

- `expect(getByText('Hello World')).toHaveAttribute('class', 'text');`
