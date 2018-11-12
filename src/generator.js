import assert from 'assert';
import {join} from 'path';

export const model = (api) => {
    const {Generator, paths, config} = api;
    return class Model extends Generator {
        writing() {
            const [name, dir] = this.args;
            const absTemplatePath = join(__dirname, '../templates');

            assert(name, 'Name required');
            assert(dir, 'Dir required');

            this.fs.copyTpl(
                join(absTemplatePath, 'model.js'),
                join(paths.absSrcPath, dir, 'models', `${name}.js`),
                {
                    name,
                },
            );
        }
    }
};

export const page = (api) => {
    const {Generator, paths, config} = api;
    return class Page extends Generator {
        writing() {
            const [name, dir] = this.args;
            const absTemplatePath = join(__dirname, '../templates');

            assert(name, 'Name required');
            assert(dir, 'Dir required');

            this.fs.copyTpl(
                join(absTemplatePath, 'page.js'),
                join(paths.absSrcPath, dir, `${name}.js`),
                {
                    name,
                },
            );

            this.fs.copyTpl(
                join(absTemplatePath, 'page.less'),
                join(paths.absSrcPath, dir, `${name}.less`),
                {
                    name,
                },
            );
        }
    }
};