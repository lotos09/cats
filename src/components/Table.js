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
import {Route, Switch, useHistory, useLocation, useParams} from "react-router-dom";
import {
    CircularProgress, Divider,
    Input,
    TablePagination,
    TableSortLabel
} from "@material-ui/core";
import {clearImagesReducer, loadBreedImages, loadBreeds} from "./reducer_and_actions";
import {NavBar} from "./NavBar";
//import {useStyles} from "./MUIStyles";

const useStyles = makeStyles((theme) => ({

    tablePage: {
        display: "flex",
        flexDirection: 'column',
        alignItems: "center"
    },
    infoPage: {
        display: "flex",
        flexDirection: 'column',
        alignItems: "center"
    },
    paper: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        maxWidth: 900,
        '& > *': {
            margin: theme.spacing(1),
            height: '100%',
            backgroundColor: '#C3CBD6',
            marginBottom: '50px',
        },
    },
    gridList: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        flexWrap: "wrap"
    },

    gridImg: {
        width: '20%',
        minWidth: 300,
    },
    tableRow: {
        cursor: "pointer"
    },
    spinner: {
        textAlign: "center"
    },
}));


export default function BasicTable() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadBreeds());
    }, [dispatch])
    const classes = useStyles();

    const breedsState = useSelector(store => store.breedsSlice);
    const [sortState, setSortState] = useState({});

//input
    const [inputState, setInputState] = useState('');
    const inputHandle = ({target}) => {
        setInputState(target.value);
    }
    const filteredBreeds = breedsState.breeds.filter((item) => {
        return item.image && item.image.url && item.name.toLowerCase().includes(inputState.toLowerCase())
    });

    filteredBreeds.sort((a, b) => {
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
        } else return filteredBreeds;
    })
    const sortButton = (column) => setSortState({orderBy: column, order: !sortState.order})
    const [page, setPage] = React.useState(0);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const pagedArr = filteredBreeds.slice(page * 10, (page + 1) * 10);
    let history = useHistory();
    let location = useLocation();
    return (
        <div className={classes.tablePage}>
            <NavBar/>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow variant="head">
                            <TableCell onClick={() => sortButton('name')}>
                                <TableSortLabel direction={sortState.order ? 'asc' : 'desc'}
                                                active={sortState.orderBy === 'name'}
                                >Name</TableSortLabel>
                                <Input type='text' placeholder='search' id="outlined-basic"
                                       label="Outlined" variant="outlined"
                                       color='secondary'
                                       onClick={(e)=> e.stopPropagation()}
                                       value={inputState} onChange={inputHandle}/>
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
                                             onClick={() => {
                                                 if (location.pathname !== `/table/${row.id}`) {
                                                     dispatch(clearImagesReducer())
                                                     history.push(`/table/${row.id}`)
                                                 }

                                             }}>
                                <TableCell>
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
                count={filteredBreeds.length}
                rowsPerPageOptions={[10]}
                rowsPerPage={10}
                page={page}
                onChangePage={handleChangePage}
            />

            <Switch>
                <Route exact path={'/table'}>
                    <h3>Please select a breed</h3>
                </Route>
                <Route path={`/table/:breedId`}>
                    <Info/>
                </Route>
            </Switch>

        </div>

    );
}

function Info() {
    const classes = useStyles();
    let {breedId} = useParams();
    const selectedBreed = useSelector(store => store.breedsSlice.breeds.filter((item) => item.id === breedId))[0]
    const images = useSelector(store => store.breedImagesSlice);
    const dispatch = useDispatch();

    useEffect(() => {
        if (selectedBreed !== undefined)
            dispatch(loadBreedImages(selectedBreed.id))
    }, [dispatch, selectedBreed])

    if (selectedBreed === undefined) {
        return <p>choose your fighter</p>
    } else
        return (
            <div className={classes.infoPage}>
                <h2>{selectedBreed.name}</h2>

                {Boolean(!images.length) && <div className={classes.spinner}>
                    <CircularProgress/>
                </div>}
                {Boolean(images.length) && <div className={classes.gridList}>
                    {images.map((item, index) => (
                        <img className={classes.gridImg} alt='breedImage' src={item} key={index}/>
                    ))}
                </div>}

                <div className={classes.paper}>
                    <Paper elevation={1}>
                        <ul>
                            <li>{selectedBreed.description}</li>
                            <li>{`Temperament: ${selectedBreed.temperament}`}</li>
                            <li>{selectedBreed.weight.metric} Kg or {selectedBreed.weight.imperial} Pounds</li>
                            <li>Wiki:<a href={selectedBreed.wikipedia_url}>click!</a></li>
                        </ul>
                    </Paper>
                </div>
            </div>
        );
}