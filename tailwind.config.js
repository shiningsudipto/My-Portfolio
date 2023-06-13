export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myBlack: '#212428',
        myRed: '#CA0945'
      },
    },
  },
  plugins: [require("daisyui")],
}
