/*! The MIT License. Copyright 2026 Nobuo Nakayama @ Shimotsuki (https://github.com/nov-jp/). */
import { XSACore } from '@nov-xsa/core';
class XSA extends XSACore {
	constructor() {
		super(); // Coreの初期化
		this._style = null; // 生成したstyle要素
		this._queue = new Set(); // 更新対象の要素キュー
		this._frameId = null; // requestAnimationFrame管理用
		this._cacheMap = new Map(); // 解析済みプロパティの永続キャッシュ
	}

	// DOM から差分を抽出してキャッシュを更新し、最終的な CSS文字列 を生成
	generate( targets = null ) {
		let isUpdated = false;

		const elements = targets || document.querySelectorAll( '[style*="--:"]' );

		elements.forEach( e => {
			const style = e.getAttribute( 'style' );
			if ( ! style ) {
				return;
			}
			const matches = style.match( /--[A-Za-z0-9_\-]+--(?=:)/g );
			if ( matches ) {
				matches.forEach( varName => {
					if ( this._cacheMap.has( varName ) ) {
						return;
					}
					const data = this._process( varName );
					if ( data ) {
						this._cacheMap.set( varName, data );
						isUpdated = true;
					}
				} );
			}
		} );

		// 新規プロパティが発見されなかった場合、既存のキャッシュから再生成する必要があるか検討
		// 初回実行時、または新規プロパティ発見時のみ CSS文字列 を構築
		if ( ! isUpdated && null !== targets ) {
			return null; // 更新不要
		}

		// 優先度に基づいてソート
		const sortedList = Array.from( this._cacheMap.values() ).sort( ( a, b ) => this._comparePriority( a, b ) );

		// CSS文字列 の組み立て
		let output = '';

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

		// 定義順にクエリを書き出し
		Object.values( this._queries ).forEach( queryText => {
			if ( queryGroups[ queryText ] ) {
				output += `${ queryText }{\n${ queryGroups[ queryText ] }}\n`;
			}
		} );

		return output;
	}

	// スタイルを生成して、head要素内 に反映
	update( targets = null ) {
		const css = this.generate( targets );

		// 更新不要の場合は何もしない
		if ( null === css && null !== targets ) {
			return;
		}

		// style要素の準備
		if ( ! this._style ) {
			this._style = document.createElement( 'style' );
			document.head.querySelector( 'script:first-of-type' ).before( this._style );
		}

		if ( css ) {
			this._style.textContent = css;
		}
	}

	// DOM の変化を監視し、必要に応じて update を実行
	observe() {
		const observer = new MutationObserver( ( mutations ) => {
			mutations.forEach( mutation => {
				// style属性 の変化、または要素の追加をチェック
				if ( 'attributes' === mutation.type ) {
					if ( mutation.target.getAttribute( 'style' )?.includes( '--:' ) ) {
						this._queue.add( mutation.target );
					}
				} else if ( 'childList' === mutation.type ) {
					mutation.addedNodes.forEach( node => {
						if ( 1 !== node.nodeType ) {
							return;
						}
						if ( node.getAttribute( 'style' )?.includes( '--:' ) ) {
							this._queue.add( node );
						}
						node.querySelectorAll( '[style*="--:"]' ).forEach( e => this._queue.add( e ) );
					} );
				}
			} );

			// キューがある場合、次の描画タイミングで1回だけ実行
			if ( this._queue.size > 0 && ! this._frameId ) {
				this._frameId = requestAnimationFrame( () => {
					// キューの中身を targets として渡す
					this.update( Array.from( this._queue ) );
					this._queue.clear();
					this._frameId = null;
				} );
			}
		} );

		observer.observe( document.body, {
			childList: true,
			subtree: true,
			attributes: true,
			attributeFilter: [ 'style' ]
		} );
	}
}

// 自動初期化
if ( 'undefined' !== typeof window ) {
	window.addEventListener( 'DOMContentLoaded', () => {
		const xsa = new XSA();
		xsa.update();
		xsa.observe();
	} );
}

export default XSA;
