var queries = {
	screen: "@media screen",
	print: "@media print",
	"vw-s": "@media (width>480px)",
	"vw-m": "@media (width>720px)",
	"vw-l": "@media (width>960px)",
	"vw-xl": "@media (width>1200px)",
	"cqi-s": "@container (inline-size>480px)",
	"cqi-m": "@container (inline-size>720px)",
	"cqi-l": "@container (inline-size>960px)",
	"cqi-xl": "@container (inline-size>1200px)"
};
var combinators = {
	d: "& *",
	c3: "&>*>*>*",
	c2: "&>*>*",
	c: "&>*"
};
var siblings = [
	"first-child",
	"last-child",
	"only-child",
	"nth-child",
	"nth-last-child"
];
var pseudo_classes = [
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
	"indeterminate",
	"valid",
	"invalid",
	"in-range",
	"out-of-range",
	"required",
	"optional",
	"user-valid",
	"user-invalid",
	"any-link",
	"link",
	"visited",
	"target",
	"scope",
	"playing",
	"paused",
	"seeking",
	"buffering",
	"stalled",
	"muted",
	"volume-locked",
	"empty",
	"hover",
	"active",
	"focus",
	"focus-visible",
	"focus-within",
	"target-current"
];
var pseudo_elements = [
	"first-line",
	"first-letter",
	"cue",
	"grammar-error",
	"selection",
	"spelling-error",
	"target-text",
	"before",
	"after",
	"column",
	"marker",
	"backdrop",
	"scroll-marker",
	"scroll-marker-group",
	"details-content",
	"checkmark",
	"file-selector-button",
	"picker-icon",
	"placeholder"
];
var property_styles = {
	"aspect-ratio": "aspect-ratio:var(/*@prop@*/);:not(_):not(_):where(&:is(iframe)){block-size:auto;}",
	background: "background:var(/*@prop@*/);background-attachment:scroll;",
	"background-attachment": "clip-path:inset(0);&::before{background:inherit;content:'';position:fixed;inset:0;z-index:-1;}&::after{content:none;}",
	columns: "columns:var(/*@prop@*/);:not(_):not(_):where(&){/*@column_style@*//*@layout_style@*/}",
	"column-count": "column-count:var(/*@prop@*/);:not(_):not(_):where(&){/*@column_style@*//*@layout_style@*/}",
	"column-width": "column-width:var(/*@prop@*/);:not(_):not(_):where(&){/*@column_style@*//*@layout_style@*/}",
	"flex-flow": "flex-flow:var(/*@prop@*/);:not(_):not(_):where(&){display:flex;/*@layout_style@*/}",
	"flex-direction": "flex-direction:var(/*@prop@*/);:not(_):not(_):where(&){display:flex;/*@layout_style@*/}",
	"flex-wrap": "flex-wrap:var(/*@prop@*/);:not(_):not(_):where(&){display:flex;/*@layout_style@*/}",
	"font-size": "font-size:var(/*@prop@*/);:not(_):not(_):where(&){/*@text_style@*/}",
	"font-style": "font-style:var(/*@prop@*/);:not(_):not(_):where(&){/*@text_style@*/}",
	"font-weight": "font-weight:var(/*@prop@*/);:not(_):not(_):where(&){/*@text_style@*/}",
	grid: "grid:var(/*@prop@*/);:not(_):not(_):where(&){display:grid;/*@layout_style@*/}",
	"grid-template": "grid-template:var(/*@prop@*/);:not(_):not(_):where(&){display:grid;/*@layout_style@*/}",
	"grid-template-rows": "grid-template-rows:var(/*@prop@*/);:not(_):not(_):where(&){display:grid;/*@layout_style@*/}",
	"grid-template-columns": "grid-template-columns:var(/*@prop@*/);:not(_):not(_):where(&){display:grid;/*@layout_style@*/}",
	"place-content": "place-content:var(/*@prop@*/);",
	"align-content": "align-content:var(/*@prop@*/);",
	"justify-content": "justify-content:var(/*@prop@*/);",
	"place-items": "place-items:var(/*@prop@*/);",
	"align-items": "align-items:var(/*@prop@*/);",
	"justify-items": "justify-items:var(/*@prop@*/);",
	"place-self": "place-self:var(/*@prop@*/);",
	"align-self": "align-self:var(/*@prop@*/);",
	"justify-self": "justify-self:var(/*@prop@*/);",
	"text-decoration": "text-decoration:var(/*@prop@*/);:not(_):not(_):where(&){/*@text_style@*/}",
	"text-emphasis": "text-emphasis:var(/*@prop@*/);:not(_):not(_):where(&){/*@text_style@*/}",
	"text-shadow": "text-shadow:var(/*@prop@*/);:not(_):not(_):where(&){/*@text_style@*/}",
	"text-stroke": "-webkit-text-stroke:var(/*@prop@*/);text-stroke:var(/*@prop@*/);:not(_):not(_):where(&){paint-order:stroke;/*@text_style@*/}",
	"x-text-marker": "text-decoration:underline 50% var(/*@prop@*/);:not(_):not(_):where(&){text-decoration-skip-ink:none;text-underline-offset:-50%;text-underline-position:under;/*@text_style@*/}"
};
var column_style = "&>*{break-inside:avoid-column;contain:layout;}&>:first-child{margin-block-start:0;}&>:last-child{margin-block-end:0;}";
var layout_style = "&:where(ol,ul,menu){list-style-position:inside;padding:0;}&:where(ul,menu){list-style-type:'';}&:where(dl)>:where(div)>*,&>*,&:where(li,dt,dd){margin:0;}";
var text_style = "background:none;color:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;text-decoration:none;";
var data = {
	queries: queries,
	combinators: combinators,
	siblings: siblings,
	pseudo_classes: pseudo_classes,
	pseudo_elements: pseudo_elements,
	property_styles: property_styles,
	column_style: column_style,
	layout_style: layout_style,
	text_style: text_style
};

