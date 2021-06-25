import { makeStyles } from '@material-ui/core';


export const useStylesApp = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        width: '80%',
        height: 'md',
    },
    gridListTile: {

    },
    gridImg: {
        minHeight: '100px',
        minWidth: '100px',
        maxHeight: '300px'
    }
    

}))


