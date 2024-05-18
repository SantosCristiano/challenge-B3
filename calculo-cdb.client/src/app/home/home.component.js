"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeComponent = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var environment_1 = require("../../environments/environment");
(0, core_1.Component)({
    selector: 'app-home',
    templateUrl: './home.component.html',
    changeDetection: core_1.ChangeDetectionStrategy.OnPush
});
var HomeComponent = /** @class */ (function () {
    function HomeComponent(http, cdRef) {
        this.http = http;
        this.cdRef = cdRef;
        this.RawScore = 0.0;
        this.NetIncome = 0.0;
    }
    HomeComponent.prototype.sendData = function () {
        var _this = this;
        if (this.validateFields()) {
            console.error('Campos inválidos');
            return;
        }
        var body = {
            initialValue: this.initialValue,
            qtyMonths: this.qtyMonths
        };
        var headers = new http_1.HttpHeaders().set('Content-Type', 'application/json');
        this.http.post("".concat(environment_1.environment.BASE_URL, "cdbcalculator"), body, { headers: headers }).subscribe(function (data) {
            _this.RawScore = data.RawScore;
            _this.NetIncome = data.NetIncome;
            _this.cdRef.markForCheck();
        }, function (error) {
            console.error('Erro:', error);
        });
    };
    HomeComponent.prototype.validateFields = function () {
        return !this.qtyMonths || this.qtyMonths <= 0 || !this.initialValue || this.initialValue <= 0;
    };
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map