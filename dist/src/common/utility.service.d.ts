export declare class Utility {
    constructor();
    onlyUnique(value: any, index: any, self: any): boolean;
    sha1(data: string): string;
    enSha1(data: string): string;
    sumReducer: (accumulator: any, currentValue: any) => any;
    today(): string;
    tomorrow(): string;
    now(): string;
    diff_minutes(d1: Date, d2: Date): number;
    getLastDateByMonth(month: number, year: number): "31" | "29" | "28" | "30";
    calcTimekeepingMinutes(sBeginTime: string, sFinishTime: string): number;
}
