import { createGlobalStyle } from 'styled-components'

const cores = {
  cinza: '#333',
  preto: '#111',
  branca: '#EEE',
  verde: '#10AC84'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Reboto, sans-serif;
  }

  body {
    background-color: ${cores.preto};
    color: ${cores.branca};
  }
`
