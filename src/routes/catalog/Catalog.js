/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Catalog.css';

class Catalog extends React.Component {
	render() {
		return(
			<div className={s.root}>
				There is catalog page
			</div>
		);
	}	
}

export default withStyles(s)(Catalog);