/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      safelist: '[animate-fade-in_1s_ease-in-out]',
      // backgroundImage: {
      //   'img1': "url('images/img1.jpg')",
      //   'img2': "url('images/img2.jpg')",
      //   'img3': "url('images/img3.jpg')",
      //   'img4': "url('images/img4.jpg')",
      //   'img5': "url('images/img5.jpg')",
      // },
      colors: {
        'custom-color': "#ff0000",
      },
    },
  },
  plugins: [],
};

