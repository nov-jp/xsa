/*! The MIT License. Copyright 2026 Nobuo Nakayama @ Shimotsuki (https://github.com/nov-jp/). */
import { XSACore } from '@nov-xsa/core';
import fs from 'fs';
import { globSync } from 'glob';

const xsaPostCSS = ( opts = {} ) => {
	// デフォルトオプション
	const options = {
		// スキャン対象
		content: [
			'./**/*.html',
			'./**/*.php',
			'./**/*.js'
		],
		...opts
	};

	const core = new XSACore();

	return {
		postcssPlugin: 'postcss-xsa',
		Once( root ) {
			const cacheMap = new Map();
			const files = globSync( options.content );

			files.forEach( file => {
				if ( ! fs.existsSync( file ) ) {
					return;
				}
				const code = fs.readFileSync( file, 'utf8' );

				const matches = code.match( /--[a-z0-9-_]+--(?=:)/g );

				if ( matches ) {
					matches.forEach( varName => {
						if ( ! cacheMap.has( varName ) ) {
							const data = core._process( varName );
							if ( data ) {
								cacheMap.set( varName, data );
							}
						}
					} );
				}
			} );

			// 解析結果からCSS文字列を構築
			const sortedList = Array.from( cacheMap.values() ).sort( ( a, b ) => core._comparePriority( a, b ) );

			let output = '/* XSA Generated */\n';

			// 通常ルール
			sortedList.filter( d => ! d.slot.query ).forEach( d => {
				output += `${ d.selector }{${ d.css }}\n`;
			} );

			// クエリ付きルール
			const queryGroups = {};
			sortedList.filter( d => d.slot.query ).forEach( d => {
				const q = d.slot.query;
				if ( ! queryGroups[ q ] ) {
					queryGroups[ q ] = '';
				}
				queryGroups[ q ] += `\t${ d.selector }{${ d.css }}\n`;
			} );

			Object.values( core._queries ).forEach( queryText => {
				if ( queryGroups[ queryText ] ) {
					output += `${ queryText }{\n${ queryGroups[ queryText ] }}\n`;
				}
			} );

			// 生成したCSSをASTとして追加
			root.append( output );
		}
	};
};

xsaPostCSS.postcss = true;
export default xsaPostCSS;
