import styled, {css} from 'styled-components';
import { IoIosArrowDown, IoIosCreate, IoIosCloseCircle } from 'react-icons/io';

export const PropertyTableContainer = styled.div`
  width: 100%;
  padding: 2% 5%;  
`;

export const TableOptionHeader = styled.div` 
`;

export const ButtonText =  styled.h4`
  margin: 0;
  padding: 0;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.thead``;

export const TableBody = styled.tbody``;

export const CustomRow = styled.tr`
  &:nth-child(even){
    background-color: #f2f2f2;
  }

  &:hover {background-color: #ddd;}
`;

export const CustomRowHeader = styled.tr`
  text-transform: capitalize;
`;

const commonColumnStyle = css`
  border: 1px solid #ddd;
  padding: 8px;
`;

export const CustomColumnHeader = styled.th`
  ${commonColumnStyle}

  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #9C2121;
  color: white;

  &:hover > .arrow-icon {
    display: inline;
  }
`;

export const CustomColumnClick = styled.th`
  ${commonColumnStyle}

  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #9C2121;
  color: white;

  cursor: pointer;
`;

export const CustomColumn = styled.td`
  ${commonColumnStyle}
`;

export const ArrowIcon = styled(IoIosArrowDown)`
  display: none;
`

export const EditIcon = styled(IoIosCreate)`
  color: #74c300;
  height: 100%;
`

export const DeleteButton = styled.button`

`;

export const DeleteIcon = styled(IoIosCloseCircle)`
  color: red;
`

export const SelectedArrowIcon = styled(IoIosArrowDown)`
  ${props => props.orderdirection && css`
    transform: rotate(180deg);
  `}
`
