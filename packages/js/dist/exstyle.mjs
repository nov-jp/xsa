var queries = {
	"cq-i-s": "@container (inline-size>480px) and (inline-size>30rem)",
	"cq-i-m": "@container (inline-size>720px) and (inline-size>45rem)",
	"cq-i-l": "@container (inline-size>960px) and (inline-size>60rem)",
	"cq-i-xl": "@container (inline-size>1200px) and (inline-size>75rem)",
	"mq-w-s": "@media (width>480px) and (width>30rem)",
	"mq-w-m": "@media (width>720px) and (width>45rem)",
	"mq-w-l": "@media (width>960px) and (width>60rem)",
	"mq-w-xl": "@media (width>1200px) and (width>75rem)"
};
var combinators = {
	d: "& *",
	c3: "&>*>*>*",
	c2: "&>*>*",
	c: "&>*"
};
var tree_structures = [
	"empty",
	"first-child",
	"last-child",
	"only-child",
	"nth-child",
	"nth-last-child"
];
var pseudo_classes = [
	"any-link",
	"link",
	"visited",
	"target",
	"hover",
	"active",
	"focus",
	"focus-visible",
	"focus-within",
	"open",
	"popover-open",
	"modal",
	"fullscreen",
	"picture-in-picture",
	"enabled",
	"disabled",
	"read-only",
	"read-write",
	"placeholder-shown",
	"autofill",
	"default",
	"checked",
	"unchecked",
	"indeterminate",
	"valid",
	"invalid",
	"in-range",
	"out-of-range",
	"required",
	"optional",
	"user-valid",
	"user-invalid"
];
var pseudo_elements = [
	"backdrop",
	"first-line",
	"first-letter",
	"selection",
	"search-text",
	"target-text",
	"spelling-error",
	"grammar-error",
	"before",
	"after",
	"file-selector-button",
	"details-content"
];
var property_styles = {
	"aspect-ratio": "&{aspect-ratio:var(/*@prop@*/);}:not(_):not(_):where(&:is(iframe)){block-size:auto;}",
	background: "&{background:var(/*@prop@*/);background-attachment:scroll;}",
	"background-attachment": "&{clip-path:inset(0);}&::before{background:inherit;content:'';position:fixed;inset:0;z-index:-1;}&::after{content:none;}",
	columns: "&{columns:var(/*@prop@*/);}:not(_):not(_):where(&){/*@column_style@*//*@layout_style@*/}",
	"column-count": "&{column-count:var(/*@prop@*/);}:not(_):not(_):where(&){/*@column_style@*//*@layout_style@*/}",
	"column-width": "&{column-width:var(/*@prop@*/);}:not(_):not(_):where(&){/*@column_style@*//*@layout_style@*/}",
	"flex-flow": "&{flex-flow:var(/*@prop@*/);}:not(_):not(_):where(&){display:flex;/*@layout_style@*/}",
	"flex-direction": "&{flex-direction:var(/*@prop@*/);}:not(_):not(_):where(&){display:flex;/*@layout_style@*/}",
	"flex-wrap": "&{flex-wrap:var(/*@prop@*/);}:not(_):not(_):where(&){display:flex;/*@layout_style@*/}",
	"font-size": "&{font-size:var(/*@prop@*/);}:not(_):not(_):where(&){/*@text_style@*/}",
	"font-style": "&{font-style:var(/*@prop@*/);}:not(_):not(_):where(&){/*@text_style@*/}",
	"font-weight": "&{font-weight:var(/*@prop@*/);}:not(_):not(_):where(&){/*@text_style@*/}",
	grid: "&{grid:var(/*@prop@*/);}:not(_):not(_):where(&){display:grid;/*@layout_style@*/}",
	"grid-template": "&{grid-template:var(/*@prop@*/);}:not(_):not(_):where(&){display:grid;/*@layout_style@*/}",
	"grid-template-rows": "&{grid-template-rows:var(/*@prop@*/);}:not(_):not(_):where(&){display:grid;/*@layout_style@*/}",
	"grid-template-columns": "&{grid-template-columns:var(/*@prop@*/);}:not(_):not(_):where(&){display:grid;/*@layout_style@*/}",
	"place-content": "&{place-content:var(/*@prop@*/);}",
	"align-content": "&{align-content:var(/*@prop@*/);}",
	"justify-content": "&{justify-content:var(/*@prop@*/);}",
	"place-items": "&{place-items:var(/*@prop@*/);}",
	"align-items": "&{align-items:var(/*@prop@*/);}",
	"justify-items": "&{justify-items:var(/*@prop@*/);}",
	"place-self": "&{place-self:var(/*@prop@*/);}",
	"align-self": "&{align-self:var(/*@prop@*/);}",
	"justify-self": "&{justify-self:var(/*@prop@*/);}",
	"text-decoration": "&{text-decoration:var(/*@prop@*/);}:not(_):not(_):where(&){/*@text_style@*/}",
	"text-emphasis": "&{text-emphasis:var(/*@prop@*/);}:not(_):not(_):where(&){/*@text_style@*/}",
	"text-shadow": "&{text-shadow:var(/*@prop@*/);}:not(_):not(_):where(&){/*@text_style@*/}",
	"text-stroke": "&{-webkit-text-stroke:var(/*@prop@*/);text-stroke:var(/*@prop@*/);}:not(_):not(_):where(&){paint-order:stroke;/*@text_style@*/}",
	"x-text-marker": "&{text-decoration:underline 50% var(/*@prop@*/);}:not(_):not(_):where(&){text-decoration-skip-ink:none;text-underline-offset:-50%;text-underline-position:under;/*@text_style@*/}"
};
var column_style = "&>*{break-inside:avoid-column;contain:layout;}&>:first-child{margin-block-start:0;}&>:last-child{margin-block-end:0;}";
var layout_style = "&:where(ol,ul,menu){list-style-position:inside;padding:0;}&:where(ul,menu){list-style-type:'';}&:where(dl)>:where(div)>*,&>*,&:where(li,dt,dd){margin:0;}";
var text_style = "&{background:none;color:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;text-decoration:none;}";
var data = {
	queries: queries,
	combinators: combinators,
	tree_structures: tree_structures,
	pseudo_classes: pseudo_classes,
	pseudo_elements: pseudo_elements,
	property_styles: property_styles,
	column_style: column_style,
	layout_style: layout_style,
	text_style: text_style
};

