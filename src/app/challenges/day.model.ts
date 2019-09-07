export enum DayStatus {
    Open, Completed, Failed
}

export interface Day {
    dayInWeek: number;
    dayInMonth: number;
    date: Date;
    status: DayStatus;
}
