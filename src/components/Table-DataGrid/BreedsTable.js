import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
//app components
import {loadBreeds} from "../../store/actions/breedsReducerActions";
import { clearImagesReducerAction} from "../../store/actions/imagesReducerActions";
//router
import {Link, Route, Switch, useHistory, useLocation} from "react-router-dom";
//MUI
import {useStyles} from "./tableStyles";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Rating from '@material-ui/lab/Rating';
import {Button, TablePagination, TableSortLabel} from "@material-ui/core";
import {BreedInfo} from "../shared/BreedInfo/BreedInfo";
import {LikeButton} from "../shared/LikeButton";


export function BreedsTable() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadBreeds());
    }, [dispatch])
    const classes = useStyles();

    const breedsState = useSelector(store => store.breedsSlice);
    const [sortState, setSortState] = useState({});

//input
    const inputState = useSelector(store => store.inputSlice)
    const filteredBreeds = breedsState.breeds.filter((item) => {
        return item.image && item.image.url && item.name.toLowerCase().includes(inputState.toLowerCase())
    });

    const sortedBreeds = [...filteredBreeds].sort((a, b) => {
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
        if (sortState.orderBy === 'int' && sortState.order === false) {
            return a.intelligence - b.intelligence;
        }
        if (sortState.orderBy === 'int' && sortState.order === true) {
            return b.intelligence - a.intelligence;
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
        } return filteredBreeds;
    })
    const sortButton = (column) => setSortState({orderBy: column, order: !sortState.order})
    const [page, setPage] = React.useState(0);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const pagedArr = sortedBreeds.slice(page * 10, (page + 1) * 10);

    let history = useHistory();
    let location = useLocation();

    const tableBodyRowClick = (id) => {
        if (location.pathname !== `/table/${id}`) {
            dispatch(clearImagesReducerAction())
            history.push(`/table/${id}`)
        }
    }

    return (
        <div className={classes.tablePage}>
            <Button variant='contained' color='primary'>
                <Link to='/dataGrid'>datagrid</Link>
            </Button>
            <Switch>
                <Route exact path={'/table'}>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow variant="head">
                                    <TableCell>Favs</TableCell>
                                    <TableCell className={classes.nameCell} onClick={() => sortButton('name')}>
                                        <TableSortLabel direction={sortState.order ? 'asc' : 'desc'}
                                                        active={sortState.orderBy === 'name'}
                                        >Name</TableSortLabel>
                                    </TableCell>
                                    <TableCell align="center" onClick={() => sortButton('origin')}>
                                        <TableSortLabel direction={sortState.order ? 'asc' : 'desc'}
                                                        active={sortState.orderBy === 'origin'}
                                        >Origin</TableSortLabel>
                                    </TableCell>
                                    <TableCell align="center" onClick={() => sortButton('int')}>
                                        <TableSortLabel direction={sortState.order ? 'asc' : 'desc'}
                                                        active={sortState.orderBy === 'int'}
                                        >intelligence</TableSortLabel>
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
                                {pagedArr.map((row) => {
                                    return <TableRow key={row.id} className={classes.tableRow}
                                                     selected={location.pathname === `/table/${row.id}`}
                                                     >
                                        <TableCell>
                                            <LikeButton breedId={row.id}/>
                                        </TableCell>
                                        <TableCell onClick={()=> tableBodyRowClick(row.id)}>
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="center">{row.origin}</TableCell>
                                        <TableCell align="center">
                                            <Rating name="read-only" value={row.intelligence} readOnly/>
                                        </TableCell>
                                        <TableCell align="center">{row.affection_level}</TableCell>
                                        <TableCell align="center">{row.child_friendly}</TableCell>
                                    </TableRow>
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        component="div"
                        count={sortedBreeds.length}
                        rowsPerPageOptions={[10]}
                        rowsPerPage={10}
                        page={page}
                        onChangePage={handleChangePage}
                    />
                </Route>
                <Route path={`/table/:breedId`}>
                    <BreedInfo/>
                </Route>
            </Switch>

        </div>

    );
}

