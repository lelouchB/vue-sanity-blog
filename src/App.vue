<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  min-height: 100vh;
  padding: 1em 2em;
  width: 100%;
  margin-bottom: 8em;
}

#nav {
  text-align: center;

  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
*,
*:before,
*:after {
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: Avenir, sans-serif;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 0.5em 0;
}

h1 {
  font-family: Roboto, serif;
  font-size: 4em;
  margin: 0 0 1em 0;
}

h2 {
  margin: 1.6em 0 0 0;
  font-size: 1.8em;
}

h3 {
  font-size: 1.5em;
}

h4 {
  font-size: 1.4em;
}

h5 {
  font-size: 1.3em;
}

h6 {
  font-size: 1.2em;
}

p,
ul,
ol {
  font-size: 1.3rem;
  line-height: 1.75em;
  margin: 1.2em 0;
}

a {
  color: inherit;
  transition: color linear 0.15s;
}

a:hover {
  color: #42b983;
}

img {
  max-width: 100%;
}

hr {
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
rgba(66, 185, 131, 1),    rgba(0, 0, 0, 0)
  );
  border: 0;
  height: 2px;
  margin: 40px auto;
}

blockquote {
  border-left: 4px solid #cccccc;
  font-size: 1.4em;
  font-style: italic;
  margin: 2rem 0;
  padding-left: 2rem;
  padding-right: 2rem;
}

.content h1 {
  font-size: 3em;
  margin: 1em 0;
}

@media (max-width: 1020px) {
  h1 {
    font-size: 3em;
  }

  .content h1 {
    font-size: 2.4em;
  }
}

@media (max-width: 480px) {
  body {
    font-size: 14px;
  }

  p,
  ul,
  ol {
    font-size: 1.2rem;
    margin: 1em 0;
  }
}
</style>
