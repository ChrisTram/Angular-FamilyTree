import { Component } from '@angular/core';
import { PositionModel } from '../../models/position.model';
import { DescriptionsService } from '../../services/descriptions.service';

@Component({
    selector: 'app-tree-core',
    templateUrl: './tree-core.component.html',
    styleUrls: ['./tree-core.component.css']
})
export class TreeCoreComponent {
    config = [
        {
            id: 1, name: 'Chris TRAMIER', isExpanded: true, classes: ['tramier'], year: 1997,
            children: [
                {
                    id: 2, name: 'Jean-Luc TRAMIER', isExpanded: true, classes: ['tramier'], year: 1965,
                    children: [
                        {
                            id: 4, name: 'Noël TRAMIER', isExpanded: false, classes: ['tramier'], year: 1934,
                        },
                        {
                            id: 5, name: 'Micheline CALABRESE', isExpanded: false, year: 1942, classes: ['calabrese']
                        }
                    ]
                },
                {
                    id: 3, name: 'Véronique AFFRE', isExpanded: false, classes: ['affre'], year: 1970,
                    children: [
                        {
                            id: 6, name: 'Gilbert AFFRE', isExpanded: false, classes: ['affre'], year: 1938, yearD: 1998,
                        },
                        {
                            id: 7, name: 'Suzanne SABLOS', isExpanded: false, classes: ['sablos'], year: 1939
                        }
                    ]
                }
            ]
        }
    ];
    options: {
        displayField: 'nodeName',
        isExpandedField: 'expanded',
        idField: 'uuid',
        hasChildrenField: 'nodes'
    };
    description = '';
    coords: PositionModel[];

    constructor(private descriptions$: DescriptionsService) {
        this.coords = [];
        this.fillCoords();
    }

    populate(val: number) {
        for (let i = 0; i < this.descriptions$.descriptionsCore.length; ++i) {
            if (val === this.descriptions$.descriptionsCore[i].getId()) {
                this.description = this.descriptions$.descriptionsCore[i].getDesc();
            }
        }
    }

    fillCoords() {
    }
}
