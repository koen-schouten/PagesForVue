import Paginator from "./Paginator.js"

export default {
    install(Vue, options){

        Vue.mixin({
            data() {
                return {
                    paginator: "",
                    currentPageNumber: 1
                }
            },
            methods: {
                createPaginator : function(objectList, objectsPerPage, startPageNumber){
                    this.paginator = new Paginator(objectList, objectsPerPage);
                    this.currentPageNumber = startPageNumber;
                },
                updatePaginator : function(objectList, objectsPerPage){
                    this.paginator = new Paginator(objectList, objectsPerPage);
                },
                setPage : function(pageNumber){
                    this.currentPageNumber = pageNumber;
                }
            },
            computed: {
                page(){
                    return this.paginator.getPage(this.currentPageNumber).getObjectList();
                }
            }

        });
    }
}