import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import DefineOptions from 'unplugin-vue-define-options/vite'
export default defineConfig({
  build: {
    outDir: 'lz-ui', //打包文件目录
    //minify: false,//压缩
    rollupOptions: {
      external: ['vue', /.\less/], //忽略打包vue文件
      input: ['index.ts'],
      output: [
        {
          format: 'es', //打包格式
          entryFileNames: '[name].mjs', //打包后文件名
          preserveModules: true, //让打包目录和我们目录对应
          exports: 'named',
          dir: '../asen-ui/es', //配置打包根目录
        },
        {
          format: 'cjs', //打包格式
          entryFileNames: '[name].js', //打包后文件名
          preserveModules: true, //让打包目录和我们目录对应
          exports: 'named',
          dir: '../asen-ui/lib', //配置打包根目录
        },
      ],
    },
    lib: {
      entry: './index.ts',
    },
  },
  plugins: [
    vue(),
    DefineOptions(),
    dts({
      entryRoot: "./src",
      outputDir: ["../asen-ui/es/src", "../asen-ui/lib/src"],
      //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
      tsConfigFilePath: "../../tsconfig.json",
    }),
    {
      name: "style",
      generateBundle(config, bundle) {
        //这里可以获取打包后的文件目录以及代码code
        const keys = Object.keys(bundle);

        for (const key of keys) {
          const bundler: any = bundle[key as any];
          //rollup内置方法,将所有输出文件code中的.less换成.css,因为我们当时没有打包less文件

          this.emitFile({
            type: "asset",
            fileName: key, //文件名名不变
            source: bundler.code.replace(/\.less/g, ".css"),
          });
        }
      },
    },
  ]
})
