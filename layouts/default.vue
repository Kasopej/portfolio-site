<template>
  <main class="layout default">
    <header>
      <nav class="container">
        <div class="brand">
          <span class="brand-name"> Kasope </span>
        </div>
        <ul class="nav-menu">
          <li class="nav-item"><a href="#" class="nav-link">home</a></li>
          <li class="nav-item"><a href="#" class="nav-link">works</a></li>
          <li class="nav-item"><a href="#" class="nav-link">about-me</a></li>
          <li class="nav-item"><a href="#" class="nav-link">contacts</a></li>
        </ul>
      </nav>
    </header>
    <slot />
  </main>
</template>

<script setup lang="ts">
  function changeTheme() {
    if (document.documentElement.getAttribute("data-theme") !== "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else document.documentElement.removeAttribute("data-theme");
  }
</script>

<style scoped lang="scss">
  main {
    > * {
      width: 100%;
    }
  }
  nav {
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px 0 8px 0;
  }
  ul.nav-menu {
    list-style: none;
    li {
      display: inline;
      &:not(:first-child) {
        margin-left: 22px;
      }
    }
  }
</style>
