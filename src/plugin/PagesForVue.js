import Paginator from "./Paginator.js"


const defaultElidedPageRangeProperties = {
    symbol: "…",
    onEachSide: 2,
    onEnds: 2, 
}
const emptyPaginator = new Paginator([], 1)
const startPageNumber = 1;

export default {
    data() {
        return {
            elidedPageRangeProperties: defaultElidedPageRangeProperties,
            //Set a defaut paginator & currentPageNumber
            paginator: emptyPaginator,
            currentPageNumber: startPageNumber
        }
    },
    methods: {
        setPaginator: function (objectList, objectsPerPage) {
            this.paginator = new Paginator(objectList, objectsPerPage);
        },
        //Sets the currentPageNumber to pageNumber
        // This updates the computed page object to the page belonging to pageNumber.
        gotoPage: function (pageNumber) {
            this.currentPageNumber = pageNumber;
        },
        setElidedPageRangeProperties: function (props) {
            this.elidedPageRangeProperties = props;
        }
    },
    computed: {
        //Returns the page object of the current active page.
        page() {
            if (this.paginator.pageCount() > 0) {
                return this.paginator.getPage(this.currentPageNumber);
            }
            return null;
        }
        ,
        elidedPageRange() {
            if (this.paginator.pageCount() > 0 && this.paginator.pageExists(this.currentPageNumber)) {
                return this.paginator.getElidedPageRange(this.currentPageNumber,
                    this.elidedPageRangeProperties.symbol,
                    this.elidedPageRangeProperties.onEachSide,
                    this.elidedPageRangeProperties.onEnds
                );
            } else {
                return [];
            }

        }
    }
}

