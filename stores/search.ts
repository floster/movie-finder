const RESULTS_PER_PAGE = 10;

export const useSearchStore = defineStore("search", {
  state: () => ({
    query: "",
    page: 1,
    resultsQty: 0,
  }),
  getters: {
    pagesQty: (state) => {
      return Math.ceil(state.resultsQty / RESULTS_PER_PAGE);
    },
  },
  actions: {
    setSearchQuery(query: string = "") {
      this.query = query;
    },
    setResultsQty(qty: number = 0) {
      this.resultsQty = qty;
    },
    setCurrentPage(page: number = 1) {
      this.page = page;
    },
    resetSearch() {
      this.setCurrentPage();
      this.setSearchQuery();
      this.setResultsQty();
    },
    getNextSearchPage() {
      if (this.page === this.pagesQty) return;
      this.page = this.page + 1;
    },
    getPrevSearchPage() {
      if (this.page <= 1) return;
      this.page = this.page - 1;
    },
  },
});