/* The MIT License. Copyright 2026 Nobuo Nakayama @ Shimotsuki (https://github.com/nov-jp/). */
class XSACore {
	constructor() {
		// メディアクエリ・コンテナクエリ
		this._queries = data.queries;

		// 結合子
		this._combinators = data.combinators;

		// 兄弟擬似クラス
		this._siblings = data.siblings;

		// 子孫要素
		this._descendants = {};
		let dIndex = 1;
		for ( const [ k, v ] of Object.entries( this._combinators ) ) {
			this._descendants[ k ] = { val: v.slice( 1 ), index: dIndex++ };
			for ( const v2 of this._siblings ) {
				this._descendants[ `${ k }-${ v2.replace( /-child$/, '' ) }` ] = { val: `${ v.slice( 1 ) }:where(:${ v2 }${ v2.startsWith( 'nth' ) ? '(n)' : '' })`, index: dIndex++ };
			} // for
		} // for

		// 擬似クラス
		this._pClasses = {};
		const pCPatterns = [
			[ 'S-P', ':where(:S:P)' ],
			[ 'not-S-P', ':where(:not(:S:P))' ],
			[ 'S-P-s', ':where(:S:P~*)' ],
			[ 'not-S-P-s', ':where(:not(:S:P~*))' ],
			[ 'S-P-n', ':where(:S:P+*)' ],
			[ 'not-S-P-n', ':where(:not(:S:P+*))' ],
			[ 's-S-P', ':where(:has(~:S:P))' ],
			[ 'not-s-S-P', ':where(:not(:has(~:S:P)))' ],
			[ 'n-S-P', ':where(:has(+:S:P))' ],
			[ 'not-n-S-P', ':where(:not(:has(+:S:P)))' ],
			[ 'd-S-P', ':where(:has(:S:P))' ],
			[ 'not-d-S-P', ':where(:not(:has(:S:P)))' ],
			[ 'c-S-P', ':where(:has(>:S:P))' ],
			[ 'not-c-S-P', ':where(:not(:has(>:S:P)))' ],
			[ 'c2-S-P', ':where(:has(>*>:S:P))' ],
			[ 'not-c2-S-P', ':where(:not(:has(>*>:S:P)))' ],
			[ 'c3-S-P', ':where(:has(>*>*>:S:P))' ],
			[ 'not-c3-S-P', ':where(:not(:has(>*>*>:S:P)))' ]
		];
		const pCOffset = data.pseudo_classes.length * pCPatterns.length;
		let pCIndex = 1;
		for ( const [ k, v ] of pCPatterns ) {
			for ( const v2 of data.pseudo_classes ) {
				const key = k.replace( 'P', v2 );
				const val = v.replace( 'P', v2 );
				const index = pCIndex++;
				this._pClasses[ key.replace( 'S-', '' ) ] = { val: val.replace( ':S', '' ), index: index };
				this._pClasses[ key.replace( 'S', 'nth' ) ] = { val: val.replace( 'S', 'nth-child(n)' ), index: pCOffset + index };
				this._pClasses[ key.replace( 'S', 'nth-last' ) ] = { val: val.replace( 'S', 'nth-last-child(n)' ), index: pCOffset * 2 + index };
			} // for
		} // for

		// 擬似要素
		this._pElements = {};
		let pEIndex = 1;
		for ( const v of data.pseudo_elements ) {
			this._pElements[ v ] = { val: `::${ v }`, index: pEIndex++ };
		} // for

		// プロパティ
		this._properties = {};
		let propIndex = 1;
		for ( const [ k, v ] of Object.entries( data.property_styles ) ) {
			this._properties[ k ] = { val: v, index: propIndex++ };
		} // for

		this._columnStyle = data.column_style;
		this._layoutStyle = data.layout_style;
		this._textStyle = data.text_style;
	}

