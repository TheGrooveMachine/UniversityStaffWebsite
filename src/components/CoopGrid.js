import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import getData from '../util/getData';


export default class CoopGrid extends React.Component{

  constructor(props){
    super(props);
    this.state = {
        employment:{},
        loaded:false
    }
  } 

  render(){

        const {employment, loaded, } = this.state;    
        if(!loaded) return (<div>Coops Loading...</div>);
  
        const columns = [
          { field: 'id', headerName: 'ID', width: 100 },
          {
            field: 'employer',
            headerName: 'Employer',
            width: 150,
            editable: true,
          },
          {
            field: 'degree',
            headerName: 'Degree',
            width: 150,
            editable: true,
          },
          {
            field: 'city',
            headerName: 'City',
            type: 'number',
            width: 110,
            editable: true,
          },
          {
            field: 'term',
            headerName: 'Term',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
              `${params.row.firstName || ''} ${params.row.lastName || ''}`,
          },
        ];

        const rows = [
          { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
          { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
          { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
          { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
          { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
          { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
          { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
          { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
          { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        ];
        // console.log(employment.coopTable.title)
        const row = employment.coopTable.coopInformation.map(({ employer, degree, city, term }, index) => {

          return {
                id: index,
                employer,
                degree,
                city,
                term
              }       

      });

        return (
          <div>
              <Box className='gridBox'>
                <DataGrid
                  rows={row}
                  columns={columns}
                  pageSize={10}
                  rowsPerPageOptions={[5]}
                  checkboxSelection
                  disableSelectionOnClick
                  experimentalFeatures={{ newEditingApi: true }}
                />
              </Box>
          </div>
        )
      }

  componentDidMount(){
    getData('employment/')
        .then((json) => {
            this.setState({
                employment:json,
                loaded:true,
                danTest:5
        });
    });
  }
}

