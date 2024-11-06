import { BaseSlotDto } from "./BaseSlotDto";

export class CalendarAppointmentsDto {

    listAppointments: BaseSlotDto[];
    sysDate: Date;
    // deleted: boolean;
    hourStart: string;
    hourEnd: string;
    // daySetHide: string[];

    constructor(
        _listAppointments: BaseSlotDto[],
        _sysDate: Date,
        // _deleted: boolean,
        _hourStart: string,
        _hourEnd: string,
        // _daySetHide: string[]
    ) {
        this.listAppointments = _listAppointments;
        this.sysDate = _sysDate;
        // this.deleted = _deleted;
        this.hourEnd = _hourEnd;
        this.hourStart = _hourStart;
        // this.daySetHide = _daySetHide;
    }

}