import { makeStyles } from '@material-ui/core';


export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: '80%',
        height: 'md',
    },
    gridListTile: {
        maxHeight: '300px',
        width: '400px',
        backgroundColor: 'red'
    },
    

}))


