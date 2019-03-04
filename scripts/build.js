const rollup = require('rollup');
const resolve = require('rollup-plugin-node-resolve');
const postcss = require('rollup-plugin-postcss');
const babel = require('rollup-plugin-babel');
const uglify = require('rollup-plugin-uglify-es');

const formats = {
  'amd': '.amd',
  'cjs': '.common',
  'es': '.esm',
  'iife': '',
  'umd': '.umd'
};

async function generateBuilds(formats, format, isUglify = false) {
  const inputOptions = {
    input: 'src/index.js',
    plugins: [
      resolve(),
      babel({
        exclude: 'node_modules/**' // 只编译我们的源代码
      }),
      postcss({
        extensions: ['.css']
      }),
      (isUglify && uglify())
    ]
  };


  const file = isUglify ? `dist/vue-viewer${formats[format]}.min.js` : `dist/vue-viewer${formats[format]}.js`;
  const outputOptions = {
    file,
    format,
    name: 'Viewer'
  };

  const bundle = await rollup.rollup(inputOptions);

  // generate code and a sourcemap
  const { code, map } = await bundle.generate(outputOptions);

  // or write the bundle to disk
  await bundle.write(outputOptions);
}

function build(formats, isUglify = false) {
  return Object.keys(formats).map(format => generateBuilds(formats, format, isUglify));
}

const allBuilds = build(formats).concat(build(formats, true));
Promise.all(allBuilds).then(() => {
  console.log('build successed');
});