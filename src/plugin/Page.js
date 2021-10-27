export default class Page{
    constructor(objectList, paginator, pageNumber){
        this.objectList = objectList;
        this.paginator = paginator;
        this.pageNumber = pageNumber;
    }

    getObjectList(){
        return this.objectList
    }

    hasNext(){
        // the !! converts the number into a boolean
        return !!this.paginator._nextPage(this.pageNumber);
    }

    hasPrevious(){
        return !!this.paginator._previousPage(this.pageNumber);
        
    }

    hasOtherPages(){
        return hasNext() || hasPrevious();
    }

    nextPageNumber(){
        return this.paginator._nextPage(this.pageNumber);
    }

    previousPageNumber(){
        return this.paginator._previousPage(this.pageNumber);
    }

    // The 1-based index of the first item on this page
    startIndex(){
        return this.paginator.objectsPerPage() * (this.pageNumber - 1);
    }

    // The 1-based index of the last item on this page
    endIndex(){
        if(this.hasNext()){
            return this.paginator.objectsPerPage() * this.pageNumber
        }else{
            return this.paginator.objectsPerPage() * (this.pageNumber - 1) + this.objectList.length
        }
    }
}