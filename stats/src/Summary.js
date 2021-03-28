"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var HtmlReport_1 = require("./reportTargets/HtmlReport");
var Summary = /** @class */ (function () {
    function Summary(analyzer, outPutTarget) {
        this.analyzer = analyzer;
        this.outPutTarget = outPutTarget;
    }
    Summary.winsAnalysisWithHtmlReport = function (team, report) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(team), new HtmlReport_1.HtmlReport(report));
    };
    Summary.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.outPutTarget.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;
