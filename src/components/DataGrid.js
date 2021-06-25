import React from "react";
import { DataGrid } from '@material-ui/data-grid';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {Button, ButtonGroup} from "@material-ui/core";


const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    {
        field: 'name',
        headerName: 'name',
        width: 150,
        editable: false,
    },
    {
        field: 'adaptability',
        headerName: 'adaptability',
        width: 150,
        editable: true,
    },
    {
        field: 'affection_level',
        headerName: 'affection level',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'child_friendly',
        headerName: 'child friendly',
        sortable: false,
        width: 160,
    },
];



export default function DataGridDemo() {
    const breedsState = useSelector(store=> store.breedsSlice);
    const filteredBreeds = breedsState.breeds.filter((item)=> {
        return item.image && item.image.url && item.name
    });
    const rowsBreeds = filteredBreeds.map((item)=>{
        return {
            id: item.id,
            name: item.name,
            adaptability: item.adaptability,
            affection_level: item.affection_level,
            child_friendly: item.child_friendly,
        }
    })
    console.log(filteredBreeds);



    return (
        <div>
            <div>
                <ButtonGroup variant="contained" color="primary">
                    <Button>
                        <Link to='/'>Home</Link>
                    </Button>
                    <Button>
                        <Link to='/app'>app</Link>
                    </Button>
                    <Button>
                        <Link to='/dataGrid'>DataGrid</Link>
                    </Button>
                    <Button>
                        <Link to='/table'>Table</Link>
                    </Button>
                </ButtonGroup>
            </div>
            <div style={{  width: '100%' }}>
                <DataGrid
                    rows={rowsBreeds}
                    columns={columns}
                    pageSize={15}
                    checkboxSelection
                    disableSelectionOnClick
                    autoHeight

                />
            </div>
        </div>

    );
}
