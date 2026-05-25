/* The MIT License. Copyright 2026 Nobuo Nakayama @ Shimotsuki (https://github.com/nov-jp/). */
import data from './data.json';
export class XSACore {
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
			[ 'S-is-P', ':where(:S:P)' ],
			[ 'S-not-P', ':where(:S:not(:P))' ],
			[ 'S-is-P-s', ':where(:S:P~*)' ],
			[ 'S-not-P-s', ':where(:S:not(:P)~*)' ],
			[ 'S-is-P-n', ':where(:S:P+*)' ],
			[ 'S-not-P-n', ':where(:S:not(:P)+*)' ],
			[ 's-S-is-P', ':where(:has(~:S:P))' ],
			[ 's-S-not-P', ':where(:has(~:S:not(:P)))' ],
			[ 'n-S-is-P', ':where(:has(+:S:P))' ],
			[ 'n-S-not-P', ':where(:has(+:S:not(:P)))' ],
			[ 'd-S-is-P', ':where(:has(:S:P))' ],
			[ 'd-S-not-P', ':where(:has(:S:not(:P)))' ],
			[ 'c-S-is-P', ':where(:has(>:S:P))' ],
			[ 'c-S-not-P', ':where(:has(>:S:not(:P)))' ],
			[ 'c2-S-is-P', ':where(:has(>*>:S:P))' ],
			[ 'c2-S-not-P', ':where(:has(>*>:S:not(:P)))' ],
			[ 'c3-S-is-P', ':where(:has(>*>*>:S:P))' ],
			[ 'c3-S-not-P', ':where(:has(>*>*>:S:not(:P)))' ]
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

			// '(d|c|c2|c3)-(nth-(last-)?mAnpB(-of-S)?|of-S)'
			// '(nth-(last-)?mAnpB-of-S|S)-(is|not)-PSEUDO-CLASS-(n|s)'
			// '(n|s)-(nth-(last-)?mAnpB-of-S|S)-(is|not)-PSEUDO-CLASS'
			// '(d|c|c2|c3)-(nth-(last-)?mAnpB(-of-S)?|of-S)-(is|not)-PSEUDO-CLASS'
			let nthPart = '';
			let n = 'n';
			if ( ! this._pClasses[ part ] && ! this._pClasses[ `is-${ part }` ] && ! part.includes( '-child-' ) && ! part.includes( '-of-type-' ) ) {
				let s = ''; // 'name', 'name-name', 'id-name', 'class-name', 'attr-name', 'pseudo-name'
				let isDescendants = 0;
				const posNth = part.indexOf( 'nth-' );
				const posNthLast = part.indexOf( 'nth-last-' );
				const posOf = part.indexOf( '-of-' );
				const posFunc = part.includes( '-is-' ) ? part.indexOf( '-is-' ) : part.indexOf( '-not-' );
				if ( -1 !== posFunc ) {
					if ( part.endsWith( '-n' ) || part.endsWith( '-s' ) ) {// '(nth-(last-)?mAnpB-of-S|S)-(is|not)-PSEUDO-CLASS-(n|s)'
						nthPart = ( -1 !== posNthLast ? 'nth-last' : 'nth' ) + part.slice( posFunc );
						s = -1 !== posOf ? part.slice( posOf + 4, posFunc ) : part.slice( 0, posFunc );
					} else if ( part.startsWith( 'n-' ) || part.startsWith( 's-' ) ) { // '(n|s)-(nth-(last-)?mAnpB-of-S|S)-(is|not)-PSEUDO-CLASS'
						nthPart = part.slice( 0, 2 ) + ( -1 !== posNthLast ? 'nth-last' : 'nth' ) + part.slice( posFunc );
						s = -1 !== posOf ? part.slice( posOf + 4, posFunc ) : part.slice( 2, posFunc );
					} else if ( -1 !== posNth || -1 !== posOf ) { // '(d|c|c2|c3)-(nth-(last-)?mAnpB(-of-S)?|of-S)-(is|not)-PSEUDO-CLASS'
						if ( -1 !== posNthLast ) {
							nthPart = part.slice( 0, posNthLast + 8 );
						} else if ( -1 !== posNth ) {
							nthPart = part.slice( 0, posNth + 3 );
						} else {
							nthPart = part.slice( 0, posOf ) + '-nth';
						}
						nthPart += part.slice( posFunc );
						if ( -1 !== posOf ) {
							s = part.slice( posOf + 4, posFunc );
						}
					}
					if ( -1 !== posNth ) {
						n = -1 !== posNthLast ? part.slice( posNthLast + 9, posOf ) : part.slice( posNth + 4, posOf );
					}
				} else {
					isDescendants = 1;
					if ( -1 !== posNthLast ) { // '(d|c|c2|c3)-nth-last-mAnpB(-of-S)?'
						nthPart = part.slice( 0, posNthLast + 8 ); // '(d|c|c2|c3)-nth-last'
						n = part.slice( posNthLast + 9 );
					} else if ( -1 !== posNth ) { // '(d|c|c2|c3)-nth-mAnpB(-of-S)?'
						nthPart = part.slice( 0, posNth + 3 ); // '(d|c|c2|c3)-nth'
						n = part.slice( posNth + 4 );
					} else if ( -1 !== posOf ) { // '(d|c|c2|c3)-of-S'
						nthPart = part.slice( 0, posOf ) + '-nth'; // '(d|c|c2|c3)-nth'
					}
					if ( -1 !== posOf ) {
						s = part.slice( posOf + 4 );
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
							s = `[${ sName }${ sOp }="${ sParts[ 1 ] }"]`
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

			// '((not-)?focus|(not-)?focus(-n|-s)|(n-|s-)(not-)?focus|(d|c|c2|c3)-(not-)?focus|…)'
			if ( this._pClasses[ part ] || this._pClasses[ `is-${ part }` ] || ( nthPart && this._pClasses[ nthPart ] ) ) {
				const prefix = slot.dKey ? 'dPC' : 'pC';
				const nonNthPart = this._pClasses[ `is-${ part }` ] ? `is-${ part }` : part;
				slot[ `${ prefix }Key` ] = nthPart || nonNthPart;
				slot[ `${ prefix }Val` ] = nthPart ? this._pClasses[ nthPart ].val.replace( '(n)', `(${ n })` ) : this._pClasses[ nonNthPart ].val;
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
