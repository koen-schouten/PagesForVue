import Page from "./Page.js"

export default class Paginator{

    pages = [];

    constructor(objectList, objectsPerPage){
        this.objectList = objectList;
        this.objectsPerPage = objectsPerPage;
        this._generatePages(objectList, objectsPerPage)
    }

    _generatePages(objectList, objectsPerPage){
        let pageNumber = 0;
        for(let i = 0; i < objectList.length; i += objectsPerPage){
            pageNumber += 1;  
            let page = new Page(objectList.slice(i, i + objectsPerPage), this, pageNumber);
            this.pages.push(page);
        }
    }
  
    getObjectList(){
        return this.objectList;
    }

    getObjectsPerPage(){
        return this.objectsPerPage;
    }

    pageCount() {
        return this.pages.length;
    }

    getPage(number){
        return this.pages[number - 1];
    }

    pageRange(){
        return Array.from({length: this.pages.length}, (_, i) => i + 1)
    }

    getElidedPageRange(number, symbol="...", onEachSide=3, onEnds=2){
        let pageRange = this.pageRange().map(el => {
            return {"type": "pageNumber", "value": el}
        });
        let elidedPageRange = []

        if(parseInt(number) > pageRange.length){
            throw new Error('PageNumber is not valid.');
        }

        let numberPage = [pageRange[number - 1]];
        let pagesLeftOfNumber = pageRange.slice(0,number - 1);
        let pagesRightOfNumber = pageRange.slice(number);

        if(pagesLeftOfNumber.length <= onEachSide + onEnds){
            elidedPageRange = elidedPageRange.concat(pagesLeftOfNumber); 
        }else{
            elidedPageRange = elidedPageRange.concat(pagesLeftOfNumber.slice(0, onEnds));
            elidedPageRange = elidedPageRange.concat([{"type": "ellipsis", "value": symbol}]);
            elidedPageRange = elidedPageRange.concat(pagesLeftOfNumber.slice(pagesLeftOfNumber.length - onEachSide))
        }

        elidedPageRange = elidedPageRange.concat(numberPage)

        if(pagesRightOfNumber.length <= onEachSide + onEnds){
            elidedPageRange = elidedPageRange.concat(pagesRightOfNumber); 
        }else{
            elidedPageRange = elidedPageRange.concat(pagesRightOfNumber.slice(0, onEachSide));
            elidedPageRange = elidedPageRange.concat([{"type": "ellipsis", "value": symbol}]);
            elidedPageRange = elidedPageRange.concat(pagesRightOfNumber.slice(pagesRightOfNumber.length - onEnds))
        }
        
        return elidedPageRange;
    }

    _nextPage(pageNumber){
        //pageNumber is 1 higher than index in array
        //so [pageNumber + 2] instead of [pageNumber + 1]
        return this.pages[pageNumber + 2];
    }

    _previousPage(pageNumber){
        //pageNumber is 1 higher than index in array
        //so [pageNumber] instead of [pageNumber - 1] 
        return this.pages[pageNumber];
    }






}