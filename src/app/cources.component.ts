import { Component } from '@angular/core';

@Component({
    selector:'courses',
    template: `
    <h2>{{ title }}</h2>
    <ul>
        <li *ngFor="let course of courses">
        {{ course }}
        </li>
    </ul>
    <button class="btn btn-primary">Submit</button>
    `
})
export class CoursesComponent{
    title="List of Courses";
    courses=["Course1","Course2","Course3"];
}
