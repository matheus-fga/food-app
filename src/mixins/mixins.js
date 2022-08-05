export default {
  methods: {
    isDesktop() {
      const width = window.innerWidth;
      return width > 768;
    },
    isSmallScreen() {
      const width = window.innerWidth;
      return width <= 768;
    }
  },
  filters: {
    currency(value) {
      return `R$ ${value.toLocaleString('pt-br', { minimumFractionDigits: 2 })}`;
    }
  }
}