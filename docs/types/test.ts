/*
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

/// <reference types="@stdlib/types"/>

import { ComplexLike } from '@stdlib/types/complex';
import Complex64 = require( '@stdlib/complex-float32-ctor' );
import wrap = require( './index' );

/**
* Nullary function.
*
* @returns result
*/
function nullary(): ComplexLike {
	return new Complex64( 1.0, 1.0 );
}

/**
* Unary function.
*
* @param x - input value
* @returns result
*/
function unary( x: ComplexLike ): ComplexLike {
	const re: number = x.re;
	const im: number = x.im;
	return new Complex64( re, im );
}

/**
* Binary function.
*
* @param x - input value
* @param y - input value
* @returns result
*/
function binary( x: ComplexLike, y: ComplexLike ): ComplexLike {
	const re: number = x.re + y.re;
	const im: number = x.im + y.im;
	return new Complex64( re, im );
}

/**
* Ternary function.
*
* @param x - input value
* @param y - input value
* @param z - input value
* @returns result
*/
function ternary( x: ComplexLike, y: ComplexLike, z: ComplexLike ): ComplexLike {
	const re: number = x.re + y.re + z.re;
	const im: number = x.im + y.im + z.im;
	return new Complex64( re, im );
}

/**
* Quaternary function.
*
* @param x - input value
* @param y - input value
* @param z - input value
* @param w - input value
* @returns result
*/
function quaternary( x: ComplexLike, y: ComplexLike, z: ComplexLike, w: ComplexLike ): ComplexLike {
	const re: number = x.re + y.re + z.re + w.re;
	const im: number = x.im + y.im + z.im + w.im;
	return new Complex64( re, im );
}

/**
* Quinary function.
*
* @param x - input value
* @param y - input value
* @param z - input value
* @param w - input value
* @param v - input value
* @returns result
*/
function quinary( x: ComplexLike, y: ComplexLike, z: ComplexLike, w: ComplexLike, v: ComplexLike ): ComplexLike {
	const re: number = x.re + y.re + z.re + w.re + v.re;
	const im: number = x.im + y.im + z.im + w.im + v.im;
	return new Complex64( re, im );
}

/**
* N-ary function.
*
* @param x - input value
* @param y - input value
* @param z - input value
* @param w - input value
* @param v - input value
* @param t - input value
* @returns result
*/
function nary( x: ComplexLike, y: ComplexLike, z: ComplexLike, w: ComplexLike, v: ComplexLike, t: ComplexLike ): ComplexLike {
	const re: number = x.re + y.re + z.re + w.re + v.re + t.re;
	const im: number = x.im + y.im + z.im + w.im + v.im + t.im;
	return new Complex64( re, im );
}


// TESTS //

// The function returns a wrapped function...
{
	wrap( nullary, 0, Complex64 ); // $ExpectType Nullary
	wrap( unary, 1, Complex64 ); // $ExpectType WrappedUnary
	wrap( binary, 2, Complex64 ); // $ExpectType WrappedBinary
	wrap( ternary, 3, Complex64 ); // $ExpectType WrappedTernary
	wrap( quaternary, 4, Complex64 ); // $ExpectType WrappedQuaternary
	wrap( quinary, 5, Complex64 ); // $ExpectType WrappedQuinary
	wrap( nary, 6, Complex64 ); // $ExpectType WrappedNary
}

