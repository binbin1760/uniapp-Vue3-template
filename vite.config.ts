import { defineConfig, loadEnv } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import AutoImport from 'unplugin-auto-import/vite';
import Conpoments from 'unplugin-vue-components/vite';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
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
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      proxy: {
        '/apis': {
          target: env.VITE_BASE_URL,
          changeOrigin: true,
        },
      },
    },
  };
});
