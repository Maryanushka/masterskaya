/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Form from '../../components/Form';
import Footer from '../../components/Footer';
import CatalogHeader from '../../components/CatalogHeader';
import About from '../../components/About';
import CatalogItems from '../../components/CatalogItems';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Catalog.css';





const Catalog = ()=>
      <div>
     	<CatalogHeader />
      	<CatalogItems />
      	<About />
      	<Form />
      	<Footer />
      </div>

export default withStyles(s)(Catalog);