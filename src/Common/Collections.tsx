import _ from 'lodash';

class Collections {
    static update<T extends object, U extends keyof T, K extends keyof T>(
        collection: T[], matcher: Pick<T,U>, data: Pick<T,K>): T[] {
            return _.map(collection, item => _.isMatch(item, matcher) ? _.merge({...item}, data) : item);
    }

    static remove<T extends object, K extends keyof T>(
        collection: T[], matcher: Pick<T,K>): T[] {
            return _.reject(collection, _.matches(matcher));
    }
}

export default Collections;