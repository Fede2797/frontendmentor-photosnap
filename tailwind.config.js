/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Gradient: bg-gradient-to-tr from-[#FFC593] via-[#BC7198] to-[#5A77FF]
        'initial-grey': 'rgba(0, 0, 0, 0.0001)',
        'end-grey': 'rgba(0, 0, 0, 0.6612)',
        'light-grey': '#DFDFDF',
      },
      fontFamily: {
        'dm-sans': 'DM Sans',
      },
      backgroundImage: {
        // Desktop images
        '18-days-voyage': 'url(stories/desktop/18-days-voyage.jpg)',
        'architecturals': 'url(stories/desktop/architecturals.jpg)',
        'behind-the-waves': 'url(stories/desktop/behind-the-waves.jpg)',
        'calm-waters': 'url(stories/desktop/calm-waters.jpg)',
        'cityscapes': 'url(stories/desktop/cityscapes.jpg)',
        'dark-forest': 'url(stories/desktop/dark-forest.jpg)',
        'king-on-africa': 'url(stories/desktop/king-on-africa.jpg)',
        'land-of-dreams': 'url(stories/desktop/land-of-dreams.jpg)',
        'milky-way': 'url(stories/desktop/milky-way.jpg)',
        'moon-of-appalacia': 'url(stories/desktop/moon-of-appalacia.jpg)',
        'mountains': 'url(stories/desktop/mountains.jpg)',
        'rage-of-the-sea': 'url(stories/desktop/rage-of-the-sea.jpg)',
        'running-free': 'url(stories/desktop/running-free.jpg)',
        'somwarpet': 'url(stories/desktop/somwarpet.jpg)',
        'trip-to-nowhere': 'url(stories/desktop/trip-to-nowhere.jpg)',
        'unforeseen-corners': 'url(stories/desktop/unforeseen-corners.jpg)',
        'world-tour': 'url(stories/desktop/world-tour.jpg)',
        // Beta CTA image
        'beta-cta': 'url(shared/desktop/bg-beta.jpg)',
      }
    },
  },
  plugins: [],
}