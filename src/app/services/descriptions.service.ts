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
            'auteur du site et généalogiste amateur actuel,\n' +
            'Ingénieur en développement WEB.'));

        this.descriptionsCore.push(new OptionalInformationModel(2, 'Jean-Luc TRAMIER\n' +
            'Né le 3 janvier 1965 à Cavaillon,\n' +
            'Auto-Entreprenneur dans le batiment.\n'));

        this.descriptionsCore.push(new OptionalInformationModel(3, 'Véronique TRAMIER\n' +
            'Née le 9 février 1970 à Lodeve (34),\n' +
            'Cadre RH.\n'));
    
            this.descriptionsCore.push(new OptionalInformationModel(4, 'Noël TRAMIER\n' +
            'Né le 27 décembre 1934 à Montfavet,\n' +
            'Chef d\'entreprise de Maçonnerie. Auteur de la branche TRAMIER.\n'));
    
            this.descriptionsCore.push(new OptionalInformationModel(5, 'Micheline CALABRESE\n' +
            'Née le 7 septembre 1942 à Castel St Giorgio en Italie (84),\n' +
            'Entrepreneur de Maçonnerie. Auteur de la branche TRAMIER.\n'));
            
            this.descriptionsCore.push(new OptionalInformationModel(6, 'Gilbert AFFRE\n' +
            'Né le 11 mars 1938 à Saint Chinian (34),\n' +
            'Ouvrier du batiment.\n'));

            this.descriptionsCore.push(new OptionalInformationModel(7, 'Suzanne SABLOS\n' +
            'Née le 24 décembre 1939 à Lodeve (34),\n' +
            'Couturière.\n'));
            
            this.descriptionsCore.push(new OptionalInformationModel(8, 'Edouard Auguste TRAMIER\n' +
            'Né le 19 avril 1887 à Sarrians,\n' +
            'Journalier, pépiniériste, boucher.\n'  +
            'Médaillé de bronze, médaille de bravoure. Tirailleur.\n'));
            
            this.descriptionsCore.push(new OptionalInformationModel(9, 'Louise Julie POINT\n' +
            'Née le 21 mars 1899 dans le Vaucluse,\n' +
            'Couturière.\n'));

            this.descriptionsCore.push(new OptionalInformationModel(10, 'Louis TRAMIER\n' +
            'Né le 31 décembre 1857 à Sarrians,\n' +
            'Aubergiste, boulanger.\n'));
            
            this.descriptionsCore.push(new OptionalInformationModel(11, 'Marie Louise FLORIOT\n' +
            'Née le 30 mai 1856 à Sarrians,\n' +
            'Sans profession.\n'));

            this.descriptionsCore.push(new OptionalInformationModel(12, 'Jean Baptiste Louis TRAMIER\n' +
            'Né le 10 février 1835 à Sarrians,\n' +
            'Cultivateur, marchand de mouton.\n'));
            
            this.descriptionsCore.push(new OptionalInformationModel(13, 'Marie Anne BERTRAND\n' +
            'Née le 17 juin 1934 \n' +
            'Propriétaire.\n'));

            this.descriptionsCore.push(new OptionalInformationModel(14, 'Joseph TRAMIER\n' +
            'Cultivateur. Né le 4 janvier 1809 à Sarrians,\n' +
            'Marié le 30 juin 1830 à Bédarrides. Au moins 10 enfants.\n'));
            
            this.descriptionsCore.push(new OptionalInformationModel(15, 'Marie Françoise BAGNOL\n' +
            'Née le 30 aout 1808 à Bedarrides,\n' +
            'Cultivatrice. Fille de Joseph RAYNAYD et de Françoise BROUCAREL.\n'));

            this.descriptionsCore.push(new OptionalInformationModel(0, ' TRAMIER\n' +
            'Né le  à Sarrians,\n' +
            '.\n'));
            
            this.descriptionsCore.push(new OptionalInformationModel(0, '\n' +
            'Née le  à Sarrians,\n' +
            '.\n'));
    }
}
