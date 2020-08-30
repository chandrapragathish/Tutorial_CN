
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'squre',
    pure: false
})

export class sqPipe implements PipeTransform {
    transform(value, value2) {
        console.log(value);
        return value * value2;
    }

}

@Pipe({
    name: 'filter',
    pure: false
})

export class filterPipe implements PipeTransform {
    transform(value, field, filtervalue) {
        if (value && value.length > 0) {
            return value.filter(x => x[field] == filtervalue);
        }
        else
            return [];
    }

}