import { defineConfig } from 'windicss/helpers'
// https://cn.windicss.org/utilities/general/typography.html api 文档地址

export default defineConfig({
    darkMode: 'class', // or 'media'
    plugins: [
        // require('windicss/plugin/forms'),
        require('windicss/plugin/line-clamp'),
        // ...
    ],
})