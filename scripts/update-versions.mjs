import fs from 'fs';
import path from 'path';

// 1. 基準となる新バージョンを packages/js/package.json から取得
const jsPkgPath = path.resolve('packages/js/package.json');
const jsPkg = JSON.parse(fs.readFileSync(jsPkgPath, 'utf8'));
const newVersion = jsPkg.version;

// 2. ルートの package.json のバージョンを更新
const rootPkgPath = path.resolve('package.json');
const rootPkg = JSON.parse(fs.readFileSync(rootPkgPath, 'utf8'));
rootPkg.version = newVersion;
fs.writeFileSync(rootPkgPath, JSON.stringify(rootPkg, null, 2) + '\n');

// 3. packages/php/dist/XSA.php 内のバージョン定義を正規表現で更新
const phpPath = path.resolve('packages/php/dist/XSA.php');
if (fs.existsSync(phpPath)) {
	let phpContent = fs.readFileSync(phpPath, 'utf8');

	// 例: const VERSION = '1.0.0'; のような記述部分を置換
	phpContent = phpContent.replace(/(const\s+VERSION\s*=\s*['"])[^'"]+(['"];)/, `$1${newVersion}$2`);

	fs.writeFileSync(phpPath, phpContent);
}

console.log(`Synced root package.json and PHP to version ${newVersion}`);
