/** @type {import('tailwindcss').Config} */
export default {
  content: [
    `${__dirname}/components/**/*.{vue,js,ts}`,
    `${__dirname}/layouts/**/*.vue`,
    `${__dirname}/pages/**/*.vue`,
    `${__dirname}/composables/**/*.{js,ts}`,
    `${__dirname}/plugins/**/*.{js,ts}`,
    `${__dirname}/utils/**/*.{js,ts}`,
    `${__dirname}/App.{js,ts,vue}`,
    `${__dirname}/app.{js,ts,vue}`,
    `${__dirname}/Error.{js,ts,vue}`,
    `${__dirname}/error.{js,ts,vue}`,
    `${__dirname}/app.config.{js,ts}`,
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: ["class", '[data-thene="dark"'],
};
