import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import DefineOptions from "unplugin-vue-define-options/vite";
export default defineConfig({
  build: {
    outDir: "lz-ui",   //打包文件目录  
    //minify: false,//压缩
    rollupOptions: {
      external: ["vue",/\.less/],  //忽略打包vue文件
      input: ["index.ts"],
      output: [
        {
          format: "es",  //打包格式          
          entryFileNames: "[name].mjs",//打包后文件名          
          preserveModules: true,//让打包目录和我们目录对应
          exports: "named",
          dir: "../dist/es",//配置打包根目录
        },
        {
          format: "cjs", //打包格式         
          entryFileNames: "[name].js", //打包后文件名         
          preserveModules: true, //让打包目录和我们目录对应
          exports: "named",
          dir: "../dist/lib",//配置打包根目录
        },
      ],
    },
    lib: {
      entry: "./index.ts",
    },
  },
  plugins: [vue(),
  dts({
    entryRoot: "./src",
    outputDir: ["../dist/es/src", "../dist/lib/src"],
    tsConfigFilePath: "../../tsconfig.json",
  }),
  DefineOptions()
  ],
});
