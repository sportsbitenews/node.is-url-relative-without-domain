/* eslint no-array-constructor: 0 */
/* eslint no-new-object: 0 */
/* eslint padded-blocks: 0 */
/* eslint brace-style: 0 */
/* eslint max-statements-per-line: 0 */
'use strict';

import test from 'ava';
import m from '../../../../';

test ( 'usual', t => {

  t.false ( m ( 'сайт.рф:123' ) );
  t.false ( m ( '//сайт.рф:123' ) );
  t.false ( m ( 'http://сайт.рф:123' ) );
  t.false ( m ( 'https://сайт.рф:123' ) );
  t.false ( m ( 'ftp://сайт.рф:123' ) );

} );

test ( 'with slash in the end', t => {

  t.false ( m ( 'сайт.рф:123/' ) );
  t.false ( m ( '//сайт.рф:123/' ) );
  t.false ( m ( 'http://сайт.рф:123/' ) );
  t.false ( m ( 'https://сайт.рф:123/' ) );
  t.false ( m ( 'ftp://сайт.рф:123/' ) );

} );

test ( 'inside', t => {

  t.false ( m ( 'сайт.рф:123/вну/три' ) );
  t.false ( m ( '//сайт.рф:123/вну/три' ) );
  t.false ( m ( 'http://сайт.рф:123/вну/три' ) );
  t.false ( m ( 'https://сайт.рф:123/вну/три' ) );
  t.false ( m ( 'ftp://сайт.рф:123/вну/три' ) );

} );

test ( 'inside with params', t => {

  t.false ( m ( 'сайт.рф:123/вну/три/?раз=два' ) );
  t.false ( m ( '//сайт.рф:123/вну/три/?раз=два' ) );
  t.false ( m ( 'http://сайт.рф:123/вну/три/?раз=два' ) );
  t.false ( m ( 'https://сайт.рф:123/вну/три/?раз=два' ) );
  t.false ( m ( 'ftp://сайт.рф:123/вну/три/?раз=два' ) );

} );

test ( 'inside with path dots', t => {

  t.false ( m ( 'сайт.рф:123/вну/три/./а' ) );
  t.false ( m ( '//сайт.рф:123/вну/три/./а' ) );
  t.false ( m ( 'http://сайт.рф:123/вну/три/./а' ) );
  t.false ( m ( 'https://сайт.рф:123/вну/три/./а' ) );
  t.false ( m ( 'ftp://сайт.рф:123/вну/три/./а' ) );

  t.false ( m ( 'сайт.рф:123/вну/три/../а' ) );
  t.false ( m ( '//сайт.рф:123/вну/три/../а' ) );
  t.false ( m ( 'http://сайт.рф:123/вну/три/../а' ) );
  t.false ( m ( 'https://сайт.рф:123/вну/три/../а' ) );
  t.false ( m ( 'ftp://сайт.рф:123/вну/три/../а' ) );

} );

test ( 'inside with path dots & params', t => {

  t.false ( m ( 'сайт.рф:123/вну/три/./а/?раз=два' ) );
  t.false ( m ( '//сайт.рф:123/вну/три/./а/?раз=два' ) );
  t.false ( m ( 'http://сайт.рф:123/вну/три/./а/?раз=два' ) );
  t.false ( m ( 'https://сайт.рф:123/вну/три/./а/?раз=два' ) );
  t.false ( m ( 'ftp://сайт.рф:123/вну/три/./а/?раз=два' ) );

  t.false ( m ( 'сайт.рф:123/вну/три/../а/?раз=два' ) );
  t.false ( m ( '//сайт.рф:123/вну/три/../а/?раз=два' ) );
  t.false ( m ( 'http://сайт.рф:123/вну/три/../а/?раз=два' ) );
  t.false ( m ( 'https://сайт.рф:123/вну/три/../а/?раз=два' ) );
  t.false ( m ( 'ftp://сайт.рф:123/вну/три/../а/?раз=два' ) );

} );
