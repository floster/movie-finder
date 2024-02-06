const RESULTS_PER_PAGE = 10;

export const useSearchStore = defineStore("search", {
  state: () => ({
    query: "",
    page: 1,
    results: null as SearchResult[] | null,
    resultsQty: 0,
    searchInProgress: false,
  }),
  getters: {
    hasResults: (state) => {
      return state.results && state.results?.length > 0;
    },
    pagesQty: (state) => {
      return Math.ceil(state.resultsQty / RESULTS_PER_PAGE);
    },
    hasMoreResults: (state) => {
      return state.page <= Math.ceil(state.resultsQty / RESULTS_PER_PAGE);
    },
  },
  actions: {
    setSearch(query: string) {
      this.resetSearch();
      this.query = query;
    },
    resetSearch() {
      this.page = 1;
      this.query = "";
    },
    async search() {
      if (!this.query) return;

      this.searchInProgress = true;
      const data = await $fetch(
        `/api/search?q=${this.query}&page=${this.page}`
      );
      this.results = data?.results || null;
      this.resultsQty = parseInt(data?.qty || "0", 10);

      this.searchInProgress = false;
    },
    async getNextSearchPage() {
      if (!this.hasMoreResults) return;
      this.page = this.page + 1;
      await this.search();
    },
  },
});
