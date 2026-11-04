import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/notice-board/', // Имя репозитория diozzawr/notice-board
})