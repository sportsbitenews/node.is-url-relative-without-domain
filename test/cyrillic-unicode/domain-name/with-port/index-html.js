/* eslint no-array-constructor: 0 */
/* eslint no-new-object: 0 */
/* eslint padded-blocks: 0 */
/* eslint brace-style: 0 */
/* eslint max-statements-per-line: 0 */
'use strict';

import test from 'ava';
import m from '../../../../';

test ( 'default', t => {

  t.false ( m ( 'сайт.рф:123/index.html' ) );
  t.false ( m ( '//сайт.рф:123/index.html' ) );
  t.false ( m ( 'http://сайт.рф:123/index.html' ) );
  t.false ( m ( 'https://сайт.рф:123/index.html' ) );
  t.false ( m ( 'ftp://сайт.рф:123/index.html' ) );

} );

test ( 'inside last', t => {

  t.false ( m ( 'сайт.рф:123/вну/три/index.html' ) );
  t.false ( m ( '//сайт.рф:123/вну/три/index.html' ) );
  t.false ( m ( 'http://сайт.рф:123/вну/три/index.html' ) );
  t.false ( m ( 'https://сайт.рф:123/вну/три/index.html' ) );
  t.false ( m ( 'ftp://сайт.рф:123/вну/три/index.html' ) );

} );

test ( 'inside last with path dots', t => {

  t.false ( m ( 'сайт.рф:123/вну/три/./а/б/index.html' ) );
  t.false ( m ( '//сайт.рф:123/вну/три/./а/б/index.html' ) );
  t.false ( m ( 'http://сайт.рф:123/вну/три/./а/б/index.html' ) );
  t.false ( m ( 'https://сайт.рф:123/вну/три/./а/б/index.html' ) );
  t.false ( m ( 'ftp://сайт.рф:123/вну/три/./а/б/index.html' ) );

  t.false ( m ( 'сайт.рф:123/вну/три/../а/б/index.html' ) );
  t.false ( m ( '//сайт.рф:123/вну/три/../а/б/index.html' ) );
  t.false ( m ( 'http://сайт.рф:123/вну/три/../а/б/index.html' ) );
  t.false ( m ( 'https://сайт.рф:123/вну/три/../а/б/index.html' ) );
  t.false ( m ( 'ftp://сайт.рф:123/вну/три/../а/б/index.html' ) );

} );

test ( 'after index', t => {

  t.false ( m ( 'сайт.рф:123/index.html/вну/три' ) );
  t.false ( m ( '//сайт.рф:123/index.html/вну/три' ) );
  t.false ( m ( 'http://сайт.рф:123/index.html/вну/три' ) );
  t.false ( m ( 'https://сайт.рф:123/index.html/вну/три' ) );
  t.false ( m ( 'ftp://сайт.рф:123/index.html/вну/три' ) );

} );

test ( 'after index with path dots', t => {

  t.false ( m ( 'сайт.рф:123/index.html/вну/три/./а/б' ) );
  t.false ( m ( '//сайт.рф:123/index.html/вну/три/./а/б' ) );
  t.false ( m ( 'http://сайт.рф:123/index.html/вну/три/./а/б' ) );
  t.false ( m ( 'https://сайт.рф:123/index.html/вну/три/./а/б' ) );
  t.false ( m ( 'ftp://сайт.рф:123/index.html/вну/три/./а/б' ) );

  t.false ( m ( 'сайт.рф:123/index.html/вну/три/../а/б' ) );
  t.false ( m ( '//сайт.рф:123/index.html/вну/три/../а/б' ) );
  t.false ( m ( 'http://сайт.рф:123/index.html/вну/три/../а/б' ) );
  t.false ( m ( 'https://сайт.рф:123/index.html/вну/три/../а/б' ) );
  t.false ( m ( 'ftp://сайт.рф:123/index.html/вну/три/../а/б' ) );

} );
