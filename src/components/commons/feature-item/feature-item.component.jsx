import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  FeatureItemContainer,
  Icon
} from './feature-item.style';

const getIconClassName = (name)=>{
  switch (name) {
    case "baths":
      return "fas fa-bath";
    case "rooms":
      return "fas fa-bed";
    case "area":
        return "fas fa-compress-arrows-alt";
    default:
      break;
  }
}

const FeatureItem = ({name, value}) => {
  const { t } = useTranslation();
  const featuresUnits = t('property.features');

  return (
    <FeatureItemContainer>
      <Icon className={getIconClassName(name)}/>
      {` ${value} `}
      {featuresUnits[name]}
    </FeatureItemContainer>
  );
};

export default FeatureItem;