export default {
  computed: {
    isDesktop() {
      const width = window.innerWidth;
      return width > 768;
    },
    isSmallScreens() {
      const width = window.innerWidth;
      return width <= 768;
    }
  }
}