	// 解析
	_parseXSA( varName ) {
		const parts = varName.slice( 2, -2 ).split( '_' );

		const slot = {
			query: null,
			pCKey: '',
			pCVal: '',
			dKey: '',
			dVal: '',
			dPCKey: '',
			dPCVal: '',
			pEKey: '',
			pEVal: '',
			prop: parts.pop()
		};

		for ( const part of parts ) {
			// '(cqi|vw)-(s|m|l|xl)'
			if ( this._queries[ part ] ) {
				slot.query = this._queries[ part ]; // '(@container|@media) …'
				continue;
			}

			// '(d|c|c2|c3)-(first|last|only)'
			if ( this._descendants[ part ] ) {
				slot.dKey = part;
				slot.dVal = this._descendants[ part ].val; // '( *|(>*){1,3}):where(:(first|last|only)-child)'
				continue;
			}

			// '(before|after|…)'
			if ( this._pElements[ part ] ) {
				slot.pEKey = part;
				slot.pEVal = this._pElements[ part ].val;
				continue;
			}

			// '(d|c|c2|c3)-nth-(last-)?MAnPB(-of-S)?'
			// '(d|c|c2|c3)-of-S'
			// '(not-)?nth-(last-)?MAnPB(-of-S)?-is-PSEUDO-CLASS-(n|s)'
			// '(not-)?S-is-PSEUDO-CLASS-(n|s)'
			// '(not-)?(n|s|d|c|c2|c3)-nth-(last-)?MAnPB(-of-S)?-is-PSEUDO-CLASS'
			// '(not-)?(n|s)-S-is-PSEUDO-CLASS'
			// '(not-)?(d|c|c2|c3)-of-S-is-PSEUDO-CLASS'
			let nthPart = '';
			let n = 'n';
			if ( ! this._pClasses[ part ] && ! part.includes( '-child-' ) && ! part.includes( '-of-type-' ) ) {
				let s = ''; // 'name', 'name-name', 'ID-name', 'CLASS-name', 'PSEUDO-name', 'ATTR-name'
				let isDescendants = 0;
				const posNth = part.indexOf( 'nth-' );
				const posNthLast = part.indexOf( 'nth-last-' );
				const posOf = part.indexOf( '-of-' );
				const posIs = part.indexOf( '-is-' );
				if ( -1 === posIs ) { // '(d|c|c2|c3)-(nth-(last-)?MAnPB(-of-S)?|of-S)'
					isDescendants = 1;
					if ( -1 !== posNthLast ) { // '(d|c|c2|c3)-nth-last-MAnPB(-of-S)?'
						nthPart = part.slice( 0, posNthLast + 8 ); // '(d|c|c2|c3)-nth-last'
						n = part.slice( posNthLast + 9 ); // 'MAnPB(-of-S)?'
					} else if ( -1 !== posNth ) { // '(d|c|c2|c3)-nth-MAnPB(-of-S)?'
						nthPart = part.slice( 0, posNth + 3 ); // '(d|c|c2|c3)-nth'
						n = part.slice( posNth + 4 ); // 'MAnPB(-of-S)?'
					} else if ( -1 !== posOf ) { // '(d|c|c2|c3)-of-S'
						nthPart = part.slice( 0, posOf ) + '-nth'; // '(d|c|c2|c3)-nth'
					}
					if ( -1 !== posOf ) {
						s = part.slice( posOf + 4 ); // 'S'
					}
				} else {
					const hasNot = part.startsWith( 'not-' );
					const start = hasNot ? 4 : 0;
					const combinator = part.slice( start, part.indexOf( '-', start ) + 1 ); // '(n|s|d|c|c2|c3)-'
					if ( part.endsWith( '-n' ) || part.endsWith( '-s' ) ) { // '(not-)?(nth-(last-)?MAnPB(-of-S)?|S)-is-PSEUDO-CLASS-(n|s)'
						nthPart = ( hasNot ? 'not-' : '' ) + 'nth' + ( -1 !== posNthLast ? '-last' : '' ) + part.slice( posIs + 3 ); // (not-)?nth(-last)?-PSEUDO-CLASS-(n|s)
						if ( -1 !== posOf ) {
							s = part.slice( posOf + 4, posIs ); // '-of-S-is-'
						} else if ( -1 === posNth ) {
							s = part.slice( start, posIs ); // '(not-)?S-is-'
						}
					} else if ( 'n-' === combinator || 's-' === combinator ) { // '(not-)?(n|s)-(nth-(last-)?MAnPB(-of-S)?|S)-is-PSEUDO-CLASS'
						nthPart = ( hasNot ? 'not-' : '' ) + combinator + 'nth' + ( -1 !== posNthLast ? '-last' : '' ) + part.slice( posIs + 3 ); // (not-)?(n|s)-nth(-last)?-PSEUDO-CLASS
						if ( -1 !== posOf ) {
							s = part.slice( posOf + 4, posIs ); // '-of-S-is-'
						} else if ( -1 === posNth ) {
							s = part.slice( start + 2, posIs ); // '(not-)?(n|s)-S-is-'
						}
					} else if ( -1 !== posNth || -1 !== posOf ) { // '(not-)?(d|c|c2|c3)-(nth-(last-)?MAnPB(-of-S)?|of-S)-is-PSEUDO-CLASS'
						if ( -1 !== posNthLast ) {
							nthPart = part.slice( 0, posNthLast + 8 ); // '(not-)?(d|c|c2|c3)-nth-last'
						} else if ( -1 !== posNth ) {
							nthPart = part.slice( 0, posNth + 3 ); // '(not-)?(d|c|c2|c3)-nth'
						} else {
							nthPart = part.slice( 0, posOf ) + '-nth'; // '(not-)?(d|c|c2|c3)-nth'
						}
						nthPart += part.slice( posIs + 3 ); // '-PSEUDO-CLASS'
						if ( -1 !== posOf ) { // '-of-S-is-'
							s = part.slice( posOf + 4, posIs );
						}
					}
					if ( -1 !== posNthLast ) {
						n = part.slice( posNthLast + 9, ( -1 !== posOf ? posOf : posIs ) );
					} else if ( -1 !== posNth ) {
						n = part.slice( posNth + 4, ( -1 !== posOf ? posOf : posIs ) );
					}
				}
				if ( 'n' !== n ) {
					if ( n.includes( '-of-' ) ) {
						n = n.slice( 0, n.indexOf( '-of-' ) );
					}
					n = n.replace( 'M', '-' ).replace( 'P', '+' ); // 'MAnPB' => '-An+B'
				}
				if ( s && s.match( /^[A-Za-z0-9\-]+$/ ) ) {
					if ( s.startsWith( 'ID-' ) ) {
						s = `#${ s.slice( 3 ) }`;
					} else if ( s.startsWith( 'CLASS-' ) ) {
						s = `.${ s.slice( 6 ) }`;
					} else if ( s.startsWith( 'PSEUDO-' ) ) {
						s = `:${ s.slice( 7 ) }`;
					} else if ( s.startsWith( 'ATTR-' ) ) {
						s = s.slice( 5 );
						if ( ! s.includes( '-EQ-' ) ) {
							s = `[${ s }]`;
						} else {
							const sParts = s.split( '-EQ-' );
							let sName = sParts[ 0 ];
							let sOp = '';
							if ( sName.endsWith( '-A' ) ) { // Asterisk
								sOp = '*';
							} else if ( sName.endsWith( '-C' ) ) { // Caret
								sOp = '^';
							} else if ( sName.endsWith( '-D' ) ) { // Dollar
								sOp = '$';
							} else if ( sName.endsWith( '-T' ) ) { // Tilde
								sOp = '~';
							} else if ( sName.endsWith( '-P' ) ) { // Pipe
								sOp = '|';
							}
							if ( sOp ) {
								sName = sName.slice( 0, -2 );
							}
							s = `[${ sName }${ sOp }="${ sParts[ 1 ] }"]`;
						}
					} else if ( s.includes( '-' ) ) {
						s = `:is(${ s.replaceAll( '-', ',' ) })`;
					}
					n += ` of ${ s }`;
				}
				if ( isDescendants && nthPart && this._descendants[ nthPart ] ) {
					slot.dKey = nthPart;
					slot.dVal = this._descendants[ nthPart ].val.replace( '(n)', `(${ n })` );
					continue;
				}
			}

			// '((not-)?focus|(not-)?focus(-n|-s)|(not-)?(n-|s-)focus|(not-)?(d|c|c2|c3)-focus|…)'
			if ( this._pClasses[ part ] || ( nthPart && this._pClasses[ nthPart ] ) ) {
				const prefix = slot.dKey ? 'dPC' : 'pC';
				slot[ `${ prefix }Key` ] = nthPart || part;
				slot[ `${ prefix }Val` ] = nthPart ? this._pClasses[ nthPart ].val.replace( '(n)', `(${ n })` ) : this._pClasses[ part ].val;
				continue;
			}

			return null;
		} // for

		return { slot, varName };
	}

