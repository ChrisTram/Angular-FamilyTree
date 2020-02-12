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
                            children: [
                                {
                                    id: 8, name: 'Edouard Auguste TRAMIER', isExpanded: false, classes: ['tramier'], year: 1887, yearD: 1971,
                                    children: [
                                        {
                                            id: 10, name: 'Louis TRAMIER', isExpanded: false, classes: ['tramier'], year: 1857, yearD: 1938,
                                            children: [
                                                {
                                                    id: 12, name: 'Jean Baptiste Louis TRAMIER', isExpanded: false, classes: ['tramier'], year: 1835, yearD: 1922,
                                                    children: [
                                                        {
                                                            id: 14, name: 'Joseph TRAMIER', isExpanded: false, classes: ['tramier'], year: 1809, yearD: 1855,
                                                        },
                                                        {
                                                            id: 15, name: 'Marie Françoise BAGNOL', isExpanded: false, year: 1808, yearD: 1895,
                                                        }
                                                    ]
                                                },
                                                {
                                                    id: 13, name: 'Marie Anne BERTRAND', isExpanded: false, year: 1834, yearD: 1904,
                                                }
                                            ]
                                        },
                                        {
                                            id: 11, name: 'Marie Louise FLORIOT', isExpanded: false, classes: ['FLORIOT'], year: 1856, yearD: "1938+",
                                        }
                                    ]
                                },
                                {
                                    id: 9, name: 'Louise Julie POINT DE FONBERTASSE', isExpanded: false, classes: ['point'], year: 1899
                                }
                            ]
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
