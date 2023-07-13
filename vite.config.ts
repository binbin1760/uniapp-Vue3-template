import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import AutoImport from 'unplugin-auto-import/vite';
import Conpoments from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    AutoImport({
      imports: ['vue'],
      dts: 'src/dts/auto-import.d.ts',
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
      eslintrc: {
        enabled: true,
      },
    }),
    Conpoments({
      deep: true,
      dirs: ['src/components'],
      dts: 'src/dts/components.d.ts',
    }),
  ],
});
