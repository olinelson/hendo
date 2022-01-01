module.exports = {
  plugins: {
    tailwindcss: {
      mode: "jit",
      purge: [
        "./public/**/*.html",
        "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}",
      ],
      darkMode: "media",
      // more options here
    },
  },
}
