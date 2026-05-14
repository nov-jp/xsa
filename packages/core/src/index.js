/*! The MIT License. Copyright 2026 Nobuo Nakayama (Shimotsuki/nov-jp). */
import data from './data.json';

export class ExStyleCore {
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
				this._descendants[ `${ k1 }-${ v2 }` ] = `${ v1 }:where(:${ v2 }${ ( v2.startsWith( 'nth-' ) ? '(n)' : '' ) })`.slice( 1 ); // 先頭の '&' を除去
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
		const parts = varName.replace( /^--|--$/g, '' ).split( '_' ); // '--cq-i-s_hover_c-nth-child-m2n-p-4-of-p_action_after_content--' => [ 'cq-i-s', 'hover', 'c-nth-child-m2n-p-4-of-p', 'action', 'after', 'content' ]

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
			if ( this._queries[ part ] ) { // cq-i-s
				slot.query = this._queries[ part ]; // @container …
				continue;
			}
			if ( this._descendants[ part ] ) {
				[ slot.dKey, slot.dVal ] = [ part, this._descendants[ part ] ];
				continue;
			}
			if ( ( part.startsWith( 'd' ) || part.startsWith( 'c' ) ) && part.includes( '-' ) ) {
				const c = part.slice( 0, part.indexOf( '-' ) ); // 'd', 'c', 'c2', 'c3'
				let nthPart = '';
				if ( part.includes( '-nth-' ) ) {
					if ( part.includes( '-child-' ) ) {
						nthPart = part.slice( 0, part.indexOf( '-child-' ) + 6 ); // 'c-nth-child', 'c-nth-last-child'
					} else if ( part.includes( '-of-type-' ) ) {
						nthPart = part.slice( 0, part.indexOf( '-of-type-' ) + 8 ); // 'c-nth-of-type', 'c-nth-last-of-type'
					}
				} else if ( part.startsWith( `${ c }-of-` ) ) { // 'c-of'
					nthPart = `${ c }-nth-child`;
				}
				if ( this._descendants[ nthPart ] ) {
					let n = 'n';
					let of = '';
					if ( part.startsWith( nthPart ) ) { // 'c-nth-child', 'c-nth-last-child', 'c-nth-of-type', 'c-nth-last-of-type'
						n = part.slice( nthPart.length + 1 ); // 'c-nth-child-m2n-p-4-of-p' => 'm2n-p-4-of-p'
						if ( n.includes( '-of-' ) ) {
							n = n.slice( 0, n.indexOf( '-of-' ) ); // 'm2n-p-4-of-p' => 'm2n-p-4'
						}
						n = n.replaceAll( '-', ' ' ).replaceAll( 'm', '-' ).replaceAll( 'p', '+' ); // 'm2n-p-4' => '-2n + 4'
					}
					if ( ! nthPart.endsWith( '-of-type' ) ) { // 'c-nth-child', 'c-nth-last-child', 'c-of'
						of = part.slice( part.indexOf( '-of-' ) + 4 ); // 'c-nth-child-m2n-p-4-of-p' => 'p'
						if ( of.startsWith( 'attr-' ) ) {
							of = `[${ of.slice( 5 ) }]`; // 'attr-value' => '[value]'
						} else if ( of.startsWith( 'pseudo-' ) ) {
							of = `:${ of.slice( 7 ) }`; // 'pseudo-value' => ':value'
						} else if ( of.includes( '-' ) ) {
							of = `:is(${ of.replaceAll( '-', ',' ) })`; // 'value1-value2' => ':is(value1,value2)'
						}
						n += ` of ${ of }`; // '-2n + 4 of p'
					}
					[ slot.dKey, slot.dVal ] = [ nthPart, this._descendants[ nthPart ].replace( '(n)', `(${ n })` ) ]; // '>*:where(:nth-child(n))' => '>*:where(:nth-child(-2n + 4 of p))'
					continue;
				}
			}
			if ( this._pElements[ part ] ) { // 'after'
				[ slot.pEKey, slot.pEVal ] = [ part, this._pElements[ part ] ]; // '::after'
				continue;
			}
			if ( this._pClasses[ part ] ) { // 'hover', 'action'
				if ( slot.dKey ) {
					[ slot.pC2Key, slot.pC2Val ] = [ part, this._pClasses[ part ] ]; // ':action'
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
			css: `&${ slot.pC1Val }${ slot.dVal }${ slot.pC2Val }${ slot.pEVal }{${ body }}` // '&:hover > *:nth-child(-2n + 4 of p):action::after'
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
