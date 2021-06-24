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
        justifyContent: 'center',
        width: '80%',
        height: 'md',
    },
    gridListTile: {
        maxHeight: '300px',
        width: '400px',
    },

    

}))


