/* eslint no-array-constructor: 0 */
/* eslint no-new-object: 0 */
/* eslint padded-blocks: 0 */
/* eslint brace-style: 0 */
/* eslint max-statements-per-line: 0 */
'use strict';

import test from 'ava';
import m from '../../../../../';

test ( 'usual', t => {

  t.false ( m ( 'под.сайт.рф' ) );
  t.false ( m ( '//под.сайт.рф' ) );
  t.false ( m ( 'http://под.сайт.рф' ) );
  t.false ( m ( 'https://под.сайт.рф' ) );
  t.false ( m ( 'ftp://под.сайт.рф' ) );

} );

test ( 'with slash in the end', t => {

  t.false ( m ( 'под.сайт.рф/' ) );
  t.false ( m ( '//под.сайт.рф/' ) );
  t.false ( m ( 'http://под.сайт.рф/' ) );
  t.false ( m ( 'https://под.сайт.рф/' ) );
  t.false ( m ( 'ftp://под.сайт.рф/' ) );

} );

test ( 'inside', t => {

  t.false ( m ( 'под.сайт.рф/вну/три' ) );
  t.false ( m ( '//под.сайт.рф/вну/три' ) );
  t.false ( m ( 'http://под.сайт.рф/вну/три' ) );
  t.false ( m ( 'https://под.сайт.рф/вну/три' ) );
  t.false ( m ( 'ftp://под.сайт.рф/вну/три' ) );

} );

test ( 'inside with params', t => {

  t.false ( m ( 'под.сайт.рф/вну/три/?раз=два' ) );
  t.false ( m ( '//под.сайт.рф/вну/три/?раз=два' ) );
  t.false ( m ( 'http://под.сайт.рф/вну/три/?раз=два' ) );
  t.false ( m ( 'https://под.сайт.рф/вну/три/?раз=два' ) );
  t.false ( m ( 'ftp://под.сайт.рф/вну/три/?раз=два' ) );

} );

test ( 'inside with path dots', t => {

  t.false ( m ( 'под.сайт.рф/вну/три/./а' ) );
  t.false ( m ( '//под.сайт.рф/вну/три/./а' ) );
  t.false ( m ( 'http://под.сайт.рф/вну/три/./а' ) );
  t.false ( m ( 'https://под.сайт.рф/вну/три/./а' ) );
  t.false ( m ( 'ftp://под.сайт.рф/вну/три/./а' ) );

  t.false ( m ( 'под.сайт.рф/вну/три/../а' ) );
  t.false ( m ( '//под.сайт.рф/вну/три/../а' ) );
  t.false ( m ( 'http://под.сайт.рф/вну/три/../а' ) );
  t.false ( m ( 'https://под.сайт.рф/вну/три/../а' ) );
  t.false ( m ( 'ftp://под.сайт.рф/вну/три/../а' ) );

} );

test ( 'inside with path dots & params', t => {

  t.false ( m ( 'под.сайт.рф/вну/три/./а/?раз=два' ) );
  t.false ( m ( '//под.сайт.рф/вну/три/./а/?раз=два' ) );
  t.false ( m ( 'http://под.сайт.рф/вну/три/./а/?раз=два' ) );
  t.false ( m ( 'https://под.сайт.рф/вну/три/./а/?раз=два' ) );
  t.false ( m ( 'ftp://под.сайт.рф/вну/три/./а/?раз=два' ) );

  t.false ( m ( 'под.сайт.рф/вну/три/../а/?раз=два' ) );
  t.false ( m ( '//под.сайт.рф/вну/три/../а/?раз=два' ) );
  t.false ( m ( 'http://под.сайт.рф/вну/три/../а/?раз=два' ) );
  t.false ( m ( 'https://под.сайт.рф/вну/три/../а/?раз=два' ) );
  t.false ( m ( 'ftp://под.сайт.рф/вну/три/../а/?раз=два' ) );

} );