/* The MIT License. Copyright 2026 Nobuo Nakayama (Shimotsuki/nov-jp). */
class ExStyleCore {
	constructor() {
		// メディアクエリ・コンテナクエリ
		this._queries = data.queries;

		// 結合子
		this._combinators = data.combinators;

		// ツリー構造
		this._tree_structures = data.tree_structures;

		// 子孫要素
		this._descendants = {};
		for ( const [ k1, v1 ] of Object.entries( this._combinators ) ) {
			this._descendants[ k1 ] = v1.slice( 1 ); // 先頭の '&' を除去
			for ( const v2 of this._tree_structures ) {
				this._descendants[ `${ k1 }-${ v2 }` ] = `${ v1 }:where(:${ v2 }${ ( v2.startsWith( 'nth' ) ? '(n)' : '' ) })`.slice( 1 ); // 先頭の '&' を除去
			} // for
		} // for

		// 擬似クラス
		this._pClasses = {};
		for ( const v of data.pseudo_classes ) {
			this._pClasses[ v ] = `:where(:${ v })`;
			this._pClasses[ `not-${ v }` ] = `:where(:not(:${ v }))`;
			this._pClasses[ `s-${ v }` ] = `:where(:has(~:${ v }))`;
			this._pClasses[ `not-s-${ v }` ] = `:where(:not(:has(~:${ v })))`;
			this._pClasses[ `${ v }-s` ] = `:where(:${ v }~*)`;
			this._pClasses[ `not-${ v }-s` ] = `:where(:not(:${ v }~*))`;
			this._pClasses[ `n-${ v }` ] = `:where(:has(+:${ v }))`;
			this._pClasses[ `not-n-${ v }` ] = `:where(:not(:has(+:${ v })))`;
			this._pClasses[ `${ v }-n` ] = `:where(:${ v }+*)`;
			this._pClasses[ `not-${ v }-n` ] = `:where(:not(:${ v }+*))`;
			this._pClasses[ `d-${ v }` ] = `:where(:has(:${ v }))`;
			this._pClasses[ `not-d-${ v }` ] = `:where(:not(:has(:${ v })))`;
			this._pClasses[ `c-${ v }` ] = `:where(:has(>:${ v }))`;
			this._pClasses[ `not-c-${ v }` ] = `:where(:not(:has(>:${ v })))`;
			this._pClasses[ `c2-${ v }` ] = `:where(:has(>*>:${ v }))`;
			this._pClasses[ `not-c2-${ v }` ] = `:where(:not(:has(>*>:${ v })))`;
			this._pClasses[ `c3-${ v }` ] = `:where(:has(>*>*>:${ v }))`;
			this._pClasses[ `not-c3-${ v }` ] = `:where(:not(:has(>*>*>:${ v })))`;
		} // for

		// 擬似要素
		this._pElements = {};
		for ( const v of data.pseudo_elements ) {
			this._pElements[ v ] = `::${ v }`;
		} // for

		// プロパティ
		this._properties = data.property_styles;
		this._columnStyle = data.column_style;
		this._layoutStyle = data.layout_style;
		this._textStyle = data.text_style;
	}

