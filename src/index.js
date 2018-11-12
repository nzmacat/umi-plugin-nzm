import {join} from 'path';
import {model, page} from './generator';

export default (api, opts = {}) => {
    api.registerGenerator('nzm:model', {
        Generator: model(api)
    });

    api.registerGenerator('nzm:page', {
        Generator: page(api)
    })
}