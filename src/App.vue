<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app-container">
    <nav class="app-nav">
      <RouterLink :to="'/surveyForm'" class="nav-link" active-class="active"
        >Survey Form</RouterLink
      >
      <RouterLink :to="'/surveyList'" class="nav-link" active-class="active"
        >Survey List</RouterLink
      >
    </nav>

    <main class="app-content">
      <RouterView />
    </main>
  </div>

  <footer class="app-footer">
    <p>&copy; 2024 Student Survey. All Rights Reserved.</p>
  </footer>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  background-color: #f5f5f5;
}
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.app-header {
  color: black;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.app-header h1 {
  font-size: 2rem;
  font-weight: 600;
}
.app-nav {
  background-color: #005239;
  padding: 1rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
}
.app-nav a {
  color: white;
  text-decoration: none;
  font-weight: bolder;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}
.app-nav a.active {
  background-color: #fec734;
  color: black;
}
.app-nav {
  flex-wrap: wrap;
  box-sizing: border-box;
  display: flex;
  justify-content: right;
  align-items: right;
}
.app-content {
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}
.app-footer {
  background-color: #005239;
  color: white;
  text-align: center;
  font-weight: bolder;
  padding: 1rem;
  margin-top: auto;
}
@media (max-width: 768px) {
  .app-header h1 {
    font-size: 1.5rem;
  }
  .app-nav {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  .app-nav a {
    width: 100%;
    text-align: center;
  }
  .app-content {
    padding: 1rem;
  }
}
</style>