	// 解析
	_parseExStyle( varName ) {
		const parts = varName.replace( /^--|--$/g, '' ).split( '_' ); // '--cq-i-s_hover_c-nth-m2np4-of-p_active_after_content--' => [ 'cq-i-s', 'hover', 'c-nth-m2np4-of-p', 'active', 'after', 'content' ]

		const slot = {
			query: null,
			pC1Key: '',
			pC1Val: '',
			dKey: '',
			dVal: '',
			pC2Key: '',
			pC2Val: '',
			pEKey: '',
			pEVal: '',
			prop: parts.pop() // 'content'
		};

		for ( const part of parts ) {
			if ( this._queries[ part ] ) { // '(cq-i|mq-w)-(s|m|l|xl)'
				slot.query = this._queries[ part ]; // '@container …'
				continue;
			}
			if ( this._descendants[ part ] ) { // '(d|c|c2|c3)(-empty)?'
				[ slot.dKey, slot.dVal ] = [ part, this._descendants[ part ] ]; // '( *|(>*){1,3})(:empty)?'
				continue;
			}
			if ( this._descendants[ `${ part }-child` ] ) { // '(d|c|c2|c3)-(first|last|only)'
				[ slot.dKey, slot.dVal ] = [ `${ part }-child`, this._descendants[ `${ part }-child` ] ]; // '( *|(>*){1,3}):(first|last|only)-child'
				continue;
			}
			if ( ( part.includes( '-nth-' ) || part.includes( '-of-' ) ) && ! part.includes( '-child-' ) && ! part.includes( '-of-type-' ) ) {
				let nthPart = '';
				let n = 'n';
				const c = part.slice( 0, part.indexOf( '-' ) ); // '(d|c|c2|c3)'
				if ( part.startsWith( `${ c }-nth-last-` ) ) { // '(d|c|c2|c3)-nth-last-mAnpB(-of-S)?'
					nthPart = `${ c }-nth-last-child`;
					n = part.slice( part.indexOf( '-last-' ) + 6 ); // 'mAnpB(-of-S)?'
				} else if ( part.startsWith( `${ c }-nth-` ) ) { // '(d|c|c2|c3)-nth-mAnpB(-of-S)?'
					nthPart = `${ c }-nth-child`;
					n = part.slice( part.indexOf( '-nth-' ) + 5 ); // 'mAnpB(-of-S)?'
				} else if ( part.startsWith( `${ c }-of-` ) ) { // '(d|c|c2|c3)-of-S'
					nthPart = `${ c }-nth-child`;
				}
				if ( nthPart && this._descendants[ nthPart ] ) {
					if ( 'n' !== n ) {
						if ( n.includes( '-of-' ) ) {
							n = n.slice( 0, n.indexOf( '-of-' ) ); // 'mAnpB-of-S' => 'mAnpB'
						}
						n = n.replace( 'm', '-' ).replace( 'p', '+' ); // 'mAnpB' => '-An+B'
					}
					if ( part.includes( '-of-' ) ) {
						let s = part.slice( part.indexOf( '-of-' ) + 4 ); // '(d|c|c2|c3)-(nth(-last)?-mAnpB-of-S|of-S)' => 'S'
						if ( s.startsWith( 'attr-' ) ) {
							s = `[${ s.slice( 5 ) }]`; // 'attr-NAME' => '[NAME]'
						} else if ( s.startsWith( 'pseudo-' ) ) {
							s = `:${ s.slice( 7 ) }`; // 'pseudo-NAME' => ':NAME'
						} else if ( s.includes( '-' ) ) {
							s = `:is(${ s.replaceAll( '-', ',' ) })`; // 'TYPE-TYPE' => ':is(TYPE,TYPE)'
						}
						n += ` of ${ s }`; // '-An+B of S'
					}
					[ slot.dKey, slot.dVal ] = [ nthPart, this._descendants[ nthPart ].replace( '(n)', `(${ n })` ) ]; // '>*:where(:nth-child(-2n+4 of p))'
					continue;
				}
			}
			if ( this._pElements[ part ] ) { // '(before|after|…)'
				[ slot.pEKey, slot.pEVal ] = [ part, this._pElements[ part ] ]; // '::after'
				continue;
			}
			if ( this._pClasses[ part ] ) { // '(hover|active|…)', 
				if ( slot.dKey ) {
					[ slot.pC2Key, slot.pC2Val ] = [ part, this._pClasses[ part ] ]; // ':active'
				} else {
					[ slot.pC1Key, slot.pC1Val ] = [ part, this._pClasses[ part ] ]; // ':hover'
				}
				continue;
			}
			return null;
		} // for

		return { slot, varName };
	}

