export class BaseSlotDto {
    
    id: number;
    title: string;
    start: string;
    end: string;
    
    constructor(
        _id: number,
        _title: string,
        _start: string,
        _end: string,
     
    ) {
        this.id = _id;
        this.title = _title;
        this.start = _start;
        this.end = _end;
       
    }

}