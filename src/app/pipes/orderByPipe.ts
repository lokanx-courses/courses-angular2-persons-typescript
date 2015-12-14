import {Pipe} from "angular2/core";

@Pipe({
    name: "orderBy",
    pure: false
})
export class OrderByPipe {

    sortOrder: number = 1;
    sortField: string = '';

    transform(value: any[], [field]) {
        if (!value || !value.sort || value.length === 0) {
            return value;
        }

        if (field.charAt(0) == '-') {
            this.sortOrder *= -1;
            this.sortField = field.substr(1);
        } else {
            if (this.sortOrder == -1) {
                this.sortOrder *= -1;
            }
            this.sortField = field;
        }

        return value.sort((a: any, b: any) => {
            if (a[this.sortField] < b[this.sortField]) {
                return -1 * this.sortOrder;
            }
            if (a[this.sortField] > b[this.sortField]) {
                return 1 * this.sortOrder;
            }

          return 0;
        });
    }
}
