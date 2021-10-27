import Paginator from "./Paginator.js"

export default {
    install(Vue, options){

        Vue.mixin({
            data() {
                return {
                    currentPageNumber: 0
                }
            },

            created(){
                this.paginator;

            },
            watch:{
                currentPageNumber(newPageNumber, oldPageNumber){
                    //Runs when currentPageNumber is updated
                }
            },
            methods: {
                createPaginator(objectList, objectsPerPage, startPageNumber){
                    this.paginator = new Paginator(objectList, objectsPerPage);
                    this.currentPageNumber = startPageNumber;
                }
            },
            computed: {
                page(){
                    return this.paginator.getPage(currentPageNumber);
                }
            }

        });
    }
}