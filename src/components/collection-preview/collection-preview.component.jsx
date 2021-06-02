import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
	<section className="collection-preview">
		<h4 className="title">{title.toUpperCase()}</h4>
		<div className="preview">
			{items
				.filter((item, idx) => idx < 4)
				.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
		</div>
	</section>
);

export default CollectionPreview;
