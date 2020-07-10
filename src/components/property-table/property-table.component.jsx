import React, { useState, Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteProperty } from '../../redux/property-form/property-form.actions';

import CustomSelect from '../commons/custom-select-hooks/custom-select.component';
import CustomInput from '../commons/custom-input/custom-input.component';

//Styles
import {
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

const PropertyTable = ({properties, propertyType, deleteProperty}) => {
  const { t } = useTranslation();
  const { type, operation: operationOptions } = t('propertyFilter.tableFilter');
  const typeOptions = type[propertyType] ? type[propertyType] : null;

  let { properties: data, page} = properties;
  let [ pagination, setPagination ] = useState({
    number: 0, 
    size: 10, 
    totalElements: page.totalElements, 
    totalPages: parseInt((page.totalElements/10) + 0.9)})
 
  let auxPagination = pagination.totalPages < 5 ? Array.from({length: pagination.totalPages}, (v, i) => i + 1 ): Array.from({length: 5}, (v, i) => i);

  let [ propertyIdFilter, setPropertyIdFilter ] = useState(false)
  let [ propertyCityFilter, setPropertyCityFilter ] = useState(false)
  let [ propertyPublishDateFilter, setPropertyPublishDateFilter ] = useState(false)
  let [ propertyOperationFilter, setPropertyOperationFilter ] = useState(false)
  let [ propertyUserEmailFilter, setPropertyUserEmailFilter ] = useState(false)
  let [ propertySubTypeFilter, setPropertySubTypeFilter ] = useState("")

  if(propertyIdFilter)
    data = data.filter(item => item._id.includes(propertyIdFilter))
  
  if(propertyCityFilter)
    data = data.filter(item => {
      propertyCityFilter = propertyCityFilter.toLowerCase();
      let itemCity = item.location.city.toLowerCase();
      return itemCity.includes(propertyCityFilter);
    })

  if(propertyPublishDateFilter){
    data = data.filter(item => new Date(item.advertiser.publishDate) > new Date(propertyPublishDateFilter)) //compareDates
  }

  if(propertySubTypeFilter)
    data = data.filter(item => item.features.type === propertySubTypeFilter)

  if(propertyOperationFilter)
    data = data.filter(item => item.advertiser.operation === propertyOperationFilter)

  if(propertyUserEmailFilter)
    data = data.filter(item => {
      propertyUserEmailFilter = propertyUserEmailFilter.toLowerCase();
      let itemEmail = item.advertiser.userContact.emails[0].toLowerCase();
      return itemEmail.includes(propertyUserEmailFilter)
    })

  data = data.filter((item, idx) => pagination.number * 10 <= idx && idx < pagination.number * 10 + pagination.size)

  return (
    <Fragment>
      <Table>
        <TableHeader>
          <CustomRowHeader>
            <CustomColumnClick>Id <ArrowIcon/></CustomColumnClick>
            {typeOptions && <CustomColumnClick>Type</CustomColumnClick>}
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
            {typeOptions &&<CustomColumnHeader>
              
                <CustomSelect 
                  value={propertySubTypeFilter ? propertySubTypeFilter : ""}
                  handleOnChange={(value) => {
                    setPropertySubTypeFilter(value)
                  }}
                  name={"Property-type"} 
                  data={typeOptions.data}/>
              
            </CustomColumnHeader>
            }
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
              <CustomColumn>{item._id}</CustomColumn>
              {typeOptions && <CustomColumn>{item.features.type}</CustomColumn>}
              <CustomColumn>{item.location.city}</CustomColumn>
              <CustomColumn>{(new Date(item.advertiser.publishDate)).toLocaleString()}</CustomColumn>
              <CustomColumn>{item.advertiser.operation}</CustomColumn>
              <CustomColumn>{item.advertiser.userContact.emails[0]}</CustomColumn>
              <CustomColumn><Link to={`/admin/property/edit/${propertyType.toLowerCase()}/${item._id}`}><EditIcon/></Link></CustomColumn>
              <CustomColumn>
                <DeleteButton onClick={() => {
                  if (window.confirm("desea eliminar la propiedad?"))
                    deleteProperty(propertyType, item._id)
              }}><DeleteIcon/></DeleteButton></CustomColumn>
            </CustomRow>
          )
        })}
        </TableBody>
      </Table>
      <div class="row">
        <div class="form-group col-6">
          {`Showing ${pagination.number * 10} to ${pagination.number * 10 + pagination.size} of ${pagination.totalElements}`}
        </div>
        <div class="form-group col-6">
          <div className="input-group-prepend">
            <button 
              className={`btn btn-outline-secondary ${ pagination.number === 0? "disabled": ""}`} 
              type="button"
              onClick={( event ) => {
                if(pagination.number > 0)
                  setPagination({...pagination, number: pagination.number - 1})
              }}>Previus</button>
            {
              auxPagination.map(item=> 
                <button 
                  onClick={( event ) => setPagination({...pagination, number: item -1 })}
                  className={`btn ${item === (pagination.number + 1) ? "btn-primary" : "btn-outline-secondary"}`} 
                  type="button">{item}</button>)
            }
            <button 
              className={`btn btn-outline-secondary ${ pagination.number + 1 === pagination.totalPages? "disabled": ""}`} 
              type="button"
              onClick={( event ) => {
                if(pagination.number + 1 < pagination.totalPages)
                  setPagination({...pagination, number: pagination.number + 1 })
              }}>Next</button>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

const mapStateToProps = state => ({
  propertyType: state.filter.propertyType,
  properties: state.properties.data
})

const mapDispatchToProps = dispatch => ({
  deleteProperty: (type, id) => 
    dispatch(deleteProperty(type, id)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(PropertyTable);
