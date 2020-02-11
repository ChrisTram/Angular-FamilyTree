import { Injectable } from '@angular/core';
import { OptionalInformationModel } from '../models/optional-information.model';

@Injectable({
    providedIn: 'root'
})
export class DescriptionsService {
    descriptionsCore: OptionalInformationModel[] = [];

    constructor() {
        this.populateCore();
    }

    populateCore() {
        this.descriptionsCore.push(new OptionalInformationModel(1, 'Chris TRAMIER\n' +
            'né le 16 mai 1997 à St Maurice (94),\n' +
            ' auteur de l\'arbre,\n' +
            ' Ingénieur en développement WEB.'));

        this.descriptionsCore.push(new OptionalInformationModel(2, 'Jean-Luc TRAMIER\n' +
            'Né le 3 janvier 1965 à Cavaillon,\n' +
            ' Auto-Entreprenneur dans le batiment.\n'));

        this.descriptionsCore.push(new OptionalInformationModel(3, 'Véronique TRAMIER\n' +
            'Né le 9 février 1970 à ?,\n' +
            ' Cadre RH.\n'));
    
            this.descriptionsCore.push(new OptionalInformationModel(4, 'Noël TRAMIER\n' +
            'Né le 27 décembre 1934 à Montfavet,\n' +
            ' Entrepreneur de Maçonnerie. Auteur de la branche TRAMIER.\n'));
    
            this.descriptionsCore.push(new OptionalInformationModel(5, 'Micheline CALABRESE\n' +
            'Né le 7 septembre 1942 à Castel St Gorgio en Italie,\n' +
            ' Entrepreneur de Maçonnerie. Auteur de la branche TRAMIER.\n'));
            
            this.descriptionsCore.push(new OptionalInformationModel(6, 'Gilbert AFFRE\n' +
            'Né le 11 mars 1938 à Saint Chinian (34),\n' +
            ' Ouvrier du batiment\n'));

            this.descriptionsCore.push(new OptionalInformationModel(7, 'Suzanne SABLOS\n' +
            'Né le 7 septembre 1942 à Castel St Gorgio en Italie,\n' +
            ' Entrepreneur de Maçonnerie. Auteur de la branche TRAMIER.\n'));
    }
}
