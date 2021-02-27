import CsvFileReader from "./CsvFileReader";
import { MatchData } from "./MatchData";
import { MatchResult } from "./MatchResult";
import { dateStringToDate } from "./utils";

interface DataReader {
    read(): void;
    data: string[][];
}

export class MatchReader {

    static fromCsv(path: string): MatchReader {
        return new MatchReader(new CsvFileReader(path));
    }

    matches: MatchData[] = [];

    constructor(public reader: DataReader) { }

    load(): void {
        this.reader.read();
        //Map will not mutate the existing array but return a new array
        this.matches = this.reader.data.map(
            (row: string[]): MatchData => {
                return [
                    dateStringToDate(row[0]),
                    row[1],
                    row[2],
                    parseInt(row[3]),
                    parseInt(row[4]),
                    //Type assertion, override
                    row[5] as MatchResult,
                    row[6]
                ];
            }
        );
    }
}