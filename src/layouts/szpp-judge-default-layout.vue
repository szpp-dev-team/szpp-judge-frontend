<template>
  <el-config-provider>
    <header>
      <slot name="header"> [ == header component here == ] </slot>
    </header>
    <main>
      <slot>This is a fallback content</slot>
    </main>
    <footer>
      <slot name="footer"> [ == footer component here == ] </slot>
    </footer>
  </el-config-provider>
</template>
