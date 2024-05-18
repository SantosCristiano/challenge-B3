"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var nav_menu_component_1 = require("./nav-menu/nav-menu.component");
var home_component_1 = require("./home/home.component");
var common_1 = require("@angular/common");
(0, core_1.NgModule)({
    declarations: [
        app_component_1.AppComponent,
        nav_menu_component_1.NavMenuComponent,
        home_component_1.HomeComponent
    ],
    imports: [
        platform_browser_1.BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        http_1.HttpClientModule,
        forms_1.FormsModule,
        router_1.RouterModule.forRoot([
            { path: '', component: home_component_1.HomeComponent, pathMatch: 'full' },
            { path: 'home', component: home_component_1.HomeComponent },
        ]),
        common_1.CommonModule
    ],
    providers: [common_1.CurrencyPipe],
    bootstrap: [app_component_1.AppComponent]
});
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map