<template>
  <szpp-judge-default-layout>
    <h1>[ == This is contest list == ]</h1>
    <!-- sample -->
    <ul v-for="i in [1, 2, 3, 4, 5]">
      <li>
        <router-link :to="`/contests/${i}`">contest [{{ i }}]</router-link>
      </li>
    </ul>
    <!-- end sample -->
  </szpp-judge-default-layout>
</template>
