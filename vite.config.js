import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
// import {createSvgIconsPlugin} from 'vite-plugin-svg-icons'
// import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(),
        // createSvgIconsPlugin({
        //     // 指定需要缓存的图标文件夹
        //     iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
        //     // 指定symbolId格式
        //     symbolId: 'icon-[name]',
        // })
    ],
    //这个是添加的别名
    resolve: {
        alias: [
            {
                find: "@",
                replacement: "/src",
            }
        ]
    },
    server: {
        host: '0.0.0.0',
        port: 5555
    }
})
