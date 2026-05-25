declare module '@xsa/js' {
	export default class XSA {
		constructor(options?: XSAOptions);
		init(): void;
		// 他に公開しているメソッドがあれば追加
		update(): void;
	}
	export interface XSAOptions {
		// 設定可能なオプションがあれば定義
		prefix?: string;
		debug?: boolean;
	}
}
