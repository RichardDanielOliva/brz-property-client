import React from 'react';
import { useTranslation } from 'react-i18next';

import CustomSelect from '../../commons/custom-select/custom-select.component';

import { 
    SortedGroupContainer, 
    CustomSelectContainer,
    Title
} from './psr-sorted-group.styles';

const PSRSortedGroup = () => {
    const { t } = useTranslation();
    const {title, ...props} = t('propertySearchResult.sort');
    return (
        <SortedGroupContainer>
            <Title>
                {title}
            </Title>
            <CustomSelectContainer>
                <CustomSelect {...props}/>
            </CustomSelectContainer>
        </SortedGroupContainer>
    )
}

export default PSRSortedGroup;