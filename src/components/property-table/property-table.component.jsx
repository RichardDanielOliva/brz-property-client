import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPropertiesStartAsync } from '../../redux/property/property.actions';

import CustomSelect from '../commons/custom-select-hooks/custom-select.component';
import CustomInput from '../commons/custom-input/custom-input.component';
import CustomButton from '../commons/custom-button/custom-button.component';

import WithSpinner from '../with-spinner/with-spinner.component';

//Styles
import {
  PropertyTableContainer,
  TableOptionHeader,
  ButtonText,
  Table,
  TableHeader,
  TableBody,
  CustomRowHeader,
  CustomRow,
  CustomColumnHeader,
  CustomColumnClick,
  CustomColumn,
  DeleteButton,
  ArrowIcon,
  EditIcon,
  DeleteIcon
} from './property-table.styles';

const PropertyTable = ({properties}) => {
  let { properties: data, page} = properties;
  let [ propertyIdFilter, setPropertyIdFilter ] = useState(false)
  let [ propertyTypeFilter, setPropertyTypeFilter ] = useState(false)
  let [ propertyCityFilter, setPropertyCityFilter ] = useState(false)
  let [ propertyPublishDateFilter, setPropertyPublishDateFilter ] = useState(false)
  let [ propertyOperationFilter, setPropertyOperationFilter ] = useState(false)
  let [ propertyUserEmailFilter, setPropertyUserEmailFilter ] = useState(false)

  if(propertyIdFilter)
    data = data.filter(item => item.id.includes(propertyIdFilter))
  
  if(propertyCityFilter)
    data = data.filter(item => item.location.city.includes(propertyCityFilter))

  if(propertyPublishDateFilter){
    console.log(propertyPublishDateFilter)
    data = data.filter(item => new Date(item.advertiser.publishDate) > new Date(propertyPublishDateFilter)) //compareDates
  }

  if(propertyOperationFilter)
    data = data.filter(item => item.advertiser.operation === propertyOperationFilter)

  if(propertyUserEmailFilter)
    data = data.filter(item => item.advertiser.UserContact.emails[0].includes(propertyUserEmailFilter))

  const { t } = useTranslation();
  const { type: typeOptions, operation: operationOptions } = t('propertyFilter');
  return (
    <Table>
    <TableHeader>
      <CustomRowHeader>
        <CustomColumnClick>Id <ArrowIcon/></CustomColumnClick>
        <CustomColumnClick>Type</CustomColumnClick>
        <CustomColumnClick>City</CustomColumnClick>
        <CustomColumnClick>Publish Date</CustomColumnClick>
        <CustomColumnClick>Operation</CustomColumnClick>
        <CustomColumnClick>User contact</CustomColumnClick>
        <CustomColumnClick>Edit</CustomColumnClick>
        <CustomColumnClick>Delete</CustomColumnClick>
      </CustomRowHeader>
      <CustomRowHeader>
        <CustomColumnHeader>
          <CustomInput
            value={propertyIdFilter ? propertyIdFilter : ""}
            type="text"
            handleOnChange={setPropertyIdFilter} />
        </CustomColumnHeader>
        <CustomColumnHeader>
          <CustomSelect 
            value={propertyTypeFilter ? propertyTypeFilter : ""}
            handleOnChange={setPropertyTypeFilter}
            name={"Property-type"} 
            data={typeOptions.data}/>
        </CustomColumnHeader>
        <CustomColumnHeader>
          <CustomInput
            type="text"
            value={propertyCityFilter ? propertyCityFilter : ""}
            handleOnChange={setPropertyCityFilter} />
        </CustomColumnHeader>
        <CustomColumnHeader>
          <CustomInput
            type="date"
            value={propertyPublishDateFilter ? propertyPublishDateFilter : ""}
            handleOnChange={setPropertyPublishDateFilter} />
        </CustomColumnHeader>
        <CustomColumnHeader>
          <CustomSelect 
            value={propertyOperationFilter ? propertyOperationFilter : ""}
            handleOnChange={setPropertyOperationFilter}
            name={"Property-operation"} 
            data={operationOptions.data}/>
        </CustomColumnHeader>
        <CustomColumnHeader>
          <CustomInput
            type="text"
            value={propertyUserEmailFilter ? propertyUserEmailFilter : ""}
            handleOnChange={setPropertyUserEmailFilter} />
        </CustomColumnHeader>
        <CustomColumnHeader></CustomColumnHeader>
        <CustomColumnHeader></CustomColumnHeader>
      </CustomRowHeader>
    </TableHeader>
    <TableBody>
      {data.map((item, idx) => {
        return (
          <CustomRow key={`admin-proparty-table-row-${idx}`}>
            <CustomColumn>{item.id}</CustomColumn>
            <CustomColumn>{item.features.type}</CustomColumn>
            <CustomColumn>{item.location.city}</CustomColumn>
            <CustomColumn>{(new Date(item.advertiser.publishDate)).toLocaleString()}</CustomColumn>
            <CustomColumn>{item.advertiser.operation}</CustomColumn>
            <CustomColumn>{item.advertiser.UserContact.emails[0]}</CustomColumn>
            <CustomColumn><Link to={`/admin/property/edit/${item.id}`}><EditIcon/></Link></CustomColumn>
            <CustomColumn><DeleteButton><DeleteIcon/></DeleteButton></CustomColumn>
          </CustomRow>
        )
      })}
    </TableBody>
  </Table>
  )
}

const PropertyTableWithSpinner = WithSpinner(PropertyTable);

const PropertyTableWrapper = ({ isLoading, properties, fetchPropertiesStartAsync, ...props }) => {
  if(!properties){
    fetchPropertiesStartAsync();
    isLoading = true;
  }
  return (
    <PropertyTableContainer>
      <TableOptionHeader>
        <Link 
          style={{ width: '100%', height: '100%' }}
          to={'/admin/property/create'}>
          <CustomButton>
            <EditIcon/>
            <ButtonText>Create new</ButtonText>
          </CustomButton>
         </Link>
      </TableOptionHeader>
      <PropertyTableWithSpinner isLoading={isLoading} properties={properties} {...props}/>
    </PropertyTableContainer>
  );
};


const mapStateToProps = state => ({
  isLoading: state.properties.isFetching,
  properties: state.properties.data
})

const mapDispatchToProps = dispatch => ({
  fetchPropertiesStartAsync: () => 
      dispatch(fetchPropertiesStartAsync())}
);

export default connect(mapStateToProps, mapDispatchToProps)(PropertyTableWrapper);
