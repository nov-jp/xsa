import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';

export default [
	{
		input: 'src/xsa.js',
		output: [
			// ブラウザ用 (IIFE)
			{
				file: 'dist/xsa.js',
				format: 'iife',
				name: 'XSA',
				sourcemap: true
			},
			// ブラウザ用 Minify版
			{
				file: 'dist/xsa.min.js',
				format: 'iife',
				name: 'XSA',
				plugins: [
					terser( {
						mangle: {
							properties: {
								regex: /^_/,
								keep_quoted: true
							}
						}
					} )
				],
				sourcemap: true
			},
			// モダン環境用 (ESM)
			{
				file: 'dist/xsa.mjs',
				format: 'es',
				sourcemap: true
			}
		],
		plugins: [
			resolve( {
				browser: true,
				preferBuiltins: false,
				extensions: [ '.js', '.json' ]
			} ),
			json(),
			commonjs()
		]
	}
];
