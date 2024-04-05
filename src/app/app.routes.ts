import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './Test/test/test.component';
import { FigmaTestComponent } from './Test/figma-test/figma-test.component';
import { TestResponsiveComponent } from './Test/test-responsive/test-responsive.component';
import { FinalComponent } from './Test/final/final.component';

export const routes: Routes = [
    {path:'', component: FinalComponent},
    {path:'test', component:TestComponent},
    {path:'responsive', component: TestResponsiveComponent},
    {path:'final' , component: FinalComponent},
    {path:'figma' , component: FigmaTestComponent}
];



