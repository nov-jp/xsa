declare module '@exstyle/js' {
	export default class ExStyle {
		constructor(options?: ExStyleOptions);
		init(): void;
		// 他に公開しているメソッドがあれば追加
		update(): void;
	}
	export interface ExStyleOptions {
		// 設定可能なオプションがあれば定義
		prefix?: string;
		debug?: boolean;
	}
}