	// CSSコード の生成
	_generateCSSRule( parsedData ) {
		const { slot, varName } = parsedData;
		const body = this._properties[ slot.prop ] ? this._properties[ slot.prop ].val.replace( '/*@prop@*/', varName ).replace( '/*@layout_style@*/', this._layoutStyle ).replace( '/*@column_style@*/', this._columnStyle ).replace( '/*@text_style@*/', this._textStyle ) : `${ slot.prop }:var(${ varName });`;
		return {
			selector: `[style*="${ varName }:"]`,
			css: `&${ slot.pCVal }${ slot.dVal }${ slot.dPCVal }${ slot.pEVal }{${ body }}`
		};
	}

	// 処理の流れ
	_process( varName ) {
		const parsed = this._parseXSA( varName );
		if ( ! parsed ) {
			return null;
		}
		const rule = this._generateCSSRule( parsed );
		return { ...parsed, ...rule };
	}

	// 優先度計算
	_getPriorityArray( slot ) {
		return [
			( this._pClasses[ slot.pCKey ]?.index || 0 ),
			( this._descendants[ slot.dKey ]?.index || 1e3 ),
			( this._pClasses[ slot.dPCKey ]?.index || 0 ),
			( this._pElements[ slot.pEKey ]?.index || 0 ),
			( this._properties[ slot.prop ]?.index || 1e3 )
		];
	}

	// 並べ替え
	_comparePriority( a, b ) {
		const arrayA = this._getPriorityArray( a.slot );
		const arrayB = this._getPriorityArray( b.slot );

		for ( let i = 0; i < arrayA.length; i++ ) {
			if ( arrayA[ i ] !== arrayB[ i ] ) {
				return arrayA[ i ] - arrayB[ i ];
			}
		} // for

		if ( a.slot.prop.length !== b.slot.prop.length ) {
			return a.slot.prop.length - b.slot.prop.length;
		}

		return a.slot.prop.localeCompare( b.slot.prop );
	}
}

/*! The MIT License. Copyright 2026 Nobuo Nakayama @ Shimotsuki (https://github.com/nov-jp/). */
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

export { XSA as default };
//# sourceMappingURL=xsa.mjs.map
