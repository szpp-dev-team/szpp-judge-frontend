// @ts-ignore // path だけのために @types/node を入れることで node のバージョンに気をつけないといけなくなるのが億劫なので。
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // @ts-ignore
      '~/': `${path.resolve(__dirname, 'src')}/` // 末尾の/必須
    }
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      dts: 'src/auto-imports.d.ts' // auto-generated
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          enabledCollections: ['ep'] // element-plus
        })
      ],
      dts: 'src/components.d.ts', // auto-generated
      dirs: ['src/components', 'src/layouts']
    }),
    Icons({
      autoInstall: true
    })
  ]
})
