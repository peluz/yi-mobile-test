# yi-mobile-test

Esse repositório contém o código fonte de um aplicação mobile (testada em android) desenvolvida com o uso da biblioteca react-native. A aplicação consiste em uma tela com notas e informações sobre restaurantes. 

## Conteúdo
0. [Desenvolvimento](#Desenvolvimento)
0. [Uso](#Uso)

### Desenvolvimento

A tela consiste em 6 components, além do componente principal App:

0. CategoriesList consiste na lista horizontal de categorias. Para simular uma requisição ao arquivo json com informações sobre as categorias, setamos um intervalo de 1500 ms antes de mudar o estado do componente com essas informações.
0. Category é responsável por renderizar cada categoria individualmente. Para escurecer as imagens e focar no título da categoria, conforme a imagém tela padrão, foi usada uma view preta e transparente como overlay da image.
0. Header é o cabeçalho do app. Para implementar o gradiente de cores, usou-se 'react-native-linear-gradient'. Os ícones de configuração e menu pertencem a 'react-native-vector-icons/MaterialCommunityIcons'.
0. RestaurantList é uma lista vertical de restaurantes. Usa a mesma solução de CategoriesList para simular uma requisição.
0. Restaurant é responsável por renderizar informaçõs sobre um restaurante em particular, e usa de alguma lógica condicional para renderizar ratings com diferentes cores de acordo com seu valor e imprimir distâncias em km e m, por exemplo.
0. Spinner é um componente simples responsável por dar um feedback ao usuário de que a app está carregando. É usado no intervalo de 1500 ms.

### Uso
0. Requisitos de softare:
	1. Um simulador android, como o fornecido por Android Studio
	2. [React-native](https://facebook.github.io/react-native/)
	3. [yarn](https://yarnpkg.com/en/)
0. Etapas:
	1. Clone o repositório.
	2. Abra o simulador android
	3. Vá para a pasta clonada e rode no terminal:
	```Shell
	   yarn install
	   rm ./node_modules/react-native/local-cli/core/__fixtures__/files/package.json
	    ``` 
	4. Quando terminar a instalação das dependências, rode:
	```Shell
	   yarn start
	    ```	
	5. Em outro terminal, rode:
	4. Quando terminar a instalação das dependências, rode:
	```Shell
	   react-native run-android
	    ```	
	5. Após os passos acima, o app deverá carregar no simulador.
