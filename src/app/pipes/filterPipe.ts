import {Pipe} from "angular2/angular2";

@Pipe({
    name: "filter"
})
export class FilterPipe {
    transform(value: any[], [pattern, field]) {
        if (!pattern ||  pattern == '') {
            return value;
        }


        var lPattern = pattern.toLowerCase();

        return value.filter((item) => {
            if (!field) {
                for(name in item) {
                    if (item.hasOwnProperty(name)  &&  typeof(item[name]) != 'function') {
                        var matchData = item[name];
                        if (typeof(item[name]) == 'number') {
                            matchData = "" + item[name];
                        }
                        var isMatching = matchData.toLowerCase().indexOf(lPattern) > -1;
                        if (isMatching) {
                            return true;
                        }
                    }
                }
                return false;
            } else {
                return item[field].toLowerCase().indexOf(lPattern) > -1;
            }

        });
    }
}
