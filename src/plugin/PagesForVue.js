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
                setPaginator : function(objectList, objectsPerPage){
                    this.paginator = new Paginator(objectList, objectsPerPage);
                },
                gotoPage : function(pageNumber){
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