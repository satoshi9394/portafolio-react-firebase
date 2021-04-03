import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

const pathSrc = '/src';
// const prodBase = '/';

const baseConfig = {
  server: {
    port: 4000
  },
  plugins: [reactRefresh()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import ".${pathSrc}/styles/global/variables";@import ".${pathSrc}/styles/global/breackpoints";`
      }
    }
  }
}

const prodConfig = { ...baseConfig };
// prodConfig.base = prodBase;

// https://vitejs.dev/config/
export default ({ command, mode }) => {
  if (command === 'serve') {
    return defineConfig(baseConfig);
  } else {
    return defineConfig(prodConfig);
  }
}
