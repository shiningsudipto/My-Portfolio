export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myBlack: '#212428',
        myRed: '#CA0945',
        myGreen: '#1ae200',
        myOrange: '#bc511b',
        mySkyBlue: '#15B4CC',
        background1: '#000b1a',
        myPurple: '#9043E2',
        myDeepPurple: '#43008A',
      },
    },
  },
  plugins: [require("daisyui")],
}
