import React, {useEffect} from "react";
import {DataGrid} from '@material-ui/data-grid';
import {useDispatch, useSelector} from "react-redux";
import {loadBreeds} from "../../store/actions/breedsReducerActions";
import {useStyles} from "./dataGridStyles";
import {LikeButton} from "../shared/LikeButton";
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";


const columns = [
    {
        field: "",
        headerName: "Favs",
        sortable: false,
        width: 150,
        renderCell: (params) => {
            return <LikeButton breedId={params.id}/>;
        }
    },
    {
        field: 'name',
        headerName: 'name',
        width: 150,
    },
    {
        field: 'adaptability',
        headerName: 'adaptability',
        width: 150,
        type: 'number',
    },
    {
        field: 'affection_level',
        headerName: 'affection level',
        type: 'number',
        width: 150,
    },
    {
        field: 'child_friendly',
        headerName: 'child friendly',
        width: 150,
        type: 'number',
    },
    {
        field: 'dog_friendly',
        headerName: 'dog friendly',
        width: 150,
        type: 'number',
    },
    {
        field: 'energy_level',
        headerName: 'energy level',
        width: 150,
        type: 'number',
    },
    {
        field: 'health_issues',
        headerName: 'health issues',
        width: 150,
        type: 'number',
    },
    {
        field: 'intelligence',
        headerName: 'intelligence',
        width: 150,
        type: 'number',
    },
    {
        field: 'life_span',
        headerName: 'life span',
        width: 150,
        type: 'number',
        sortable: false
    },
];



export default function DataGridDemo() {
    const classes = useStyles();
    const inputState = useSelector(store => store.inputSlice)
    const filteredBreeds = useSelector(store => store.breedsSlice.breeds.filter((item) => {
        return item.image && item.image.url && item.name.toLowerCase().includes(inputState.toLowerCase())
    }))

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadBreeds());
    }, [dispatch])

    const rowsBreeds = filteredBreeds.map((item)=>{
        return {
            id: item.id,
            name: item.name,
            adaptability: item.adaptability,
            affection_level: item.affection_level,
            child_friendly: item.child_friendly,
            dog_friendly: item.dog_friendly,
            energy_level: item.energy_level,
            health_issues: item.health_issues,
            intelligence: item.intelligence,
            life_span: item.life_span
        }
    })


    return (
            <div className={classes.rootDiv}>
                <Button component={Link} to='/table' variant='contained' color='primary'>
                    table
                </Button>
                <DataGrid
                    classes={{
                        root: classes.rootGrid,
                        row: classes.row,
                        columnHeader: classes.columnHeader,
                    }}
                    disableColumnMenu
                    rows={rowsBreeds}
                    columns={columns}
                    pageSize={15}
                    disableSelectionOnClick={true}
                    autoHeight
                />
            </div>
    );
}
