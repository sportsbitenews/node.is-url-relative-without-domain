/* eslint no-array-constructor: 0 */
/* eslint no-new-object: 0 */
/* eslint padded-blocks: 0 */
/* eslint brace-style: 0 */
/* eslint max-statements-per-line: 0 */
'use strict';

import test from 'ava';
import m from '../../../../../';

test ( 'default', t => {

  t.false ( m ( 'под5.под4.под3.под2.под.сайт.рф/index.html' ) );
  t.false ( m ( '//под5.под4.под3.под2.под.сайт.рф/index.html' ) );
  t.false ( m ( 'http://под5.под4.под3.под2.под.сайт.рф/index.html' ) );
  t.false ( m ( 'https://под5.под4.под3.под2.под.сайт.рф/index.html' ) );
  t.false ( m ( 'ftp://под5.под4.под3.под2.под.сайт.рф/index.html' ) );

} );

test ( 'inside last', t => {

  t.false ( m ( 'под5.под4.под3.под2.под.сайт.рф/вну/три/index.html' ) );
  t.false ( m ( '//под5.под4.под3.под2.под.сайт.рф/вну/три/index.html' ) );
  t.false ( m ( 'http://под5.под4.под3.под2.под.сайт.рф/вну/три/index.html' ) );
  t.false ( m ( 'https://под5.под4.под3.под2.под.сайт.рф/вну/три/index.html' ) );
  t.false ( m ( 'ftp://под5.под4.под3.под2.под.сайт.рф/вну/три/index.html' ) );

} );

test ( 'inside last with path dots', t => {

  t.false ( m ( 'под5.под4.под3.под2.под.сайт.рф/вну/три/./а/б/index.html' ) );
  t.false ( m ( '//под5.под4.под3.под2.под.сайт.рф/вну/три/./а/б/index.html' ) );
  t.false ( m ( 'http://под5.под4.под3.под2.под.сайт.рф/вну/три/./а/б/index.html' ) );
  t.false ( m ( 'https://под5.под4.под3.под2.под.сайт.рф/вну/три/./а/б/index.html' ) );
  t.false ( m ( 'ftp://под5.под4.под3.под2.под.сайт.рф/вну/три/./а/б/index.html' ) );

  t.false ( m ( 'под5.под4.под3.под2.под.сайт.рф/вну/три/../а/б/index.html' ) );
  t.false ( m ( '//под5.под4.под3.под2.под.сайт.рф/вну/три/../а/б/index.html' ) );
  t.false ( m ( 'http://под5.под4.под3.под2.под.сайт.рф/вну/три/../а/б/index.html' ) );
  t.false ( m ( 'https://под5.под4.под3.под2.под.сайт.рф/вну/три/../а/б/index.html' ) );
  t.false ( m ( 'ftp://под5.под4.под3.под2.под.сайт.рф/вну/три/../а/б/index.html' ) );

} );

test ( 'after index', t => {

  t.false ( m ( 'под5.под4.под3.под2.под.сайт.рф/index.html/вну/три' ) );
  t.false ( m ( '//под5.под4.под3.под2.под.сайт.рф/index.html/вну/три' ) );
  t.false ( m ( 'http://под5.под4.под3.под2.под.сайт.рф/index.html/вну/три' ) );
  t.false ( m ( 'https://под5.под4.под3.под2.под.сайт.рф/index.html/вну/три' ) );
  t.false ( m ( 'ftp://под5.под4.под3.под2.под.сайт.рф/index.html/вну/три' ) );

} );

test ( 'after index with path dots', t => {

  t.false ( m ( 'под5.под4.под3.под2.под.сайт.рф/index.html/вну/три/./а/б' ) );
  t.false ( m ( '//под5.под4.под3.под2.под.сайт.рф/index.html/вну/три/./а/б' ) );
  t.false ( m ( 'http://под5.под4.под3.под2.под.сайт.рф/index.html/вну/три/./а/б' ) );
  t.false ( m ( 'https://под5.под4.под3.под2.под.сайт.рф/index.html/вну/три/./а/б' ) );
  t.false ( m ( 'ftp://под5.под4.под3.под2.под.сайт.рф/index.html/вну/три/./а/б' ) );

  t.false ( m ( 'под5.под4.под3.под2.под.сайт.рф/index.html/вну/три/../а/б' ) );
  t.false ( m ( '//под5.под4.под3.под2.под.сайт.рф/index.html/вну/три/../а/б' ) );
  t.false ( m ( 'http://под5.под4.под3.под2.под.сайт.рф/index.html/вну/три/../а/б' ) );
  t.false ( m ( 'https://под5.под4.под3.под2.под.сайт.рф/index.html/вну/три/../а/б' ) );
  t.false ( m ( 'ftp://под5.под4.под3.под2.под.сайт.рф/index.html/вну/три/../а/б' ) );

} );
