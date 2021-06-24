import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Rating from '@material-ui/lab/Rating';
import {useDispatch, useSelector} from "react-redux";
import {Link, Route, Switch, useParams} from "react-router-dom";
import {GridList, GridListTile, TableSortLabel} from "@material-ui/core";
import {loadBreedImages, loadBreeds} from "./reducer_and_actions";
//import {useStyles} from "./MUIStyles";

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 250,
        height: 500
    },
    tableAndInfo: {
        display:"flex",
    },
    paper: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: 'auto',
            height: '100%',
            backgroundColor: '#C3CBD6',
            marginBottom: '50px'
        },
    },
    gridList: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: 'md',
        height: 'md',
    },
    tile: {
        minWidth: '300px'
    },
}));



export default function BasicTable() {
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(loadBreeds());
    },[dispatch] )



    const classes = useStyles();
    const breedsState = useSelector(store => store.breedsSlice);
    const rows = breedsState.breeds.filter((item) => {
        return item.image && item.image.url && item.name
    });
    const [sortState, setSortState] = useState({});


    rows.sort((a, b) => {
        if (sortState.orderBy === 'name' && sortState.order === false) {
            return a.name.localeCompare(b.name);
        }
        if (sortState.orderBy === 'name' && sortState.order === true) {
            return b.name.localeCompare(a.name);
        }
        if (sortState.orderBy === 'origin' && sortState.order === false) {
            return a.origin.localeCompare(b.origin);
        }
        if (sortState.orderBy === 'origin' && sortState.order === true) {
            return b.origin.localeCompare(a.origin);
        }
        if (sortState.orderBy === 'adapt' && sortState.order === false) {
            return a.adaptability - b.adaptability;
        }
        if (sortState.orderBy === 'adapt' && sortState.order === true) {
            return b.adaptability - a.adaptability;
        }
        if (sortState.orderBy === 'affect' && sortState.order === false) {
            return a.affection_level - b.affection_level;
        }
        if (sortState.orderBy === 'affect' && sortState.order === true) {
            return b.affection_level - a.affection_level;
        }
        if (sortState.orderBy === 'child' && sortState.order === false) {
            return a.child_friendly - b.child_friendly;
        }
        if (sortState.orderBy === 'child' && sortState.order === true) {
            return b.child_friendly - a.child_friendly;
        } else return rows;
    })
    const sortButton = (column) => setSortState({orderBy: column, order: !sortState.order})

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/app'>app</Link>
                    </li>
                    <li>
                        <Link to='/dataGrid'>DataGrid</Link>
                    </li>
                    <li>
                        <Link to='/table'>Table</Link>
                    </li>
                </ul>
            </nav>
            <div className={classes.tableAndInfo}>
                <div className={classes.tableContainer}>
                    <TableContainer  component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell onClick={() => sortButton('name')}>
                                        <TableSortLabel direction={sortState.order ? 'asc' : 'desc'}
                                                        active={sortState.orderBy === 'name'}
                                        >Name</TableSortLabel>
                                    </TableCell>
                                    <TableCell align="center" onClick={() => sortButton('origin')}>
                                        <TableSortLabel direction={sortState.order ? 'asc' : 'desc'}
                                                        active={sortState.orderBy === 'origin'}
                                        >Origin</TableSortLabel>
                                    </TableCell>
                                    <TableCell align="center" onClick={() => sortButton('adapt')}>
                                        <TableSortLabel direction={sortState.order ? 'asc' : 'desc'}
                                                        active={sortState.orderBy === 'adapt'}
                                        >adaptability</TableSortLabel>
                                    </TableCell>
                                    <TableCell align="center" onClick={() => sortButton('affect')}>
                                        <TableSortLabel direction={sortState.order ? 'asc' : 'desc'}
                                                        active={sortState.orderBy === 'affect'}
                                        >affection level</TableSortLabel>
                                    </TableCell>
                                    <TableCell align="center" onClick={() => sortButton('child')}>
                                        <TableSortLabel direction={sortState.order ? 'asc' : 'desc'}
                                                        active={sortState.orderBy === 'child'}
                                        >child friendly</TableSortLabel>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => {
                                    return <TableRow key={row.id}>

                                        <TableCell component="th" scope="row">
                                                <Link to={`/table/${row.id}`}>
                                                {row.name}</Link>
                                            </TableCell>


                                        <TableCell align="center">{row.origin}</TableCell>
                                        <TableCell align="center">
                                            <Rating name="read-only" value={row.adaptability} readOnly/>
                                        </TableCell>
                                        <TableCell align="center">{row.affection_level}</TableCell>
                                        <TableCell align="center">{row.child_friendly}</TableCell>
                                    </TableRow>
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <Switch>
                    <Route exact path={'/table'}>
                        <h3>Please select a breed</h3>
                    </Route>
                    <Route path={`/table/:breedId`}>
                        <Info />
                    </Route>
                </Switch>
            </div>
        </div>

    );
}
function Info() {
    const classes = useStyles();
    let { breedId } = useParams();
    const selectedBreed = useSelector(store => store.breedsSlice.breeds.filter((item)=> item.id === breedId))[0]
    const images = useSelector(store=> store.breedImagesSlice);
    const dispatch = useDispatch();


    useEffect(()=> {
        if (selectedBreed !== undefined)
        dispatch(loadBreedImages(selectedBreed.id))
    },[dispatch, selectedBreed] )


    if (selectedBreed === undefined) {
        return <p>choose your fighter</p>
    } else
    return (
        <div className={classes.root}>
            <GridList cellHeight={360}  className={classes.gridList} cols={5}>
                {images.map((item, index)=>(
                    <GridListTile key={index} className={classes.tile}>
                        <img alt='breedImage' src={item} key={index}/>
                    </GridListTile>
                ))}
            </GridList>

            <div className={classes.paper}>
                <Paper elevation={3}>
                    <h2>{selectedBreed.name}</h2>
                    <div>{selectedBreed.description}</div>
                    <div>{`Temperament: ${selectedBreed.temperament}`}</div>
                </Paper>

            </div>
        </div>
    );
}