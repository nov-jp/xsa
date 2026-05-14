import * as lightningcss from 'lightningcss';
//import { browserslistToTargets } from 'lightningcss';
//import browserslist from 'browserslist';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname( fileURLToPath( import.meta.url ) );
const srcDir = path.resolve( __dirname, 'src' );
const distDir = path.resolve( __dirname, 'dist' );

if ( ! fs.existsSync( distDir ) ) {
	fs.mkdirSync( distDir, { recursive: true } );
}

const cssFiles = [
	'exstyle.css',

	'exstyle-box-margin.css',
	'exstyle-box-padding.css',
	'exstyle-color.css',
	'exstyle-layout.css',
	'exstyle-lists.css',
	'exstyle-sizing.css',
	'exstyle-tables.css',
	'exstyle-text.css',

	'exstyle-effects.css'
];

console.log( 'Processing CSS files...' );

cssFiles.forEach( fileName => {
	const filePath = path.join( srcDir, fileName );

	if ( ! fs.existsSync( filePath ) ) {
		console.warn( `File not found: ${ fileName }` );
		return;
	}

	const fileContent = fs.readFileSync( filePath );

	try {
		// 1. 元のファイルをそのまま dist にコピー
		fs.copyFileSync( filePath, path.join( distDir, fileName ) );

		// 2. Minify 処理
		const { code } = lightningcss.transform( {
			filename: fileName,
			code: fileContent,
			minify: true
		} );

		// 3. .min.css という名前で保存
		const minFileName = fileName.replace( '.css', '.min.css' );
		fs.writeFileSync( path.join( distDir, minFileName ), code );

		console.log( `? Processed: ${ fileName } (+ .min.css)` );
	} catch ( err ) {
		console.error( `? Error processing ${fileName}:`, err );
	}
} );

console.log('All tasks completed!');