	// CSSコード の生成
	_generateCSSRule( parsedData ) {
		const { slot, varName } = parsedData;
		const body = this._properties[ slot.prop ] ? this._properties[ slot.prop ].replace( '/*@prop@*/', varName ).replace( '/*@layout_style@*/', this._layoutStyle ).replace( '/*@column_style@*/', this._columnStyle ).replace( '/*@text_style@*/', this._textStyle ) : `${ slot.prop }:var(${ varName });`;
		return {
			selector: `[style*="${ varName }:"]`,
			css: `&${ slot.pC1Val }${ slot.dVal }${ slot.pC2Val }${ slot.pEVal }{${ body }}` // '&:hover>*:nth-child(-2n+4 of p):active::after{content:var(--cq-i-s_hover_c-nth-m2np4-of-p_active_after_content--);}'
		};
	}

	// 処理の流れ
	_process( varName ) {
		const parsed = this._parseExStyle( varName );
		if ( ! parsed ) {
			return null;
		}
		const rule = this._generateCSSRule( parsed );
		return { ...parsed, ...rule };
	}

	// 優先度計算
	_getPriorityArray( slot ) {
		return [
			Object.keys( this._pClasses ).indexOf( slot.pC1Key ) + 1,
			( Object.keys( this._descendants ).indexOf( slot.dKey ) + 1 || 1e3 ),
			Object.keys( this._pClasses ).indexOf( slot.pC2Key ) + 1,
			Object.keys( this._pElements ).indexOf( slot.pEKey ) + 1,
			( Object.keys( this._properties ).indexOf( slot.prop ) + 1 || 1e3 )
		];
	}

	// 並べ替え
	_comparePriority( a, b ) {
		const arrayA = this._getPriorityArray( a.slot );
		const arrayB = this._getPriorityArray( b.slot );

		// 配列の各要素を順番に比較
		for ( let i = 0; i < arrayA.length; i++ ) {
			if ( arrayA[ i ] !== arrayB[ i ] ) {
				return arrayA[ i ] - arrayB[ i ];
			}
		} // for

		// 優先度が完全に同じなら、ショートハンドを優先して文字数の短い順
		if ( a.slot.prop.length !== b.slot.prop.length ) {
			return a.slot.prop.length - b.slot.prop.length;
		}

		// 文字数が同じならアルファベット順
		return a.slot.prop.localeCompare( b.slot.prop );
	}
}

/*! The MIT License. Copyright 2026 Nobuo Nakayama (Shimotsuki/nov-jp). */

class ExStyle extends ExStyleCore {
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
			const matches = style.match( /--[a-z0-9-_]+--(?=:)/g );
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
		const xs = new ExStyle();
		xs.update();
		xs.observe();
	} );
}

export { ExStyle as default };
//# sourceMappingURL=exstyle.mjs.map
