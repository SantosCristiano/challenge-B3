"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var forms_1 = require("@angular/forms");
var home_component_1 = require("./home.component");
var testing_2 = require("@angular/common/http/testing");
var environment_1 = require("./environment");
describe('HomeComponent', function () {
    var component;
    var fixture;
    beforeEach((0, testing_1.async)(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [forms_1.FormsModule, testing_2.HttpClientTestingModule],
            declarations: [home_component_1.HomeComponent],
            providers: [
                { provide: 'BASE_URL', useValue: environment_1.environment.BASE_URL }
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(home_component_1.HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
    it('should disable the button when fields are invalid', function () {
        component.initialValue = 0;
        component.qtyMonths = 1;
        fixture.detectChanges();
        var button = fixture.nativeElement.querySelector('button');
        expect(button.disabled).toBe(true);
    });
    it('test when to calculate and display correct results when fields are valid', function () { return __awaiter(void 0, void 0, void 0, function () {
        var button, resultGrossElement, resultGrossContent, resultLiquidElement, resultLiquidContent;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    component.initialValue = 1000;
                    component.qtyMonths = 12;
                    fixture.detectChanges();
                    button = fixture.nativeElement.querySelector('button');
                    button.click();
                    return [4 /*yield*/, fixture.whenStable()];
                case 1:
                    _a.sent();
                    fixture.detectChanges();
                    resultGrossElement = fixture.nativeElement.querySelector('#LabelGrossResult');
                    resultGrossContent = resultGrossElement.textContent;
                    resultLiquidElement = fixture.nativeElement.querySelector('#LabelNetResult');
                    resultLiquidContent = resultLiquidElement.textContent;
                    expect(resultGrossContent).toContain('R$');
                    expect(resultGrossContent).not.toBeNull();
                    expect(resultLiquidContent).toContain('R$');
                    expect(resultLiquidContent).not.toBeNull();
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=home.component.spec.js.map