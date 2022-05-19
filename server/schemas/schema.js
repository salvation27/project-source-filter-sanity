import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import posts from './posts/posts'
import category from './posts/category'
import basis from './posts/basis'
import tehnology from './posts/tehnology'
import site from './posts/site'


export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    posts,
    basis,
    tehnology,
    category,
    site,
  ]),
})
