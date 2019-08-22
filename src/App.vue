<template>
    <div id="app">
        <the-header></the-header>
        <router-view />
        <the-footer></the-footer>
    </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from './components/TheHeader'
import TheFooter from './components/TheFooter'

export default {
    name: 'app',
    components: {
        TheHeader,
        TheFooter
    }
}
</script>

<style lang="scss">
html,
body {
    margin: 0;
    padding: 0;
    height: 100%;
    box-sizing: border-box;
}

*,
*::before,
*::after {
    box-sizing: inherit;
}

body {
    font-family: 'Lato', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
    background: #fafafa;
    line-height: 1.6;
    font-size: 16px;
    color: #242527;
    text-rendering: optimizeLegibility;
}

// #root {
//     height: 100%;
// }

main {
    flex: 1 0 auto;
    padding: 16px;
}

h1,
h2,
h3,
.h1,
.h2,
.h3 {
    font-family: 'Ubuntu', sans-serif;
    font-weight: 400;
    margin: 0;
}

h1,
.h1 {
    font-size: 40px;
    line-height: 1;
    margin-bottom: 0;
}

h2,
.h2 {
    font-size: 28px;
    line-height: 1.3;
    margin-bottom: 16px;
}

h3,
.h3 {
    font-size: 20px;
    line-height: 1.4;
    margin-bottom: 8px;
}
#app {
    display: flex;
    flex-direction: column;
    height: 100%;
}
</style>
