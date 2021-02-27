import { WinsAnalysis } from './analyzers/WinsAnalysis';
import CsvFileReader from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HtmlReport } from './reportTargets/HtmlReport';
import { Summary } from './Summary';

// const csvFileReader = new CsvFileReader('football.csv');

const matchReader = MatchReader.fromCsv('football.csv');

matchReader.load();

const summary = Summary.winsAnalysisWithHtmlReport('Man United', 'football.csv');

summary.buildAndPrintReport(matchReader.matches);
