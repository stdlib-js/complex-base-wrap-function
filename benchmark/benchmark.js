/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var Complex64 = require( '@stdlib/complex-float32-ctor' );
var realf = require( '@stdlib/complex-float32-real' );
var imagf = require( '@stdlib/complex-float32-imag' );
var isnanf = require( '@stdlib/math-base-assert-is-nanf' );
var isFunction = require( '@stdlib/assert-is-function' );
var pkg = require( './../package.json' ).name;
var wrap = require( './../lib' );


// FUNCTIONS //

function nary() {
	var re;
	var im;
	var z;
	var i;

	re = 0.0;
	im = 0.0;
	for ( i = 0; i < arguments.length; i++ ) {
		z = arguments[ i ];
		re += realf( z );
		im += imagf( z );
	}
	return new Complex64( re, im );
}


// MAIN //

bench( pkg, function benchmark( b ) {
	var f;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		f = wrap( nary, i, Complex64 );
		if ( typeof f !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( !isFunction( f ) ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::wrapped_nullary', function benchmark( b ) {
	var f;
	var v;
	var i;

	f = wrap( nary, 0, Complex64 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = f();
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( isnanf( realf( v ) ) || isnanf( imagf( v ) ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::wrapped_unary,reals', function benchmark( b ) {
	var f;
	var v;
	var i;

	f = wrap( nary, 1, Complex64 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = f( 3.0 );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( isnanf( realf( v ) ) || isnanf( imagf( v ) ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::wrapped_unary,complex', function benchmark( b ) {
	var f;
	var v;
	var z;
	var i;

	f = wrap( nary, 1, Complex64 );
	z = new Complex64( 1.0, 1.0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = f( z );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( isnanf( realf( v ) ) || isnanf( imagf( v ) ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::wrapped_binary,reals', function benchmark( b ) {
	var f;
	var v;
	var i;

	f = wrap( nary, 2, Complex64 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = f( 3.0, 4.0 );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( isnanf( realf( v ) ) || isnanf( imagf( v ) ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::wrapped_binary,complex', function benchmark( b ) {
	var f;
	var v;
	var z;
	var i;

	f = wrap( nary, 2, Complex64 );
	z = new Complex64( 1.0, 1.0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = f( z, z );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( isnanf( realf( v ) ) || isnanf( imagf( v ) ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::wrapped_ternary,reals', function benchmark( b ) {
	var f;
	var v;
	var i;

	f = wrap( nary, 3, Complex64 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = f( 3.0, 4.0, 5.0 );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( isnanf( realf( v ) ) || isnanf( imagf( v ) ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::wrapped_ternary,complex', function benchmark( b ) {
	var f;
	var v;
	var z;
	var i;

	f = wrap( nary, 3, Complex64 );
	z = new Complex64( 1.0, 1.0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = f( z, z, z );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( isnanf( realf( v ) ) || isnanf( imagf( v ) ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::wrapped_quaternary,reals', function benchmark( b ) {
	var f;
	var v;
	var i;

	f = wrap( nary, 4, Complex64 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = f( 3.0, 4.0, 5.0, 6.0 );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( isnanf( realf( v ) ) || isnanf( imagf( v ) ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::wrapped_quaternary,complex', function benchmark( b ) {
	var f;
	var v;
	var z;
	var i;

	f = wrap( nary, 4, Complex64 );
	z = new Complex64( 1.0, 1.0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = f( z, z, z, z );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( isnanf( realf( v ) ) || isnanf( imagf( v ) ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::wrapped_quinary,reals', function benchmark( b ) {
	var f;
	var v;
	var i;

	f = wrap( nary, 5, Complex64 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = f( 3.0, 4.0, 5.0, 6.0, 7.0 );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( isnanf( realf( v ) ) || isnanf( imagf( v ) ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::wrapped_quinary,complex', function benchmark( b ) {
	var f;
	var v;
	var z;
	var i;

	f = wrap( nary, 5, Complex64 );
	z = new Complex64( 1.0, 1.0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = f( z, z, z, z, z );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( isnanf( realf( v ) ) || isnanf( imagf( v ) ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::wrapped_nary,reals', function benchmark( b ) {
	var f;
	var v;
	var i;

	f = wrap( nary, 6, Complex64 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = f( 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( isnanf( realf( v ) ) || isnanf( imagf( v ) ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::wrapped_nary,complex', function benchmark( b ) {
	var f;
	var v;
	var z;
	var i;

	f = wrap( nary, 6, Complex64 );
	z = new Complex64( 1.0, 1.0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = f( z, z, z, z, z, z );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( isnanf( realf( v ) ) || isnanf( imagf( v ) ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
