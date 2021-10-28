import Paginator from "./Paginator.js"

export default {
    install(Vue, options) {
        Vue.mixin({
            data() {
                return {
                    elidedPageRangeProps: {
                        symbol: "...",
                        onEachSide: 3,
                        onEnds: 2,
                    },
                    paginator: new Paginator([], 1),
                    currentPageNumber: 1
                }
            },
            methods: {
                setPaginator: function (objectList, objectsPerPage) {
                    this.paginator = new Paginator(objectList, objectsPerPage);
                },
                gotoPage: function (pageNumber) {
                    this.currentPageNumber = pageNumber;
                }
            },
            computed: {
                page() {
                    if (this.paginator.pageCount() > 0) {
                        return this.paginator.getPage(this.currentPageNumber);
                    }
                    return [];
                }
                ,
                elidedPageRange() {
                    if (this.paginator.pageCount() > 0 && this.paginator.pageExists(this.currentPageNumber)) {
                        return this.paginator.getElidedPageRange(this.currentPageNumber,
                            this.elidedPageRangeProps.symbol,
                            this.elidedPageRangeProps.onEachSide,
                            this.elidedPageRangeProps.onEnds
                        );
                    } else {
                        return [];
                    }

                }
            }
        });
    }
}



