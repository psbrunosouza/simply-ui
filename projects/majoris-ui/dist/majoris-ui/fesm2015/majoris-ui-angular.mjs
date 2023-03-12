import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class MjsButtonComponent {
}
MjsButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.2", ngImport: i0, type: MjsButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MjsButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.2", type: MjsButtonComponent, selector: "lib-mjs-button", ngImport: i0, template: "<p>mjs-button works!</p>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.2", ngImport: i0, type: MjsButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-mjs-button', template: "<p>mjs-button works!</p>\n" }]
        }] });

class ComponentsModule {
}
ComponentsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.2", ngImport: i0, type: ComponentsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ComponentsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.2", ngImport: i0, type: ComponentsModule, declarations: [MjsButtonComponent], imports: [CommonModule], exports: [MjsButtonComponent] });
ComponentsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.2", ngImport: i0, type: ComponentsModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.2", ngImport: i0, type: ComponentsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        MjsButtonComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        MjsButtonComponent
                    ]
                }]
        }] });

class MajorisUiModule {
}
MajorisUiModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.2", ngImport: i0, type: MajorisUiModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MajorisUiModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.2", ngImport: i0, type: MajorisUiModule, imports: [ComponentsModule], exports: [ComponentsModule] });
MajorisUiModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.2", ngImport: i0, type: MajorisUiModule, imports: [ComponentsModule, ComponentsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.2", ngImport: i0, type: MajorisUiModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        ComponentsModule
                    ],
                    exports: [
                        ComponentsModule
                    ]
                }]
        }] });

/*
 * Public API Surface of majoris-ui
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ComponentsModule, MajorisUiModule, MjsButtonComponent };
//# sourceMappingURL=majoris-ui-angular.mjs.map
