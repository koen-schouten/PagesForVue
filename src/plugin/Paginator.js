import Page from "page.js"

export class Paginator{
    constructor(objectList, objectsPerPage){
        this.objectList = objectList;
        this.objectsPerPage = objectsPerPage;
    }


    get objectList(){
        return this.objectList;
    }

    get objectsPerPage(){
        return this.objectsPerPage;
    }

    pageCount() {
        return;
    }

    numPages(){
        return;
    }

    getPage(number){
        return;
    }

    pageRange(){
        return;
    }

    getElidedPageRange(number, symbol, on_each_side=3, on_ends=2){
        return;
    }

    _nextPage(page){
        return;
    }

    _previousPage(page){
        return;
    }






}