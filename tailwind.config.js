module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.md"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      maxWidth: {
        article: "800px",
      },
    },
  },
  plugins: [],
};