// The compiler throws an error if the function is provided a first argument that is not a complex number function...
{
	wrap( 'abc', 1, Complex64 ); // $ExpectError
	wrap( 123, 1, Complex64 ); // $ExpectError
	wrap( true, 1, Complex64 ); // $ExpectError
	wrap( false, 1, Complex64 ); // $ExpectError
	wrap( null, 1, Complex64 ); // $ExpectError
	wrap( undefined, 1, Complex64 ); // $ExpectError
	wrap( [], 1, Complex64 ); // $ExpectError
	wrap( {}, 1, Complex64 ); // $ExpectError
	wrap( ( x: number ): number => x, 1, Complex64 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument that is not a number...
{
	wrap( binary, 'abc', Complex64 ); // $ExpectError
	wrap( binary, true, Complex64 ); // $ExpectError
	wrap( binary, false, Complex64 ); // $ExpectError
	wrap( binary, null, Complex64 ); // $ExpectError
	wrap( binary, undefined, Complex64 ); // $ExpectError
	wrap( binary, [], Complex64 ); // $ExpectError
	wrap( binary, {}, Complex64 ); // $ExpectError
	wrap( binary, ( x: number ): number => x, Complex64 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument that is not a complex number constructor...
{
	wrap( binary, 2, 'abc' ); // $ExpectError
	wrap( binary, 2, 1 ); // $ExpectError
	wrap( binary, 2, true ); // $ExpectError
	wrap( binary, 2, false ); // $ExpectError
	wrap( binary, 2, null ); // $ExpectError
	wrap( binary, 2, undefined ); // $ExpectError
	wrap( binary, 2, [] ); // $ExpectError
	wrap( binary, 2, {} ); // $ExpectError
	wrap( binary, 2, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	wrap(); // $ExpectError
	wrap( binary ); // $ExpectError
	wrap( binary, 2 ); // $ExpectError
	wrap( binary, 2, Complex64, true ); // $ExpectError
}

// The function returns a function which returns a computed result...
{
	const z = new Complex64( 1.0, 1.0 );

	const f0 = wrap( nullary, 0, Complex64 );
	f0();

	const f1 = wrap( unary, 1, Complex64 );
	f1( 1.0 );
	f1( z );

	const f2 = wrap( binary, 2, Complex64 );
	f2( 1.0, 1.0 );
	f2( 1.0, z );
	f2( z, 1.0 );
	f2( z, z );

	const f3 = wrap( ternary, 3, Complex64 );
	f3( 1.0, 1.0, 1.0 );
	f3( 1.0, 1.0, z );
	f3( 1.0, z, 1.0 );
	f3( z, 1.0, 1.0 );
	f3( z, z, 1.0 );
	f3( z, 1.0, z );
	f3( 1.0, z, z );
	f3( z, z, z );

	const f4 = wrap( quaternary, 4, Complex64 );
	f4( 1.0, 1.0, 1.0, 1.0 );
	f4( 1.0, 1.0, 1.0, z );
	f4( 1.0, 1.0, z, 1.0 );
	f4( 1.0, z, 1.0, 1.0 );
	f4( z, 1.0, 1.0, 1.0 );
	f4( z, z, 1.0, 1.0 );
	f4( z, 1.0, z, 1.0 );
	f4( 1.0, z, z, 1.0 );
	f4( z, z, z, z );

	const f5 = wrap( quinary, 5, Complex64 );
	f5( 1.0, 1.0, 1.0, 1.0, 1.0 );
	f5( 1.0, 1.0, 1.0, 1.0, z );
	f5( 1.0, 1.0, 1.0, z, 1.0 );
	f5( 1.0, 1.0, z, 1.0, 1.0 );
	f5( 1.0, z, 1.0, 1.0, 1.0 );
	f5( z, 1.0, 1.0, 1.0, 1.0 );
	f5( z, z, 1.0, 1.0, z );
	f5( z, 1.0, z, 1.0, 1.0 );
	f5( 1.0, z, z, 1.0, z );
	f5( z, z, z, z, z );

	const f6 = wrap( nary, 6, Complex64 );
	f6( 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 );
	f6( 1.0, 1.0, 1.0, 1.0, 1.0, z );
	f6( 1.0, 1.0, 1.0, 1.0, z, 1.0 );
	f6( 1.0, 1.0, 1.0, z, 1.0, 1.0 );
	f6( 1.0, 1.0, z, 1.0, 1.0, 1.0 );
	f6( 1.0, z, 1.0, 1.0, 1.0, 1.0 );
	f6( z, 1.0, 1.0, 1.0, 1.0, 1.0 );
	f6( z, z, 1.0, 1.0, z, z );
	f6( z, 1.0, z, 1.0, 1.0, 1.0 );
	f6( 1.0, z, z, 1.0, z, 1.0 );
	f6( z, z, z, z, z, z );
}

// The compiler throws an error if the returned function is not provided real or complex number arguments...
{
	const z = new Complex64( 1.0, 1.0 );

	const f1 = wrap( unary, 1, Complex64 );

	f1( 'beep' ); // $ExpectError
	f1( true ); // $ExpectError
	f1( false ); // $ExpectError
	f1( null ); // $ExpectError
	f1( undefined ); // $ExpectError
	f1( [] ); // $ExpectError
	f1( {} ); // $ExpectError
	f1( ( x: number ): number => x ); // $ExpectError

	const f2 = wrap( binary, 2, Complex64 );

	f2( 'beep', 1.0 ); // $ExpectError
	f2( true, 1.0 ); // $ExpectError
	f2( false, 1.0 ); // $ExpectError
	f2( null, 1.0 ); // $ExpectError
	f2( undefined, 1.0 ); // $ExpectError
	f2( [], 1.0 ); // $ExpectError
	f2( {}, 1.0 ); // $ExpectError
	f2( ( x: number ): number => x, 1.0 ); // $ExpectError

	f2( 'beep', z ); // $ExpectError
	f2( true, z ); // $ExpectError
	f2( false, z ); // $ExpectError
	f2( null, z ); // $ExpectError
	f2( undefined, z ); // $ExpectError
	f2( [], z ); // $ExpectError
	f2( {}, z ); // $ExpectError
	f2( ( x: number ): number => x, z ); // $ExpectError

	f2( 1.0, 'beep' ); // $ExpectError
	f2( 1.0, true ); // $ExpectError
	f2( 1.0, false ); // $ExpectError
	f2( 1.0, null ); // $ExpectError
	f2( 1.0, undefined ); // $ExpectError
	f2( 1.0, [] ); // $ExpectError
	f2( 1.0, {} ); // $ExpectError
	f2( 1.0, ( x: number ): number => x ); // $ExpectError

	f2( z, 'beep' ); // $ExpectError
	f2( z, true ); // $ExpectError
	f2( z, false ); // $ExpectError
	f2( z, null ); // $ExpectError
	f2( z, undefined ); // $ExpectError
	f2( z, [] ); // $ExpectError
	f2( z, {} ); // $ExpectError
	f2( z, ( x: number ): number => x ); // $ExpectError

	const f3 = wrap( ternary, 3, Complex64 );

	f3( 'beep', 1.0, 1.0 ); // $ExpectError
	f3( true, 1.0, 1.0 ); // $ExpectError
	f3( false, 1.0, 1.0 ); // $ExpectError
	f3( null, 1.0, 1.0 ); // $ExpectError
	f3( undefined, 1.0, 1.0 ); // $ExpectError
	f3( [], 1.0, 1.0 ); // $ExpectError
	f3( {}, 1.0, 1.0 ); // $ExpectError
	f3( ( x: number ): number => x, 1.0, 1.0 ); // $ExpectError

	f3( 'beep', z, z ); // $ExpectError
	f3( true, z, z ); // $ExpectError
	f3( false, z, z ); // $ExpectError
	f3( null, z, z ); // $ExpectError
	f3( undefined, z, z ); // $ExpectError
	f3( [], z, z ); // $ExpectError
	f3( {}, z, z ); // $ExpectError
	f3( ( x: number ): number => x, z, z ); // $ExpectError

	f3( 1.0, 'beep', 1.0 ); // $ExpectError
	f3( 1.0, true, 1.0 ); // $ExpectError
	f3( 1.0, false, 1.0 ); // $ExpectError
	f3( 1.0, null, 1.0 ); // $ExpectError
	f3( 1.0, undefined, 1.0 ); // $ExpectError
	f3( 1.0, [], 1.0 ); // $ExpectError
	f3( 1.0, {}, 1.0 ); // $ExpectError
	f3( 1.0, ( x: number ): number => x, 1.0 ); // $ExpectError

	f3( z, 'beep', z ); // $ExpectError
	f3( z, true, z ); // $ExpectError
	f3( z, false, z ); // $ExpectError
	f3( z, null, z ); // $ExpectError
	f3( z, undefined, z ); // $ExpectError
	f3( z, [], z ); // $ExpectError
	f3( z, {}, z ); // $ExpectError
	f3( z, ( x: number ): number => x, z ); // $ExpectError

	f3( 1.0, 1.0, 'beep' ); // $ExpectError
	f3( 1.0, 1.0, true ); // $ExpectError
	f3( 1.0, 1.0, false ); // $ExpectError
	f3( 1.0, 1.0, null ); // $ExpectError
	f3( 1.0, 1.0, undefined ); // $ExpectError
	f3( 1.0, 1.0, [] ); // $ExpectError
	f3( 1.0, 1.0, {} ); // $ExpectError
	f3( 1.0, 1.0, ( x: number ): number => x ); // $ExpectError

	f3( z, z, 'beep' ); // $ExpectError
	f3( z, z, true ); // $ExpectError
	f3( z, z, false ); // $ExpectError
	f3( z, z, null ); // $ExpectError
	f3( z, z, undefined ); // $ExpectError
	f3( z, z, [] ); // $ExpectError
	f3( z, z, {} ); // $ExpectError
	f3( z, z, ( x: number ): number => x ); // $ExpectError

	const f4 = wrap( ternary, 4, Complex64 );

	f4( 'beep', 1.0, 1.0, 1.0 ); // $ExpectError
	f4( true, 1.0, 1.0, 1.0 ); // $ExpectError
	f4( false, 1.0, 1.0, 1.0 ); // $ExpectError
	f4( null, 1.0, 1.0, 1.0 ); // $ExpectError
	f4( undefined, 1.0, 1.0, 1.0 ); // $ExpectError
	f4( [], 1.0, 1.0, 1.0 ); // $ExpectError
	f4( {}, 1.0, 1.0, 1.0 ); // $ExpectError
	f4( ( x: number ): number => x, 1.0, 1.0, 1.0 ); // $ExpectError

	f4( 'beep', z, z, z ); // $ExpectError
	f4( true, z, z, z ); // $ExpectError
	f4( false, z, z, z ); // $ExpectError
	f4( null, z, z, z ); // $ExpectError
	f4( undefined, z, z, z ); // $ExpectError
	f4( [], z, z, z ); // $ExpectError
	f4( {}, z, z, z ); // $ExpectError
	f4( ( x: number ): number => x, z, z, z ); // $ExpectError

	f4( 1.0, 'beep', 1.0, 1.0 ); // $ExpectError
	f4( 1.0, true, 1.0, 1.0 ); // $ExpectError
	f4( 1.0, false, 1.0, 1.0 ); // $ExpectError
	f4( 1.0, null, 1.0, 1.0 ); // $ExpectError
	f4( 1.0, undefined, 1.0, 1.0 ); // $ExpectError
	f4( 1.0, [], 1.0, 1.0 ); // $ExpectError
	f4( 1.0, {}, 1.0, 1.0 ); // $ExpectError
	f4( 1.0, ( x: number ): number => x, 1.0, 1.0 ); // $ExpectError

	f4( z, 'beep', z, z ); // $ExpectError
	f4( z, true, z, z ); // $ExpectError
	f4( z, false, z, z ); // $ExpectError
	f4( z, null, z, z ); // $ExpectError
	f4( z, undefined, z, z ); // $ExpectError
	f4( z, [], z, z ); // $ExpectError
	f4( z, {}, z, z ); // $ExpectError
	f4( z, ( x: number ): number => x, z, z ); // $ExpectError

	f4( 1.0, 1.0, 'beep', 1.0 ); // $ExpectError
	f4( 1.0, 1.0, true, 1.0 ); // $ExpectError
	f4( 1.0, 1.0, false, 1.0 ); // $ExpectError
	f4( 1.0, 1.0, null, 1.0 ); // $ExpectError
	f4( 1.0, 1.0, undefined, 1.0 ); // $ExpectError
	f4( 1.0, 1.0, [], 1.0 ); // $ExpectError
	f4( 1.0, 1.0, {}, 1.0 ); // $ExpectError
	f4( 1.0, 1.0, ( x: number ): number => x, 1.0 ); // $ExpectError

	f4( z, z, 'beep', z ); // $ExpectError
	f4( z, z, true, z ); // $ExpectError
	f4( z, z, false, z ); // $ExpectError
	f4( z, z, null, z ); // $ExpectError
	f4( z, z, undefined, z ); // $ExpectError
	f4( z, z, [], z ); // $ExpectError
	f4( z, z, {}, z ); // $ExpectError
	f4( z, z, ( x: number ): number => x, z ); // $ExpectError

	f4( 1.0, 1.0, 1.0, 'beep' ); // $ExpectError
	f4( 1.0, 1.0, 1.0, true ); // $ExpectError
	f4( 1.0, 1.0, 1.0, false ); // $ExpectError
	f4( 1.0, 1.0, 1.0, null ); // $ExpectError
	f4( 1.0, 1.0, 1.0, undefined ); // $ExpectError
	f4( 1.0, 1.0, 1.0, [] ); // $ExpectError
	f4( 1.0, 1.0, 1.0, {} ); // $ExpectError
	f4( 1.0, 1.0, 1.0, ( x: number ): number => x ); // $ExpectError

	f4( z, z, z, 'beep' ); // $ExpectError
	f4( z, z, z, true ); // $ExpectError
	f4( z, z, z, false ); // $ExpectError
	f4( z, z, z, null ); // $ExpectError
	f4( z, z, z, undefined ); // $ExpectError
	f4( z, z, z, [] ); // $ExpectError
	f4( z, z, z, {} ); // $ExpectError
	f4( z, z, z, ( x: number ): number => x ); // $ExpectError

	const f5 = wrap( ternary, 5, Complex64 );

	f5( 'beep', 1.0, 1.0, 1.0, 1.0 ); // $ExpectError
	f5( true, 1.0, 1.0, 1.0, 1.0 ); // $ExpectError
	f5( false, 1.0, 1.0, 1.0, 1.0 ); // $ExpectError
	f5( null, 1.0, 1.0, 1.0, 1.0 ); // $ExpectError
	f5( undefined, 1.0, 1.0, 1.0, 1.0 ); // $ExpectError
	f5( [], 1.0, 1.0, 1.0, 1.0 ); // $ExpectError
	f5( {}, 1.0, 1.0, 1.0, 1.0 ); // $ExpectError
	f5( ( x: number ): number => x, 1.0, 1.0, 1.0, 1.0 ); // $ExpectError

	f5( 'beep', z, z, z, z ); // $ExpectError
	f5( true, z, z, z, z ); // $ExpectError
	f5( false, z, z, z, z ); // $ExpectError
	f5( null, z, z, z, z ); // $ExpectError
	f5( undefined, z, z, z, z ); // $ExpectError
	f5( [], z, z, z, z ); // $ExpectError
	f5( {}, z, z, z, z ); // $ExpectError
	f5( ( x: number ): number => x, z, z, z, z ); // $ExpectError

	f5( 1.0, 'beep', 1.0, 1.0, 1.0 ); // $ExpectError
	f5( 1.0, true, 1.0, 1.0, 1.0 ); // $ExpectError
	f5( 1.0, false, 1.0, 1.0, 1.0 ); // $ExpectError
	f5( 1.0, null, 1.0, 1.0, 1.0 ); // $ExpectError
	f5( 1.0, undefined, 1.0, 1.0, 1.0 ); // $ExpectError
	f5( 1.0, [], 1.0, 1.0, 1.0 ); // $ExpectError
	f5( 1.0, {}, 1.0, 1.0, 1.0 ); // $ExpectError
	f5( 1.0, ( x: number ): number => x, 1.0, 1.0, 1.0 ); // $ExpectError

	f5( z, 'beep', z, z, z ); // $ExpectError
	f5( z, true, z, z, z ); // $ExpectError
	f5( z, false, z, z, z ); // $ExpectError
	f5( z, null, z, z, z ); // $ExpectError
	f5( z, undefined, z, z, z ); // $ExpectError
	f5( z, [], z, z, z ); // $ExpectError
	f5( z, {}, z, z, z ); // $ExpectError
	f5( z, ( x: number ): number => x, z, z, z ); // $ExpectError

	f5( 1.0, 1.0, 'beep', 1.0, 1.0 ); // $ExpectError
	f5( 1.0, 1.0, true, 1.0, 1.0 ); // $ExpectError
	f5( 1.0, 1.0, false, 1.0, 1.0 ); // $ExpectError
	f5( 1.0, 1.0, null, 1.0, 1.0 ); // $ExpectError
	f5( 1.0, 1.0, undefined, 1.0, 1.0 ); // $ExpectError
	f5( 1.0, 1.0, [], 1.0, 1.0 ); // $ExpectError
	f5( 1.0, 1.0, {}, 1.0, 1.0 ); // $ExpectError
	f5( 1.0, 1.0, ( x: number ): number => x, 1.0, 1.0 ); // $ExpectError

	f5( z, z, 'beep', z, z ); // $ExpectError
	f5( z, z, true, z, z ); // $ExpectError
	f5( z, z, false, z, z ); // $ExpectError
	f5( z, z, null, z, z ); // $ExpectError
	f5( z, z, undefined, z, z ); // $ExpectError
	f5( z, z, [], z, z ); // $ExpectError
	f5( z, z, {}, z, z ); // $ExpectError
	f5( z, z, ( x: number ): number => x, z, z ); // $ExpectError

	f5( 1.0, 1.0, 1.0, 'beep', 1.0 ); // $ExpectError
	f5( 1.0, 1.0, 1.0, true, 1.0 ); // $ExpectError
	f5( 1.0, 1.0, 1.0, false, 1.0 ); // $ExpectError
	f5( 1.0, 1.0, 1.0, null, 1.0 ); // $ExpectError
	f5( 1.0, 1.0, 1.0, undefined, 1.0 ); // $ExpectError
	f5( 1.0, 1.0, 1.0, [], 1.0 ); // $ExpectError
	f5( 1.0, 1.0, 1.0, {}, 1.0 ); // $ExpectError
	f5( 1.0, 1.0, 1.0, ( x: number ): number => x, 1.0 ); // $ExpectError

	f5( z, z, z, 'beep', z ); // $ExpectError
	f5( z, z, z, true, z ); // $ExpectError
	f5( z, z, z, false, z ); // $ExpectError
	f5( z, z, z, null, z ); // $ExpectError
	f5( z, z, z, undefined, z ); // $ExpectError
	f5( z, z, z, [], z ); // $ExpectError
	f5( z, z, z, {}, z ); // $ExpectError
	f5( z, z, z, ( x: number ): number => x, z ); // $ExpectError

	f5( 1.0, 1.0, 1.0, 1.0, 'beep' ); // $ExpectError
	f5( 1.0, 1.0, 1.0, 1.0, true ); // $ExpectError
	f5( 1.0, 1.0, 1.0, 1.0, false ); // $ExpectError
	f5( 1.0, 1.0, 1.0, 1.0, null ); // $ExpectError
	f5( 1.0, 1.0, 1.0, 1.0, undefined ); // $ExpectError
	f5( 1.0, 1.0, 1.0, 1.0, [] ); // $ExpectError
	f5( 1.0, 1.0, 1.0, 1.0, {} ); // $ExpectError
	f5( 1.0, 1.0, 1.0, 1.0, ( x: number ): number => x ); // $ExpectError

	f5( z, z, z, z, 'beep' ); // $ExpectError
	f5( z, z, z, z, true ); // $ExpectError
	f5( z, z, z, z, false ); // $ExpectError
	f5( z, z, z, z, null ); // $ExpectError
	f5( z, z, z, z, undefined ); // $ExpectError
	f5( z, z, z, z, [] ); // $ExpectError
	f5( z, z, z, z, {} ); // $ExpectError
	f5( z, z, z, z, ( x: number ): number => x ); // $ExpectError

	const f6 = wrap( ternary, 6, Complex64 );

	f6( 'beep', 1.0, 1.0, 1.0, 1.0, 1.0 ); // $ExpectError
	f6( true, 1.0, 1.0, 1.0, 1.0, 1.0 ); // $ExpectError
	f6( false, 1.0, 1.0, 1.0, 1.0, 1.0 ); // $ExpectError
	f6( null, 1.0, 1.0, 1.0, 1.0, 1.0 ); // $ExpectError
	f6( undefined, 1.0, 1.0, 1.0, 1.0, 1.0 ); // $ExpectError
	f6( [], 1.0, 1.0, 1.0, 1.0, 1.0 ); // $ExpectError
	f6( {}, 1.0, 1.0, 1.0, 1.0, 1.0 ); // $ExpectError
	f6( ( x: number ): number => x, 1.0, 1.0, 1.0, 1.0, 1.0 ); // $ExpectError

	f6( 'beep', z, z, z, z, z ); // $ExpectError
	f6( true, z, z, z, z, z ); // $ExpectError
	f6( false, z, z, z, z, z ); // $ExpectError
	f6( null, z, z, z, z, z ); // $ExpectError
	f6( undefined, z, z, z, z, z ); // $ExpectError
	f6( [], z, z, z, z, z ); // $ExpectError
	f6( {}, z, z, z, z, z ); // $ExpectError
	f6( ( x: number ): number => x, z, z, z, z, z ); // $ExpectError

	f6( 1.0, 'beep', 1.0, 1.0, 1.0, 1.0 ); // $ExpectError
	f6( 1.0, true, 1.0, 1.0, 1.0, 1.0 ); // $ExpectError
	f6( 1.0, false, 1.0, 1.0, 1.0, 1.0 ); // $ExpectError
	f6( 1.0, null, 1.0, 1.0, 1.0, 1.0 ); // $ExpectError
	f6( 1.0, undefined, 1.0, 1.0, 1.0, 1.0 ); // $ExpectError
	f6( 1.0, [], 1.0, 1.0, 1.0, 1.0 ); // $ExpectError
	f6( 1.0, {}, 1.0, 1.0, 1.0, 1.0 ); // $ExpectError
	f6( 1.0, ( x: number ): number => x, 1.0, 1.0, 1.0, 1.0 ); // $ExpectError

	f6( z, 'beep', z, z, z, z ); // $ExpectError
	f6( z, true, z, z, z, z ); // $ExpectError
	f6( z, false, z, z, z, z ); // $ExpectError
	f6( z, null, z, z, z, z ); // $ExpectError
	f6( z, undefined, z, z, z, z ); // $ExpectError
	f6( z, [], z, z, z, z ); // $ExpectError
	f6( z, {}, z, z, z, z ); // $ExpectError
	f6( z, ( x: number ): number => x, z, z, z, z ); // $ExpectError

	f6( 1.0, 1.0, 'beep', 1.0, 1.0, 1.0 ); // $ExpectError
	f6( 1.0, 1.0, true, 1.0, 1.0, 1.0 ); // $ExpectError
	f6( 1.0, 1.0, false, 1.0, 1.0, 1.0 ); // $ExpectError
	f6( 1.0, 1.0, null, 1.0, 1.0, 1.0 ); // $ExpectError
	f6( 1.0, 1.0, undefined, 1.0, 1.0, 1.0 ); // $ExpectError
	f6( 1.0, 1.0, [], 1.0, 1.0, 1.0 ); // $ExpectError
	f6( 1.0, 1.0, {}, 1.0, 1.0, 1.0 ); // $ExpectError
	f6( 1.0, 1.0, ( x: number ): number => x, 1.0, 1.0, 1.0 ); // $ExpectError

	f6( z, z, 'beep', z, z, z ); // $ExpectError
	f6( z, z, true, z, z, z ); // $ExpectError
	f6( z, z, false, z, z, z ); // $ExpectError
	f6( z, z, null, z, z, z ); // $ExpectError
	f6( z, z, undefined, z, z, z ); // $ExpectError
	f6( z, z, [], z, z, z ); // $ExpectError
	f6( z, z, {}, z, z, z ); // $ExpectError
	f6( z, z, ( x: number ): number => x, z, z, z ); // $ExpectError

	f6( 1.0, 1.0, 1.0, 'beep', 1.0, 1.0 ); // $ExpectError
	f6( 1.0, 1.0, 1.0, true, 1.0, 1.0 ); // $ExpectError
	f6( 1.0, 1.0, 1.0, false, 1.0, 1.0 ); // $ExpectError
	f6( 1.0, 1.0, 1.0, null, 1.0, 1.0 ); // $ExpectError
	f6( 1.0, 1.0, 1.0, undefined, 1.0, 1.0 ); // $ExpectError
	f6( 1.0, 1.0, 1.0, [], 1.0, 1.0 ); // $ExpectError
	f6( 1.0, 1.0, 1.0, {}, 1.0, 1.0 ); // $ExpectError
	f6( 1.0, 1.0, 1.0, ( x: number ): number => x, 1.0, 1.0 ); // $ExpectError

	f6( z, z, z, 'beep', z, z ); // $ExpectError
	f6( z, z, z, true, z, z ); // $ExpectError
	f6( z, z, z, false, z, z ); // $ExpectError
	f6( z, z, z, null, z, z ); // $ExpectError
	f6( z, z, z, undefined, z, z ); // $ExpectError
	f6( z, z, z, [], z, z ); // $ExpectError
	f6( z, z, z, {}, z, z ); // $ExpectError
	f6( z, z, z, ( x: number ): number => x, z, z ); // $ExpectError

	f6( 1.0, 1.0, 1.0, 1.0, 'beep', 1.0 ); // $ExpectError
	f6( 1.0, 1.0, 1.0, 1.0, true, 1.0 ); // $ExpectError
	f6( 1.0, 1.0, 1.0, 1.0, false, 1.0 ); // $ExpectError
	f6( 1.0, 1.0, 1.0, 1.0, null, 1.0 ); // $ExpectError
	f6( 1.0, 1.0, 1.0, 1.0, undefined, 1.0 ); // $ExpectError
	f6( 1.0, 1.0, 1.0, 1.0, [], 1.0 ); // $ExpectError
	f6( 1.0, 1.0, 1.0, 1.0, {}, 1.0 ); // $ExpectError
	f6( 1.0, 1.0, 1.0, 1.0, ( x: number ): number => x, 1.0 ); // $ExpectError

	f6( z, z, z, z, 'beep', z ); // $ExpectError
	f6( z, z, z, z, true, z ); // $ExpectError
	f6( z, z, z, z, false, z ); // $ExpectError
	f6( z, z, z, z, null, z ); // $ExpectError
	f6( z, z, z, z, undefined, z ); // $ExpectError
	f6( z, z, z, z, [], z ); // $ExpectError
	f6( z, z, z, z, {}, z ); // $ExpectError
	f6( z, z, z, z, ( x: number ): number => x, z ); // $ExpectError

	f6( 1.0, 1.0, 1.0, 1.0, 1.0, 'beep' ); // $ExpectError
	f6( 1.0, 1.0, 1.0, 1.0, 1.0, true ); // $ExpectError
	f6( 1.0, 1.0, 1.0, 1.0, 1.0, false ); // $ExpectError
	f6( 1.0, 1.0, 1.0, 1.0, 1.0, null ); // $ExpectError
	f6( 1.0, 1.0, 1.0, 1.0, 1.0, undefined ); // $ExpectError
	f6( 1.0, 1.0, 1.0, 1.0, 1.0, [] ); // $ExpectError
	f6( 1.0, 1.0, 1.0, 1.0, 1.0, {} ); // $ExpectError
	f6( 1.0, 1.0, 1.0, 1.0, 1.0, ( x: number ): number => x ); // $ExpectError

	f6( z, z, z, z, z, 'beep' ); // $ExpectError
	f6( z, z, z, z, z, true ); // $ExpectError
	f6( z, z, z, z, z, false ); // $ExpectError
	f6( z, z, z, z, z, null ); // $ExpectError
	f6( z, z, z, z, z, undefined ); // $ExpectError
	f6( z, z, z, z, z, [] ); // $ExpectError
	f6( z, z, z, z, z, {} ); // $ExpectError
	f6( z, z, z, z, z, ( x: number ): number => x ); // $ExpectError
}
