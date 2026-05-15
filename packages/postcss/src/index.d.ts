import { PluginCreator } from 'postcss';
interface Options {
	// 取得するHTMLのパス指定など、オプションがあれば定義
	include?: string | string[];
}
declare const creator: PluginCreator<Options>;
export default creator;
