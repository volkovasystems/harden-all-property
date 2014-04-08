try{ var base = window; }catch( error ){ var base = exports; }
( function module( base ){
	define( "hardenAllProperty",
		[
			"hardenProperty"
		],
		function construct( ){
			var hardenAllProperty = function hardenAllProperty( reference, propertySet ){
				if( typeof reference != "object"
					|| typeof reference != "function" )
				{
					throw new Error( "invalid reference" );
				}

				if( typeof propertySet != "object" ){
					throw new Error( "invalid property set" );
				}

				var propertyNameList = Object.keys( propertySet );
				var propertyNameListLength = propertyNameList.length;
				
				if( !( propertyNameListLength > 0 ) ){
					throw new Error( "invalid property name list" );
				}

				var value;
				for( var index = 0; index < propertyNameListLength; index++ ){
					propertyName = propertyNameList[ index ];
					value = propertySet[ propertyName ];
					hardenProperty( reference, propertyName, value );
				}
			};

			base.hardenAllProperty = hardenAllProperty;	
		} );
} )( base )