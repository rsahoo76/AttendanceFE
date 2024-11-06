export class BaseSlotDto {
    
    id: number;
    title: string;
    start: string;
    end: string;
    // backgroundColor: string;
    // borderColor: string;
    // eventProperties : any[];
    // classNames:string[];

    constructor(
        _id: number,
        _title: string,
        _start: string,
        _end: string,
        // _backgroundColor: string,
        // _borderColor: string,
        // _eventProperties: any[],
        // _classNames:string[]
    ) {
        this.id = _id;
        this.title = _title;
        this.start = _start;
        this.end = _end;
        // this.backgroundColor = _backgroundColor;
        // this.borderColor = _borderColor;
        // this.eventProperties = _eventProperties;
        // this.classNames = _classNames;
    }

}